import express from 'express';
import bodyParser from 'body-parser';
import ClubModel from '../models/club';
import RoundRobinModel from "../models/roundrobin";
const router = express.Router();
const parsedUrlEncoded = bodyParser.urlencoded({ extended: true });

function clubRoutes(clubMethods){
  return ( 
    router.get("", (req, res) => {
      console.log("at get ...");
      clubMethods.currentClub(req)
        .then((currentClub) => {
          res.status(200).send(currentClub);
          res.end();
        }).catch((err) => {
          console.log(err);
        });
    }).get("/:clubId/roundrobins", (req, res) => {
        let clubId = req.params.clubId;
        RoundRobin.findRoundRobinsByClub(clubId)
          .then((roundrobins) => {
            res.status(200).send(roundrobins);
            res.end();
          }).catch((err)=>{
            res.status(500);
            res.end();
          });

      }).delete("/:clubId/roundrobins/:roundrobinId", (req, res) => {
        let clubId = req.params.clubId;
        let roundrobinId = req.params.roundrobinId;
        ClubModel.findClub(clubId)
          .then((club) => {
            return club.deleteRoundRobin(clubId, roundrobinId);
          }).catch((err) => {
            res.status(500);
            res.end();
          }).then((club) => {
            res.status(200).send(club);
            res.end();
          }).catch((err) => {
            res.status(500);
            res.end();
          });
      }).post("/:clubId/session/new", parsedUrlEncoded, (req, res) => {
        console.log(req);
        var clubId = req.params.clubId,
            reqBody = req.body;

        var newRR = new RoundRobinModel({
          _clubId: clubId,
          date: reqBody.date,
          numOfPlayers: reqBody.numOfPlayers,
          addedPlayers: reqBody.addedPlayers,
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
            return newClub.save();//do I need to call it?
          }).catch((err)=>{
            res.status(500).send(err);
            res.end();
          }).then((club)=> {
            clubMethods.logIn(res, club);
          }).catch((err)=>{
            res.status(422).send(err);
            res.end();
          })
      }).post("/:clubId/finalize/:roundrobinId", parsedUrlEncoded, (req, res) => {
        let clubId = req.params.clubId,
            roundrobinId = req.params.roundrobinId;
        ClubModel.finalizeResult(clubId, roundrobinId)
          .then((club) => {
            res.status(200).send(club);
            res.end();
        });
      })
    );
}

export default clubRoutes;

