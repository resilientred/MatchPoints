import express from "express";
import ClubModel from "../models/club";
import RoundRobinModel from "../models/roundrobin";
import { clubMethods, jsonParser, csrfProtection, client } from "../helpers/appModules";

const router = express.Router();

router.patch("/password", (req, res) => {
  //has to have old password...
  //check if they're the same
  //then say ok

  //the other route is forgot,
  //which will send a email to the email addreess
  //which then reset
})
.post("/accounts/resend", (req, res) => {
  ClubModel.findOne({ _id: req.clubId }).then((club) => {
    return Mailer.sendMail(club)
    .then(() => res.status(200))
    .catch(() => res.status(500).send("Something went wrong. Please try again later."));
  }).catch(() => {
    return res.status(422).send("Something went wrong. Please try again later.");
  });
})
.get("/sessions", (req, res) => {
  const clubId = req.clubId;
  client.get(`sessions:${clubId}`, (err, reply) => {
    if (!reply) {
      RoundRobinModel.findRoundRobinsByClub(clubId)
        .then((roundrobins) => {
          client.set(`sessions:${clubId}`, JSON.stringify(roundrobins));
          return res.status(200).send(roundrobins);
        }).catch(() => {
          return res.status(500);
        });
    } else {
      res.status(200).send(JSON.parse(reply));
    }
  })
})
.get("/sessions/:id", (req, res) => {
  const clubId = req.clubId;
  const id = req.params.id;

  RoundRobinModel.findRoundRobin(clubId, id)
    .then(roundrobin => res.status(200).send(roundrobin))
    .catch(() => res.status(422).send("Cannot retrieve the session data."));
})
.delete("/sessions/:id", (req, res) => {
  const id = req.params.id;
  RoundRobinModel.deleteRoundRobin(req.clubId, id)
    .then(() => {
      client.del(`sessions:${req.clubId}`);
      return res.status(200).send(id);
    }).catch((err) => {
      return res.status(500);
    });
})
.post("/sessions/:id", jsonParser, csrfProtection, (req, res) => {
  const id = req.params.id;
  const { date, data, ratingUpdateList } = req.body.result;

  ClubModel.postPlayersRating(req.clubId, ratingUpdateList, date)
    .then(() => RoundRobinModel.saveResult(id, data))
    .then((session) => {
      client.del(`players:${req.clubId}`);
      client.del(`sessions:${req.clubId}`);
      return res.status(200).send(session);
    }).catch((err) => {
      console.log(err);
      res.status(422).send(err);
    });
})
.post("/session/new", jsonParser, csrfProtection, (req, res) => {
  const clubId = req.clubId;
  const data = req.body.session;
  const newRR = new RoundRobinModel({
   _clubId: clubId,
   date: data.date,
   numOfPlayers: data.numOfPlayers,
   players: data.players,
   schemata: data.schemata,
   selectedSchema: data.selectedSchema
  });

  newRR.save()
    .then(() => {
      client.del(`sessions:${clubId}`);
      res.status(200).send(newRR);
    }).catch((err) => {
      console.log(err);
      res.status(422).send("Something went wrong...");
    });
});

export default router;