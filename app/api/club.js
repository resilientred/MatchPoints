import express from 'express'
import bodyParser from 'body-parser'
import ClubModel from '../models/club'
import RoundRobinModel from "../models/roundrobin"
import Parallel from "paralleljs"
import PlayerModel from "../models/player"
const router = express.Router();
const parsedUrlEncoded = bodyParser.urlencoded({ extended: true });



function clubRoutes(clubMethods){
  return ( 
    router.get("", (req, res) => {
      clubMethods.currentClub(req)
        .then((currentClub) => {
          res.status(200).send(currentClub);
          res.end();
        }).catch((err) => {
          console.log(err);
        });
    }).get("/:clubId/sessions", (req, res) => {
        var clubId = req.params.clubId;
        RoundRobinModel.findRoundRobinsByClub(clubId)
          .then((roundrobins) => {
            res.status(200).send(roundrobins);
            res.end();
          }).catch((err)=>{
            res.status(500);
            res.end();
          });

      }).post("/:clubId/session/new", parsedUrlEncoded, (req, res) => {
        var clubId = req.params.clubId,
            reqBody = req.body;

        var newRR = new RoundRobinModel({
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
      }).patch("/:clubId/sessions/:id/finalize", parsedUrlEncoded, (req, res) => {
           var id = req.params.id,
               clubId = req.params.clubId;
        RoundRobinModel.finalizeResult(clubId, id)
          .then((status) => {
            return RoundRobinModel.findRoundRobin(id);
        }).then((session)=> {
            res.status(200).send(session);
            res.end();
        }).catch((err)=> {

            res.status(422).send(err);
            res.end();
        });
      }).delete("/sessions/:id", (req, res) => {
        var id = req.params.id;
        RoundRobinModel.deleteRoundRobin(clubId, id)
          .then((session) => {
            res.status(200).send(id);
            res.end();
          }).catch((err) => {
            res.status(500);
            res.end();
          });
      }).patch("/sessions/:id", parsedUrlEncoded, (req, res) => {
        var id = req.params.id,
            data = req.body.data,
            ratingUpdateList = req.body.ratingUpdateList;
        // var p = new Parallel(ratingUpdateList);

        // p.map(updateRating).then(function() {
        //   console.log("done");
        // }); <--- parallel loses context - does not have closures
        var promiseResults = [];
        for (var player in ratingUpdateList){
          promiseResults.push(PlayerModel.updateRating(player, ratingUpdateList[player])); 
        } //wrap this in promise
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
      }).post('/new', parsedUrlEncoded, (req, res) => {
        var data = req.body;
        var newClub = new ClubModel({
          username: data.username,
          clubName: data.club,
          city: data.city,
          state: data.stateName
        });

        ClubModel.generatePasswordDigest(data.password)
          .then((digest) => {
            newClub.passwordDigest = digest;
            return newClub.save();
          }).catch((err)=>{
            res.status(500).send(err);
            res.end();
          }).then((club)=> {
            clubMethods.logIn(res, club);
          }).catch((err)=>{
            res.status(422).send(err);
            res.end();
          })
      })
    );
}

export default clubRoutes;

