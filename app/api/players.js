import express from 'express';
import { Player } from '../models/player.js';
import Club from "../models/club"
import { parseUrlEncoded, csrfProtection } from "../helpers/app_modules"
const router = express.Router();

router.route("/players")
	.get((req, res)=>{
    const clubId = req.params.clubId;
    Club.findPlayers(clubId).
      then( players => {
        res.status(200).send(players);
      }).catch( err => {
        res.status(422).send(err);
      })
  }).post(parseUrlEncoded, csrfProtection, (req, res) => {
    let data = req.body.player;
    let player = new Player({
      "name": data.name,
      "rating": +data.rating
    });
    
    player.save((err, player)=> {
      if (err) {
        res.status(422).send(err);
      } else {
        res.status(201).send(player);
        res.end();
      }
      
    })
  }).delete((req, res)=>{

  }).patch((req, res)=>{

});
  
export default router;
