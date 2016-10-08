# MatchPoints [Live Link](http://www.matchpoints.org)
MatchPoints is a Full-stack web round-robin rating system. It is expected to provide a platform for round-robin organizers to:
* group players
* record results
* calculate scores

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
 - [x] Allow users to import players with csv or json files
 - [ ] Allow Users to update previous saved results
 - [ ] Adjust results automatically if an older session is saved after the newer one
 - [ ] Allow Users to customize scoring algorithm

## Bug fix
- [ ] Grouping algorithm

## Languages:
 - Front-end: React.js with Flux architecture
 - Back-end: Node.js/Express.js
 - Database: MongoDB with Mongoose ODM + Redis as a temporary store
 - Deployed on Amazon EC2 with ElastiCache

## Implementation:
MatchPoint allows users to dynamically change the range of players that is allowed in a group. It also offers the possible schemata that fulfill the criteria.

### Helper Methods
```javascript
const schema = {};
const findSchemata = (numPlayers, rangeOfPlayers = [6, 5, 4]) => {
  if (numPlayers < 0) return null;
  if (numPlayers === 0) return [[]];
  let possibilities = [];
  const recursions = [];

  if (!schema[numPlayers]) {
    schema[numPlayers] = {};
  }
  if (!schema[numPlayers][rangeOfPlayers[0]]) {
    rangeOfPlayers.forEach((range, i) => {
      recursions.push([range, findSchemata(numPlayers - range, rangeOfPlayers.slice(i))]);
    });

    if (recursions.every(result => (result[1] === false))) return null;

    recursions.forEach((test) => {
      if (test[1]) {
        possibilities = possibilities.concat(test[1].map(
          result => [test[0]].concat(result)
        ));
      }
    });
    schema[numPlayers][rangeOfPlayers] = possibilities;
  }

  return schema[numPlayers][rangeOfPlayers];
};
```

### MongoDB
MatchPoint uses mongoose CDM to construct schemas and help with data validations. Mongoose is used with Bluebird to promisify results. The schemas are constructed as follows:

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
});

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
Matchpoint allows users to create schedules in pdfs and provide it to the players. It does so using html5-to-pdf library. Redis provides a platform for caching pdf links, expiring and cleaning up old pdfs.

Upon creation of pdfs, the filenames are stored to the Redis store and are set to expire after 15 minutes. Once expired, a listener which is listening on the "expired" event, will remove the files.

```js
client.setex(url, 60*15, "true", (err) => {
  if (err) console.log(err);
});
subscriber.on('pmessage', (pattern, channel, message) => {
  switch (message) {
    case "expired":
      const key = channel.split(":")[1];
      _handleExpired(key);
      break;
  }
});

const _handleExpired = (name) => {
  const filePath = path.join(__dirname, "..", "..", "pdfs", `${name}.pdf`);
  fs.unlink(filePath, (err) => {
    if (err) return console.log(err);
  })
};
```

Every time a new session is initiated, the data will be saved at an interval of 60 seconds to the Redis store, and it is available as long as the user is active or within 15 minutes after leaving the page.

```js
this.int = setInterval(this.tempSave, 30000);

let data = JSON.stringify(req.body.session);
client.setex(`tempsess#${clubId}`, 300, data, (err) => {
  if(err) console.log(err);
});
```

Every time a user navigated to the new session page, a request will be made to inquire whether or not a previous session is available. If one such session is found, users will be prompted to decide whether or not a user want to restore the data. If a user decides to restore the session, the expiration of the data will be refreshed in Redis.

Since this component, which has sub-components, does not have direct control of all the data, I utilized componentWillReceiveProps to restore data. A prop, particularly "this.cached", is passed down initially as false. Should a user decides to restore a session, "this.cached" will become true. The sub-component will update itself accordingly.

```js
client.get("tempsess#" + _clubId, (err, data) => {
  if (data){
    client.setex("tempsess#" + _clubId, 300, data, err => {if(err) console.log(err)});
    res.status(200).send(JSON.parse(data));
  } else {
    res.status(200).send("no data cached");
    res.end();
  }
});
```

### Roundrobin scheduler
The Roundrobin scheduler is based on this algorithm ([link](http://stackoverflow.com/a/6649732)). The algorithm is created based on a structure that is similar to a ring buffer.


