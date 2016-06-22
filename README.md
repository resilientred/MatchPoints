# MatchPoint
MatchPoint is a Full-stack web Round-Robin rating systems. It is expected to provide a platform for round-robin organizers to:
* group players
* record results
* calculate score

And allow users to:
* query results based on date
* query their indiviual old results
## Todos
 - [x] saving schema
 - [ ] temporarily save schema in react-cookie and empty after sending request to store
 - [ ] pdf generator
 - [ ] deploy on heroku

## Expected Features
 - [x] Arrange groups for players based on ratings
 - [ ] Allow organizers to enter results
 - [ ] Allow Users to customize scoring algorithm
 - [ ] Calculate scores automatically based on default or given scoring algorithms
 - [ ] Provide a platform for participants to query results based on event date
 - [ ] Provide a platform for participants to query their individual past results

## Languages:
 - Front-end: React.js with Flux architectural framework
 - Back-end: Node.js/Express.js
 - Database: MongoDB with Mongoose ODM (with Redis caching - not implementing yet)
 

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
  username: {type: String, required: true, index: { unique: true }},
  passwordDigest: {type: String, required: true},
  sessionToken: {type: String, default: URLSafeBase64.encode(crypto.randomBytes(32))},
  clubName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  id: { type: String, default: shortid.generate }
});

const roundRobinSchema = new Schema({
  _clubId: { type: String, required: true},
  date: { type: Date, default: Date.now, required: true },
  numOfPlayers: { type: Number, required: true },
  players: { type: Object },
  schemata: { type: Object },
  selectedSchema: { type: Object},
  results: { type: Object, default: {} },
  finalized: { type: Boolean, default: false },
  id: { type: String, default: shortid.generate, required: true }
});

```

