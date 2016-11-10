import express from "express";
import ClubModel from "../models/club";
import RoundRobinModel from "../models/roundrobin";
import { clubMethods, parseUrlEncoded, csrfProtection } from "../helpers/appModules";

const router = express.Router();

router.get("", (req, res) => {
  clubMethods.currentClub(req)
    .then((currentClub) => {
      res.status(200).send(currentClub);
      res.end();
    }).catch((err) => {
      console.log(err);
    });
})
.get("/:clubId/players", (req, res) => {
  Club.findPlayers(req.params.clubId)
    .then((players) => {
      console.log(players);
      res.status(200).send(players);
    }).catch((err) => {
      res.status(422).send(err);
    });
})
.get("/all", (req, res) => {
  ClubModel.findAll()
    .then((roundrobins) => {
      res.status(200).send(roundrobins);
    }).catch((err) => {
      res.status(404).send(err);
    });
})
.get("/:clubId/sessions", (req, res) => {
  const clubId = req.params.clubId;
  RoundRobinModel.findRoundRobinsByClub(clubId)
    .then((roundrobins) => {
      res.status(200).send(roundrobins);
      res.end();
    }).catch(() => {
      res.status(500);
      res.end();
    });
})
.get("/:clubId/roundrobins", (req, res) => {
  const clubId = req.params.clubId;
  RoundRobinModel.findRoundRobinsByClub(clubId)
    .then((roundrobins) => {
      res.status(200).send({ clubId, roundrobins });
      res.end();
    }).catch(() => {
      res.status(500);
      res.end();
    });
})
.post("/new", parseUrlEncoded, (req, res) => {
  const data = req.body.user;
  if (data.password <= 8) {
    res.status(422).send("Password must be 8 characters long\n" +
      "Must consist of at least:\n\t1) One special character (*!@$.^)\n\t" +
      "2) One Capital Letter\n\t3) One Lowercase Letter\n\t4) One Number");
  }
  const newClub = new ClubModel({
    username: data.username,
    location: {
      city: data.city,
      state: data.stateName
    },
    clubName: data.clubName
  });

  ClubModel.generatePasswordDigest(data.password)
    .then((digest) => {
      newClub.passwordDigest = digest;
      return newClub.save();
    }).then((club) => {
      clubMethods.logIn(res, club);
    }).catch((err) => {
      res.status(422).send(err);
      res.end();
    });
});

export default router;
