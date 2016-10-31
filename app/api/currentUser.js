import express from "express";
import ClubModel from "../models/club";
import RoundRobinModel from "../models/roundrobin";
import { clubMethods, parseUrlEncoded, csrfProtection, client } from "../helpers/appModules";

const router = express.Router();
//"/my"

route.patch("/password", (req, res) => {
  clubMethods.currentClub(req)
    .then((currentClub) => {

    }).catch((err) => {
      console.log(err);
    });
})
.post("/temp", parseUrlEncoded, csrfProtection, (req, res) => {
  const data = JSON.stringify(req.body.session);
  client.setex(`tempsess#${req.clubId}`, 300, data, (err) => {
    if (err) console.log(err);
  });
  res.status(202);
  res.end();
})
.get("/temp", (req, res) => {
  client.get(`tempsess#${req.clubId}`, (err, data) => {
    if (data) {
      client.setex(`tempsess#${req.clubId}`, 300, data, (e) => {
        if (e) console.log(e);
      });
      res.status(200).send(JSON.parse(data));
    } else {
      res.status(200).send("no data cached");
      res.end();
    }
  });
})
.delete("/temp", (req, res) => {
  client.del(req.clubId, () => {
    client.del(`tempsess#${req.clubId}`, () => {
      res.status(202);
    });
  });
})
.delete("/sessions/:id", (req, res) => {
  const id = req.params.id;
  RoundRobinModel.deleteRoundRobin(req.clubId, id)
    .then(() => {
      res.status(200).send(id);
      res.end();
    }).catch(() => {
      res.status(500);
      res.end();
    });
})
.post("/sessions/:id", parseUrlEncoded, csrfProtection, (req, res) => {
  const id = req.params.id;
  const { date, data, ratingUpdateList } = req.body.result;

  ClubModel.postPlayersRating(req.clubId, ratingUpdateList, date)
    .then(() => RoundRobinModel.saveResult(id, data)).then((session) => {
      res.status(200).send(session);
    }).catch((err) => {
      console.log(err);
      res.status(422).send(err);
    });
})
.post("/session/new", parseUrlEncoded, csrfProtection, (req, res) => {
  const clubId = req.params.clubId;
  const data = req.body.session;

  const newRR = new RoundRobinModel({ _clubId: clubId, ...data });

  newRR.save()
    .then(() => {
      res.status(200).send();
    }).catch((err) => {
      res.status(422).send(err);
    });
});

export default router;