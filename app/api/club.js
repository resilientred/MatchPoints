import express from 'express';
import bodyParser from 'body-parser';
import ClubModel from '../models/club';

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
    }).get("/:clubId", (req, res) => {
        let clubId = req.params.clubId;
        ClubModel.findClub(clubId)
          .then((club) => {
            res.status(200).send(club);
            res.end();
          }).catch((err) => {
            res.status(500);
            res.end();
          });
      }).get("/:clubId/roundrobins", (req, res) => {
        let clubId = req.params.clubId;
        ClubModel.findRoundRobins(clubId)
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
      }).post("/:clubId/new", parsedUrlEncoded, (req, res) => {
        let clubId = req.params.clubId;
        let newSessionData = req.body;

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

