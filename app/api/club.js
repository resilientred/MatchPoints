import express from 'express'
import ClubModel from '../models/club'
import RoundRobinModel from "../models/roundrobin"
import Parallel from "paralleljs"
import { Player } from "../models/player"
import { clubMethods, parseUrlEncoded, csrfProtection } from "../app_modules"
const router = express.Router();

router.get("", (req, res) => {
    clubMethods.currentClub(req)
      .then((currentClub) => {
        res.status(200).send(currentClub);
        res.end();
      }).catch((err) => {
        console.log(err);
      });
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

    }).post("/:clubId/session/new", parseUrlEncoded, (req, res) => {
      let clubId = req.params.clubId,
          reqBody = req.body;

      let newRR = new RoundRobinModel({
        _clubId: clubId,
        date: reqBody.date,
        numOfPlayers: reqBody.numOfPlayers,
        players: reqBody.addedPlayers,
        selectedSchema: reqBody.selectedSchema,
        schemata: reqBody.schemata
      })
      
      newRR.save()
        .then((rr) => {
          console.log(rr);
          res.status(200).send(rr);
        }).catch((err)=>{
          console.log(err)
          res.status(422).send(err);
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
    }).post("/sessions/:id", parseUrlEncoded, (req, res) => {
      //if finalized is false
      let id = req.params.id,
          data = req.body.data,
          ratingUpdateList = req.body.ratingUpdateList;

      let promiseResults = [];
      for (let player in ratingUpdateList){
        promiseResults.push(Player.addHistory(player, ratingUpdateList[player])); 
      } 
      Promise.all(promiseResults).then( (status) => {
        console.log(status);
        return RoundRobinModel.saveResult(id, data);
      } ).then((success) => {
          return RoundRobinModel.findRoundRobin(id);
        }).then((session) => {
          console.log(session);
          res.status(200).send(session);
        }).catch((err) => {
          console.log(err);
          res.status(422).send(err);
        })
    }).patch("/sessions/id", parseUrlEncoded, (req, res) => {
        //if finalized is true
      let id = req.params.id,
          data = req.body.data,
          ratingUpdateList = req.body.ratingUpdateList;

      let promiseResults = [];
      for (let player in ratingUpdateList){
        promiseResults.push(Player.updateHistory(player, ratingUpdateList[player])); 
      } 
      Promise.all(promiseResults).then( (status) => {
        console.log(status);
        return RoundRobinModel.updateResult(id, data);
      } ).then((success) => {
          return RoundRobinModel.findRoundRobin(id);
        }).then((session) => {
          console.log(session);
          res.status(200).send(session);
        }).catch((err) => {
          console.log(err);
          res.status(422).send(err);
        })
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

