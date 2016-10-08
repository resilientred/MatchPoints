import express from "express";
import ClubModel from "../models/club";
import RoundRobinModel from "../models/roundrobin";
import { Player } from "../models/player";
import { clubMethods, parseUrlEncoded, csrfProtection, client } from "../helpers/appModules";

const router = express.Router();

router.get("", (req, res) => {
  clubMethods.currentClub(req)
    .then((currentClub) => {
      res.status(200).send(currentClub);
      res.end();
    }).catch((err) => {
      console.log(err);
    });
}).get("/all", (req, res) => {
  ClubModel.findAll()
    .then(roundrobins => {
      res.status(200).send(roundrobins);
    }).catch(err => {
      res.status(404);
      res.end();
    });
}).get("/:clubId/sessions", (req, res) => {
  const clubId = req.params.clubId;
  RoundRobinModel.findRoundRobinsByClub(clubId)
    .then((roundrobins) => {
      res.status(200).send(roundrobins);
      res.end();
    }).catch((err)=>{
      res.status(500);
      res.end();
    });
}).get("/:clubId/roundrobins", (req, res) => {
  const clubId = req.params.clubId;
  RoundRobinModel.findRoundRobinsByClub(clubId)
    .then((roundrobins) => {
      res.status(200).send({clubId, roundrobins});
      res.end();
    }).catch((err)=>{
      res.status(500);
      res.end();
    });
}).post("/:clubId/session/new", parseUrlEncoded, csrfProtection, (req, res) => {
  const _clubId = req.params.clubId;
  const data = req.body.session;

  let newRR = new RoundRobinModel({
    _clubId, ...data })

  newRR.save()
    .then((rr) => {
      console.log(rr);
      res.status(200).send(rr);
    }).catch((err)=>{
      res.status(422).send(err);
    });
}).post("/:clubId/temp", parseUrlEncoded, csrfProtection, (req, res) => {
  const clubId = req.params.clubId;
  const data = JSON.stringify(req.body.session);
  client.setex(`tempsess#${clubId}`, 300, data, err => {
    if(err) console.log(err)
  });
  res.status(202);
  res.end();
}).get("/:clubId/temp", (req, res) => {
  const clubId = req.params.clubId;
  client.get(`tempsess#${clubId}`, (err, data) => {
    if (data) {
      client.setex(`tempsess#${clubId}`, 300, data, err => {
        if(err) console.log(err)
      });
      res.status(200).send(JSON.parse(data));
    } else {
      res.status(200).send("no data cached");
      res.end();
    }
  })
}).delete("/:clubId/temp", (req, res) => {
  const clubId = req.params.clubId;
  client.del(clubId, () => {
    client.del(`tempsess#${clubId}`, () => {
      res.status(202);
    })
  })
}).post("/:clubId/players/new", parseUrlEncoded, csrfProtection, (req, res) => {
  const clubId = req.params.clubId;
  const data = req.body.player;
  ClubModel.addPlayer(clubId, data)
    .then((club) => {
      clubMethods.setCurrentClub(club);
      res.status(200).send(club);
    }).catch((err) => {
      res.status(422).send(err);
    })
}).delete("/sessions/:id", (req, res) => {
  const id = req.params.id;
  RoundRobinModel.deleteRoundRobin(clubId, id)
    .then((session) => {
      res.status(200).send(id);
      res.end();
    }).catch((err) => {
      res.status(500);
      res.end();
    });
}).post("/:clubId/sessions/:id", parseUrlEncoded, csrfProtection, (req, res) => {
  const id = req.params.id;
  const clubId = req.params.clubId;
  const { date, data, ratingUpdateList } = req.body.result;

  const promiseResults = [];
  ClubModel.postPlayersRating(clubId, ratingUpdateList, date)
    .then((club) => {
      return RoundRobinModel.saveResult(id, data);
    }).then((session) => {
      res.status(200).send(session);
    }).catch((err) => {
      console.log(err);
      res.status(422).send(err);
    });
}).post("/new", parseUrlEncoded, (req, res) => {
  const data = req.body.user;
  if (data.password <= 8) {
    res.status(422).send("Password must be 8 characters long\n" +
      "Must consist of at least:\n\t1) One special character (*!@$.^)\n\t" +
      "2) One Capital Letter\n\t3) One Lowercase Letter\n\t4) One Number");
  }
  let newClub = new ClubModel({
    username: data.username,
    clubName: data.club,
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
    }).then((club)=> {
      clubMethods.logIn(res, club);
    }).catch((err)=>{
      res.status(422).send(err);
      res.end();
    });
});

export default router;
