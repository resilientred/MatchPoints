import express from 'express';
import bodyParser from 'BodyParser';
import ClubModel from './models/club';

const router = express.Router();
const parsedUrlEncoded = bodyParser.urlEncdoed({ extended: true });


let _emit = (event, data){
  app.emit(event, data);
};

function ClubRouter(app){
  return (
    router.get("/:clubId", (req, res) => {
      let clubId = req.params.clubId;
    }).post("/:clubId/new", parsedUrlEncoded, (req, res) => {
      let clubId = req.params.clubId;

    }).delete("", (req, res) => {

    }).post("/:clubId/finalize/:roundrobinId", parsedUrlEncoded, (req, res) => {
      let clubId = req.params.clubId,
          roundrobinId = req.params.roundrobinId;
      ClubModel.finalizeResult(clubId, roundrobinId, _emit.bind(null, "finalized"));
      app.once("finalized", (club) => {
        res.status(200).send(club);
      })

    });
  );
}

  




export default ClubRouter;