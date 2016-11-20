import express from "express";
import ClubModel from "../models/club";
import RoundRobinModel from "../models/roundrobin";
import { clubMethods, jsonParser, csrfProtection, client } from "../helpers/appModules";
import Mailer from "../helpers/mailer";

const router = express.Router();

router.post("/accounts/resend", (req, res) => {
  ClubModel.findOne({ _id: req.clubId })
  .then((club) => {
    return new Mailer(club).sendConfirmationEmail();
  }).then(() => {
    res.status(200).send("An email has been sent to your inbox.");
  }).catch((err) => {
    console.log(err);
    res.status(422).send("Something went wrong. Please try again later.")
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
}).patch("", jsonParser, (req, res) => {
  const data = req.body.data;
  const type = req.query;
  const clubId = req.clubId;

  let promise;
  if (type === "password") {
    promise = ClubModel.changePassword(clubId, data);
  } else if (type === "info") {
    promise = ClubModel.changeInfo(clubId, data);
  } else {
    res.status(404).send("No changes were made.");
    return;
  }

  promise.then(() => res.status(200))
    .catch((err) => res.status(422).send(err));

});

export default router;