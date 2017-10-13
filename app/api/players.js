import express from "express";
import Club from "../models/club";
import { csrfProtection, clubMethods, client } from "../helpers/appModules";
import ClubModel from "../models/club";
import PlayerValidation from "../models/player";

const router = express.Router();
router.route("/players").get((req, res, next) => {
  const clubId = req.club._id;

  client.get(`players:${clubId}`, (err, reply) => {
    if (!reply) {
      ClubModel.findPlayers(clubId)
        .then((data) => {
          client.set(`players:${clubId}`, JSON.stringify(data.players));
          res.status(200).send({ players: data.players });
        }).catch((err) => {
          next({ code: 404, message: "Unable to fetch players, please try again later." });
        });
    } else {
      let players;
      try {
        players = JSON.parse(reply);
        res.status(200).send({ players });
      } catch (_e) {
        next({ code: 500 });
      }
    }
  })
});

router.route("/players/active").get((req, res, next) => {
  const clubId = req.club._id;
  ClubModel.getMostActivePlayers(clubId)
    .then((data) => {
      res.status(200).send({ players: data });
    });
});

router.route("/players/new")
  .post(csrfProtection, (req, res, next) => {
    const clubId = req.club._id;
    const data = req.body.player;

    const [hasError, err] = PlayerValidation(data);
    if (hasError) {
      return next({ code: 422, message: err });
    }

    ClubModel.addPlayer(clubId, data)
      .then(
        (player) => {
          client.del(`players:${clubId}`);
          res.status(200).send(player);
        },
        err => next({ code: 400, message: 'Unable to add Player' })}
      );
  });

router.route("/players/:id")
  .delete(csrfProtection, (req, res) => {
    const clubId = req.club._id;
    const id = req.params.id;
    Club.removePlayer(clubId, id)
      .then(
        () => {
          client.del(`players:${clubId}`);
          res.status(200);
        },
        (err) => {
          next({ code: 400, message: "Unable to remove player" });
          res.status(422).send();
        }
      );
  })
  .patch(csrfProtection, (req, res) => {
    const clubId = req.club._id;
    const id = req.params.id;
    const player = req.body.player;

    Club.updatePlayer(clubId, id, player)
      .then(
        () => {
          client.del(`players:${clubId}`);
          res.status(200).send({ player: player });
        },
        (err) => {
          next({ code: 400, message: "Unable to update player" });
        }
      );
  });

export default router;
