import express from 'express';
import bodyParser from 'body-parser';
import ClubModel from '../models/club';

const router = express.Router();
const parsedUrlEncoded = bodyParser.urlencoded({ extended: true });

router.get("/:clubId", (req, res) => {
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
      let newClubData = req.body;
      let newClub = new ClubModel({
        "clubName": newClubData.clubName
      });
      newClub.save((err, player) => {
        if (err){
          
        }
      });
    }).post("/:clubId/finalize/:roundrobinId", parsedUrlEncoded, (req, res) => {
      let clubId = req.params.clubId,
          roundrobinId = req.params.roundrobinId;
      ClubModel.finalizeResult(clubId, roundrobinId)
        .then((club) => {
          res.status(200).send(club);
          res.end();
      });
    });


export default router;

