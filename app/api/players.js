import express from 'express';
import { Player } from '../models/player.js';
import Club from "../models/club"
import { parseUrlEncoded, csrfProtection, clubMethods } from "../helpers/appModules"
const router = express.Router();

router.route("/:clubId/players")
	.get((req, res)=>{
    const clubId = req.params.clubId;
    console.log("reaced routes")
    Club.findPlayers(clubId)
      .then( (players) => {
        console.log(players)
        res.status(200).send(players);
      }).catch( err => {
        res.status(422).send(err);
      })
  });

router.route("/:clubId/players/:id")
  .delete(csrfProtection, (req, res)=>{
    let { clubId, id } = req.params;

    Club.removePlayer(clubId, id)
      .then(club => {
        clubMethods.setCurrentClub(club);
        res.status(200).send(id);
      }).catch( err  => {
        res.status(422).send("Unable to remove player");
      })
  }).patch(csrfProtection, (req, res)=>{
    let { clubId, id } = req.params;
    let player = req.body.player;
    Club.updatePlayer(clubId, id, player)
      .then(club => {
        res.status(200).send(club);
      }).catch(err => {
        res.status(422).send("Unable to update player");
      })
});
  
export default router;
