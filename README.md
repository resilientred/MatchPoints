# MatchPoints [Live Link](http://www.matchpoints.org)
MatchPoints is a Full-stack web round-robin rating system. It is expected to provide a platform for round-robin organizers to:
* group players
* record results
* calculate scores

And allow users to:
* query results based on date
* query their indiviual old results

MatchPoints utilizes Redis to reduce the number of times data is fetched the database, thus reduce latency in many requests.

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
 - Database: MongoDB with Mongoose ODM + Redis cache
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

### Roundrobin scheduler
The Roundrobin scheduler is based on this algorithm ([link](http://stackoverflow.com/a/6649732)). The algorithm is created based on a structure that is similar to a ring buffer.


