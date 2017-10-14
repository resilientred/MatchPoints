import express from "express";
import Club from "../models/club";
import Player from "../models/Player";
import { csrfProtection, clubMethods, client } from "../helpers/appModules";
import PlayerValidation from "../validations/player";

const router = express.Router();
router.route("/players").get((req, res, next) => {
  const clubId = req.club.id;

  // client.get(`players:${clubId}`, (err, reply) => {
    // if (!reply) {
      Player.findPlayers(clubId)
        .then((players) => {
          // client.set(`players:${clubId}`, JSON.stringify(data.players));
          res.status(200).send({ players });
        }).catch(err => next({ code: 500, message: err }));
    // } else {
    //   let players;
    //   try {
    //     players = JSON.parse(reply);
    //     res.status(200).send({ players });
    //   } catch (_e) {
    //     next({ code: 500, message: 'Failed to parse redis data.' });
    //   }
    // }
  // })
})
.post(csrfProtection, (req, res, next) => {
  const clubId = req.club.id;
  const data = req.body.player;

  const [hasError, err] = PlayerValidation(data);
  if (hasError) {
    return next({ code: 422, message: err });
  }

  Player.addPlayer(clubId, data)
    .then(
      (player) => {
        client.del(`players:${clubId}`);
        res.status(200).send(player);
      }
    ).catch(err => next({ code: 500, message: err }));
});

router.route("/players/active").get((req, res, next) => {
  // not tested...
  const clubId = req.club.id;
  Player.getMostActivePlayers(clubId)
    .then((data) => {
      res.status(200).send({ players: data });
    }).catch(err => next({ code: 500, message: err }));
});

router.route("/players/:id")
  .delete(csrfProtection, (req, res) => {
    const clubId = req.club._id;
    const id = req.params.id;
    Player.removePlayer(clubId, id)
      .then(
        () => {
          client.del(`players:${clubId}`);
          res.status(200);
        },
        (err) => {
          if (err.player) {
            next({ code: 422, message: err });
          }
          throw err;
        }
      ).catch(err => next({ code: 500, message: err }));
  })
  .patch(csrfProtection, (req, res) => {
    const clubId = req.club._id;
    const id = req.params.id;
    const player = req.body.player;

    Player.updatePlayer(clubId, id, player)
      .then(
        () => {
          client.del(`players:${clubId}`);
          res.status(200).send({ player: player });
        },
        (err) => {
          if (err.player) {
            next({ code: 422, message: err });
          }
          throw err;
        }).catch(err => next({ code: 500, message: err }));
  });

export default router;
