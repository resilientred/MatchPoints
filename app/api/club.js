import express from 'express'
import ClubModel from '../models/club'
import RoundRobinModel from "../models/roundrobin"
import { Player } from "../models/player"
import { clubMethods, parseUrlEncoded, csrfProtection, client } from "../helpers/app_modules"

const router = express.Router();

router.get("", (req, res) => {
    clubMethods.currentClub(req)
      .then((currentClub) => {
        res.status(200).send(currentClub);
        res.end();
      }).catch((err) => {
        console.log(err);
      });
  }).get("/all", (req, res) => {
      ClubModel.findAll()
        .then(roundrobins => {
          res.status(200).send(roundrobins);
        }).catch(err => {
          res.status(404);
          res.end();
        })
  }).get("/:clubId/sessions", (req, res) => {
      let clubId = req.params.clubId;
      RoundRobinModel.findRoundRobinsByClub(clubId)
        .then((roundrobins) => {
          res.status(200).send(roundrobins);
          res.end();
        }).catch((err)=>{
          res.status(500);
          res.end();
        });

    }).get("/:clubId/roundrobins", (req, res) => {
      let clubId = req.params.clubId;
      RoundRobinModel.findRoundRobinsByClub(clubId)
        .then((roundrobins) => {
          res.status(200).send({clubId, roundrobins});
          res.end();
        }).catch((err)=>{
          res.status(500);
          res.end();
        });

    }).post("/:clubId/session/new", parseUrlEncoded, csrfProtection, (req, res) => {
      let _clubId = req.params.clubId,
          data = req.body.session;
          
      let newRR = new RoundRobinModel({
        _clubId, ...data })
      
      newRR.save()
        .then((rr) => {
          console.log(rr);
          res.status(200).send(rr);
        }).catch((err)=>{
          res.status(422).send(err);
        })
    }).post("/:clubId/temp", parseUrlEncoded, csrfProtection, (req, res) => {
      let _clubId = req.params.clubId,
          data = JSON.stringify(req.body.session);
          client.setex("tempsess#" + _clubId, 300, data, err => console.log(err));
          res.status(200)
          res.end();
    }).get("/:clubId/temp", (req, res) => {
      let _clubId = req.params.clubId;
      client.get("tempsess#" + _clubId, (data, err) => {
        if (data){
          res.status(200).send(JSON.parse(data));
        } else {
          console.log(err);
          res.status(200).send("no data cached");
          res.end();
        }
      })
    }).post("/:clubId/players/new", parseUrlEncoded, csrfProtection, (req, res) => {
      let clubId = req.params.clubId, 
          data = req.body.player;
      ClubModel.addPlayer(clubId, data)
        .then((club) => {
          res.status(200).send(club);
        }).catch((err) => {
          if (_player){
            Player.remove({"_id": _player._id});
          }
          res.status(422).send(err);
        }).catch((err) => {
          res.status(500).send(err);
        })
    }).delete("/sessions/:id", (req, res) => {
      let id = req.params.id;
      RoundRobinModel.deleteRoundRobin(clubId, id)
        .then((session) => {
          res.status(200).send(id);
          res.end();
        }).catch((err) => {
          res.status(500);
          res.end();
        });
    }).post("/:clubId/sessions/:id", parseUrlEncoded, csrfProtection, (req, res) => {
      let id = req.params.id,
          clubId = req.params.clubId,
          { date, data, ratingUpdateList } = req.body.result;
      
      let promiseResults = [];
      ClubModel.postPlayersRating(clubId, ratingUpdateList, date)
        .then((club) => {
            console.log("save successfully...")
            console.log(club);
            return RoundRobinModel.saveResult(id, data, ratingUpdateList);
          }).then((session) => {
            console.log(session);
            res.status(200).send(session);
          }).catch((err) => {
            console.log(err);
            res.status(422).send(err);
          })
    }).patch("/:clubId/sessions/:id", parseUrlEncoded, csrfProtection, (req, res) => {
      let id = req.params.id,
          data = req.body.data,
          ratingUpdateList = req.body.ratingUpdateList;

      let promiseResults = [];
      for (let player in ratingUpdateList){
        promiseResults.push(Player.updateHistory(player, ratingUpdateList[player])); 
      } 


    }).post('/new', parseUrlEncoded, (req, res) => {
      let data = req.body.user;
      if (data.password <= 8) {
        res.status(422).send("Password must be 8 characters long\n" +
          "Must consist of at least:\n\t1) One special character (*!@$.^)\n\t" +
          "2) One Capital Letter\n\t3) One Lowercase Letter\n\t4) One Number");
      }
      let newClub = new ClubModel({
        username: data.username,
        clubName: data.club,
        location: { city: data.city,
                    state: data.stateName
                  },
        clubName: data.clubName
      });

      ClubModel.generatePasswordDigest(data.password)
        .then((digest) => {
          newClub.passwordDigest = digest;
          return newClub.save();
        }).then((club)=> {
          clubMethods.logIn(res, club);
        }).catch((err)=>{
          res.status(422).send(err);
          res.end();
        })
    })



export default router;

