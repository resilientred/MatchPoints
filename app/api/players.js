import express from "express";
import Club from "../models/club";
import { csrfProtection, clubMethods, client } from "../helpers/appModules";
import ClubModel from "../models/club";

const router = express.Router();
router.route("/players").get((req, res) => {
  const clubId = req.club._id;
  client.get(`players:${clubId}`, (err, reply) => {
    if (!reply) {
      ClubModel.findPlayers(clubId)
        .then((data) => {
          client.set(`players:${clubId}`, JSON.stringify(data.players));
          res.status(200).send(data.players);
        }).catch((err) => {
          console.log(err);
          res.status(404).send("Unable to fetch players, please try again later.");
        });
    } else {
      res.status(200).send(JSON.parse(reply));
    }
  })
});

router.route("/players/new")
  .post(csrfProtection, (req, res) => {
    const clubId = req.club._id;
    const data = req.body.player;
    const err = {};
    let hasError = false;
    if (data.rating === "0") {
      err.rating = "Rating cannot be empty.";
      hasError = true;
    }
    if (data.name === "") {
      err.name = "Name cannot be empty.";
      hasError = true;
    }
    if (hasError) {
      res.status(422).send(err);
      return;
    }

    ClubModel.addPlayer(clubId, data)
      .then((player) => {
        client.del(`players:${clubId}`);
        res.status(200).send(player);
      }).catch((err) => {
        res.status(422).send(err);
      });
  });

router.route("/players/:id")
  .delete(csrfProtection, (req, res) => {
    const clubId = req.club._id;
    const id = req.params.id;

    Club.removePlayer(clubId, id)
      .then((club) => {
        client.del(`players:${clubId}`);
        clubMethods.setCurrentClub(club);
        res.status(200).send(id);
      }).catch(() => {
        res.status(422).send("Unable to remove player");
      });
  })
  .patch(csrfProtection, (req, res) => {
    const clubId = req.club._id;
    const id = req.params.id;
    const player = req.body.player;

    Club.updatePlayer(clubId, id, player)
      .then(() => {
        client.del(`players:${clubId}`);
        res.status(200).send(player);
      }).catch((err) => {
        console.log(err);
        res.status(422).send("Unable to update player");
      });
  });

export default router;
