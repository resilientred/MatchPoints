export default class ScoreCalculation {
  constructor(players, schema, results) {
    this.players = players;
    this.results = results;
    this.schema = schema;
  }

  calculateRatingChange() {
    let start = 0;
    const ratingChange = this.schema.reduce((acc, playerPerGroup) => ({
      ...acc,
      ...this.calculateRatingChange(this.players.slice(start, start + playerPerGroup)),
    }), {});
    const sortedPlayerList = this.schema.players
    return ratingChange;
  }

  calculateRatingChangePerGroup(players) {
    const playerRef = {};
    const ratingChange = {};
    joinedPlayers.forEach((player) => {
      players[player._id] = player;
      ratingChange[player._id] = 0;
    });
    for (const curPlayerId of Object.keys(this.results)) {
      const personalResult = this.results[curPlayerId];
      for (const otherId of Object.keys(personalResult)) {
        const record = personalResult[otherId];
        if (record[0] - record[1] === 0) {
          scoreChange[curPlayerId][otherId] = 0;
        } else {
          const sign = record[0] - record[1] > 0 ? 1 : -1;
          const player1 = players[curPlayerId];
          const player2 = players[otherId];

          let scoreAdjust;
          if (sign === 1) {
            scoreAdjust = parseInt(16 -
              ((player1.rating - player2.rating) * 0.04), 10) - (record[1] * 2);
          } else {
            scoreAdjust = -(parseInt(16 +
              ((player1.rating - player2.rating) * 0.04), 10)) + (record[0] * 2);
          }

          if (sign === 1 && scoreAdjust < 0) {
            scoreAdjust = 0 - (record[1] * 2);
          }
          ratingChange[curPlayerId] += scoreAdjust;
        }
      }
    }
  }

  sortPlayersInGroup() {
    // this cannot do
    const playerRecords = Object.keys(this.results).map((playerId) => {
      const versusRecords = this.results[playerId];
      const record = {
        id: playerId,
        wins: 0,
        losses: 0,
      };
      Object.keys(versusRecords).forEach((otherPlayer) => {
        const [wins, losses] = versusRecords[otherPlayer];
        record.wins += wins;
        record.losses += losses;
      });

      return record;
    });

    const sortedPlayerList = playerRecords.sort((p1, p2) => {
      if (p1.wins > p2.wins) {
        return -1;
      } else if (p1.wins < p2.wins) {
        return 1;
      } else if (p1.losses < p2.losses) {
        return -1;
      } else {
        const [player1GameWon, player2GameWon] = state.results[p1.id][p2.id];
        return player1GameWon - player2GameWon;
      }
    });

    return sortedPlayerList;
  }
}
