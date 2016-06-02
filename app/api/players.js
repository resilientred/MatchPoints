import express from 'express';
import Player from '../models/player.js';
import BodyParser from 'body-parser';
const router = express.Router();
const parseUrlencoded = BodyParser.urlencoded({ extended: false });

router.route("/players")
	.get((req, res)=>{
  Player.find( (err, players) => {
    if (err) {
      console.log(err);
    } else {
      res.json(players);
      res.end();
    }
  })
})
  .post(parseUrlencoded, (req, res) => {
    let data = req.body;
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
})
  .delete((req, res)=>{

})
  .patch((req, res)=>{

});
  
export default router;
