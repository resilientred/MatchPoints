import express from 'express';
import { router } from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';
import mongoose from 'mongoose';
import Player from "./app/models/player";
import BodyParser from 'body-parser';
import sassMiddleware from 'node-sass-middleware';
const app = express();
const compiler = webpack(config);
const parseUrlencoded = BodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb://localhost/roundrobindb');
app.use(
  sassMiddleware({
    src: __dirname + "/sass",
    dest: __dirname + "/public/styles",
    prefix: '/styles',
    debug: true
  })
);

app.use(express.static(__dirname + "/public"));
app.use(webpackMiddleware(compiler));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});



app.route("/api/players")
  .get((req, res)=>{
  Player.find(function(err, players){
    if (err) {
      console.log(err);
    } else {
      res.json(players);
    }
  })
})
  .post(parseUrlencoded, (req, res) => {
    let data = req.body;
    let player = new Player({
      "name": data.name,
      "rating": +data.rating
    })
    player.save((err, player)=> {
      if (err) {
        console.log(err);
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

app.listen(3000, () => {
  console.log('listening on port 3000...');
});



