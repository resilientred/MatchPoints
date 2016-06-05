# MatchPoint
MatchPoint is a Full-stack web Round-Robin rating systems. It provides a platform (or should) for round-robin organizers to:
* group players
* record results
* calculate score

And allow users to:
* query results based on date
* query their indiviual old results

## Expected Features
 - [ ] Arrange groups for players based on ratings
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
  static findSchemata(numPlayers, rangeOfPlayers = [6, 5, 4]){
      if (numPlayers < 0) return null;
      if (numPlayers === 0) return [[]];
      let possibilities = [],
          recursions = [];
      rangeOfPlayers.forEach((range, i)=>{
        recursions.push([range, Grouping.findSchemata(numPlayers - range, rangeOfPlayers.slice(i))]);
      })

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
