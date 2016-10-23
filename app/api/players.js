import express from "express";
import Club from "../models/club";
import { parseUrlEncoded, csrfProtection, clubMethods } from "../helpers/appModules";

const router = express.Router();

router.route("/:clubId/players")
.get((req, res) => {
  const clubId = req.params.clubId;
  Club.findPlayers(clubId)
    .then((players) => {
      console.log(players);
      res.status(200).send(players);
    }).catch((err) => {
      res.status(422).send(err);
    });
});

router.route("/:clubId/players/:id")
  .delete(csrfProtection, (req, res) => {
    const { clubId, id } = req.params;

    Club.removePlayer(clubId, id)
      .then((club) => {
        clubMethods.setCurrentClub(club);
        res.status(200).send(id);
      }).catch(() => {
        res.status(422).send("Unable to remove player");
      });
  })
  .patch(csrfProtection, parseUrlEncoded, (req, res) => {
    const { clubId, id } = req.params;
    const player = req.body.player;
    Club.updatePlayer(clubId, id, player)
      .then((club) => {
        clubMethods.setCurrentClub(club);
        res.status(200).send(club);
      }).catch((err) => {
        console.log(err);
        res.status(422).send("Unable to update player");
      });
  });

export default router;
