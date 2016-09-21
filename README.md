# MatchPoints [Live Link](http://www.matchpoints.org)

MatchPoints is a Full-stack web Round-Robin rating systems. It is expected to provide a platform for round-robin organizers to:
* group players
* record results
* calculate score

And allow users to:
* query results based on date
* query their indiviual old results
## Expected Features (MVP)
 - [x] Arrange groups for players based on ratings
 - [x] Allow organizers to enter results
 - [x] Generate Score Sheets (pdf) for users
 - [x] Calculate scores automatically based on default algorithms
 - [x] Provide a platform for participants to query their individual past results
 - [x] Provide a platform for participants to query results based on event date

## Bonus features (Will be implemented in the future)
 - [x] Temporary Save sessions and allow users to retrieve results
 - [ ] Allow users to import players in csv, json, (or xml?) formats
 - [ ] Allow Users to update previous saved results
 - [ ] Adjust results automatically if an older session is saved after the newer one
 - [ ] Allow Users to customize scoring algorithm

## Bugs fix:
- [x] User login bugs
- [x] Styling is not showing up for pdfs
- [x] pdf stylings

## Languages:
 - Front-end: React.js with Flux architecture
 - Back-end: Node.js/Express.js
 - Database: MongoDB with Mongoose ODM + Redis as a temporary store
 - Deployed on Amazon EC2
 
## Implementation:
MatchPoint allows users to dynamically change the range of players that can be in a single group. It also offers the possible schemata that fulfills the condition of the range of players.

### Helper Methods
```javascript
const schema = {} 
export const findSchemata = (numPlayers, rangeOfPlayers = [6, 5, 4]) => {
  if (numPlayers < 0) return null;
  if (numPlayers === 0) return [[]];
  let possibilities = [],
      recursions = [];
      
  if (!schema[numPlayers]){
    schema[numPlayers] = {};
  }
  if (!schema[numPlayers][rangeOfPlayers[0]]){
    rangeOfPlayers.forEach((range, i) => {
      recursions.push([range, findSchemata(numPlayers - range, rangeOfPlayers.slice(i))]);
    })

    if (recursions.every(result => !result[1])) return null;

    recursions.forEach((test) => {
      if (test[1]){
        possibilities = possibilities.concat(test[1].map( 
          result => [test[0]].concat(result)
        ));  
      }
    })
    schema[numPlayers][rangeOfPlayers] = possibilities;
  }

  return schema[numPlayers][rangeOfPlayers];
}
```

### MongoDB
MatchPoint uses mongoose CDM to help with data validations and to construct schemata. Mongoose is used with Bluebird module to avoid a maze of callbacks. The schemata are constructed as follows:

```javascript
const clubSchema = new Schema({
  username: {type: String, required: [true, "username required"], index: { unique: [ true, "Username has been taken."] }, min: [8, "has to be 8 characters long"]},
  passwordDigest: {type: String, required: true},
  sessionToken: {type: String, default: URLSafeBase64.encode(crypto.randomBytes(32))},
  clubName: { type: String, required: true},
  location: { city: {type: String, required: true},
              state: {type: String, required: true}
            },
  id: { type: String, default: shortid.generate, index: true },
  players: [playerSchema]
})

const playerSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, max: 3000, min: 0 },
  ratingHistory: [historySchema],
  updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
})

const historySchema = new Schema({
  date: Date,
  oldRating: Number,
  newRating: Number,
  ratingChange: Number
})

const roundRobinSchema = new Schema({
  _clubId: { type: String, required: true},
  date: { type: Date, default: Date.now, required: true },
  numOfPlayers: { type: Number, required: true },
  players: { type: Object },
  schemata: { type: Object },
  selectedSchema: { type: Object},
  results: { type: Array, default: [] },
  finalized: { type: Boolean, default: false },
  id: { type: String, default: shortid.generate, required: true, index: true }
})

```

### Redis as a temporary store
Matchpoint allows users to create schedules in pdfs and provide it to the players. It does so using html5-to-pdf library. Redis provides a platform for caching pdf links, expiring and cleaning up of old pdfs.

Upon creation of pdfs, the filename is stored in the Redis store and is set to expire after 15 minutes. Once expired, the listener which is listening on the "expired" event, will remove the file.

```js
client.setex(url, 60*15, "true", (err) => {
            if (err) console.log(err);
          }) 
subscriber.on('pmessage', (pattern, channel, message) => {
  switch (message){
    case "expired":
      const key = channel.split(":")[1];
      _handleExpired(key);
      break;
  }
})

const _handleExpired = (name) => {
  const filePath = path.join(__dirname, "..", "..", "pdfs", `${name}.pdf`);
  fs.unlink(filePath, (err) => {
    if (err) return console.log(err);
  })
};
```

Every time a new session has started, the stringified verison of the data will be saved temporarily every 30 seconds in the Redis store, and it is made available for as long as the user is active or 15 minutes after leaving the page.  

```js
this.int = setInterval(this.tempSave, 30000);

let data = JSON.stringify(req.body.session);
client.setex("tempsess#" + _clubId, 300, data, (err) => {
  if(err) console.log(err)
});


```

Every time a user opened the new session page, a request will be sent to the server to see whether or not a previous session is available. A dialog will be opened to ask whether or not a user want to restore the session. If a user decides to retrieve the session, the expire time of the data stored in Redis will be extended. 

Since this component, which has sub-components, does not have direct control to all the data, I utilized this technique with componentWillReceiveProps: I rely on the change of a prop (this.cached) passed down to allow the sub-components to decide whether or not they should use the props. The moment when this.props.cache changed from false to true, the sub-component will update itself with the other props passed down.

```js
client.get("tempsess#" + _clubId, (err, data) => {
        if (data){
          client.setex("tempsess#" + _clubId, 300, data, err => {if(err) console.log(err)});
          res.status(200).send(JSON.parse(data));
        } else {
          res.status(200).send("no data cached");
          res.end();
        }
      })

// how I implemented restore session
restoreSession = () => {
  this.selectedSchema = this.session.selectedSchema;
  this.schemata = this.session.schemata;
  this.pdfs = this.session.pdfs;
  this.max = this.session.max;
  this.min = this.session.min;
  this.cached = true;
  this.setState({      
    tab: this.session.tab,
    date: new Date(this.session.date),
    numPlayers: +this.session.numPlayers,
    addedPlayers: this.session.addedPlayers ? this.session.addedPlayers : {}
  })
  this.handleClose("dialogOpen")
}
```
