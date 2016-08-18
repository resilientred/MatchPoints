# MatchPoint
MatchPoint is a Full-stack web Round-Robin rating systems. It is expected to provide a platform for round-robin organizers to:
* group players
* record results
* calculate score

And allow users to:
* query results based on date
* query their indiviual old results
## Todos
 - [x] Refactor Navbar
 - [ ] Run bug test on save
 - [ ] Make pdf works // remove the option to retrieve pdf for them.. unless I can implement caching
 - [ ] buggg tests
 - [ ] temporarily save session in react-cookie/redis 
 - [ ] deploy on AWS

## Expected Features (MVP)
 - [x] Arrange groups for players based on ratings
 - [x] Allow organizers to enter results
 - [x] Generate Score Sheets (pdf) for users
 - [x] Calculate scores automatically based on default algorithms
 - [x] Provide a platform for participants to query their individual past results
 - [x] Provide a platform for participants to query results based on event date

## Bonus features
 - [ ] Temporary Save sessions and allow users to retrieve results
 - [ ] Allow users to import players in csv, json, (or xml?) formats
 - [ ] Allow Users to update previous saved results
 - [ ] Adjust results automatically if an older session is saved after the newer one
 - [ ] Allow Users to customize scoring algorithm

## Languages:
 - Front-end: React.js with Flux architecture
 - Back-end: Node.js/Express.js
 - Database: MongoDB with Mongoose ODM with Redis caching
 

## Implementation:
MatchPoint allows users to dynamically change the range of players that can be in a single group. It also offers the possible schemata that fulfills the condition of the range of players.

      
```javascript
  static findSchemata(numPlayers, start = 0, rangeOfPlayers = [6, 5, 4]){
      if (numPlayers < 0) return null;
      if (numPlayers === 0) return [[]];
      let possibilities = [],
          recursions = [];
      for (var i = 0; i < rangeOfPlayers.length - start; i++){
        var range = rangeOfPlayers[i + start];
        recursions.push([range, findSchemata(
              numPlayers - range, start + i, rangeOfPlayers)]);
      }

      if (recursions.every(result => (result[1] === false))) return null;

      recursions.forEach((test) => {
        if (test[1]){
          possibilities = possibilities.concat(test[1].map( 
            result => [test[0]].concat(result)
          ));  
        }
      })

      return possibilities;
    }
```

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

Matchpoint allows users to create schedules in pdfs and provide it to the players. It does so using html5-to-pdf library. Redis provides a platform for caching pdf links, expiring and cleaning up of old pdfs.

Upon creation of pdfs, the filename is stored in the Redis store and set ot expire after 15 minutes. Once expired, the listener which is listening on the expiring event, will remove the file.

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
