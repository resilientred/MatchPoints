import express from "express";
import Club from "../models/club";
import { parseUrlEncoded, csrfProtection, clubMethods } from "../helpers/appModules";

const router = express.Router();
router.route("/players/new")
  .post(parseUrlEncoded, csrfProtection, (req, res) => {
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

    ClubModel.addPlayer(req.clubId, data)
      .then((club) => {
        clubMethods.setCurrentClub(club);
        res.status(200).send(club);
      }).catch((e) => {
        res.status(422).send(e);
      });
  });

router.route("/players/:id")
  .delete(csrfProtection, (req, res) => {
    const id = req.params.id;

    Club.removePlayer(req.clubId, id)
      .then((club) => {
        clubMethods.setCurrentClub(club);
        res.status(200).send(id);
      }).catch(() => {
        res.status(422).send("Unable to remove player");
      });
  })
  .patch(csrfProtection, parseUrlEncoded, (req, res) => {
    const id = req.params;
    const player = req.body.player;
    Club.updatePlayer(req.clubId, id, player)
      .then((club) => {
        clubMethods.setCurrentClub(club);
        res.status(200).send(club);
      }).catch((err) => {
        console.log(err);
        res.status(422).send("Unable to update player");
      });
  });

export default router;
