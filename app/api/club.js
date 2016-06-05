import express from 'express';
import bodyParser from 'BodyParser';
import ClubModel from './models/club';

const router = express.Router();
const parsedUrlEncoded = bodyParser.urlEncdoed({ extended: true });


// let _emit = (event, data){
//   app.emit(event, data);
// };

export default function (app){
  return {
    _emit: function(event, data){
      app.emit(event, data);
    },
    routes: router.get("/:clubId", (req, res) => {
      let clubId = req.params.clubId;
      ClubModel.findClub(clubId, this._emit.bind(null, "foundClub"));
      app.once("foundClub", (club) => {
        res.status(200).send(club);
        res.end();
      })
    }).get("/:clubId/roundrobins", (req, res) => {
      let clubId = req.params.clubId;
      ClubModel.findRoundRobins(clubId, this._emit.bind(null, "foundRoundRobins"));
      app.once("foundRoundRobins", (roundrobins) => {
        res.status(200).send(roundrobins);
        res.end();
      });
    }).delete("/:clubId/roundrobins/:roundrobinId", (req, res) => {
      let clubId = req.params.clubId;
      let roundrobinId = req.params.roundrobinId;
      ClubModel.findClub(clubId, this._emit.bind(null, "foundClub"));
      app.once("foundClub", (club) => {
        club.deleteRoundRobin(clubId, roundrobinId, 
                this._emit.bind(null, "deletedRoundRobin"));
      })
      app.once("deletedRoundRobin", (roundrobins) => {
        res.status(200).send(club);
        res.end();
      })
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
      ClubModel.finalizeResult(clubId, roundrobinId, this._emit.bind(null, "finalized"));
      app.once("finalized", (club) => {
        res.status(200).send(club);
        res.end();
      })

    });
  };
}

  




 ClubRouter;