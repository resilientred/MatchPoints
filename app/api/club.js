import express from "express";
import ClubModel from "../models/club";
import RoundRobinModel from "../models/roundrobin";
import { jsonParser, csrfProtection, client } from "../helpers/appModules";
import Mailer from "../helpers/mailer";
import ClubHelper from "../helpers/clubHelper";

const router = express.Router();

router.get("/", (req, res) => {
  ClubHelper.findCurrentClub(req)
    .then((currentClub) => {
      return res.status(200).send(currentClub);
    }).catch((err) => {
      console.log(err);
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
  client.get(`sessions:${clubId}`, (err, reply) => {
    if (!reply) {
      RoundRobinModel.findRoundRobinsByClub(clubId)
        .then((roundrobins) => {
          client.set(`sessions:${clubId}`, JSON.stringify(roundrobins));
          res.status(200).send(roundrobins);
        }).catch(() => {
          res.status(500);
        });
    } else {
      res.status(200).send(JSON.parse(reply));
    }
  })
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
.post("/new", jsonParser, (req, res) => {
  const data = req.body.user;

  ClubModel.newUser(data)
    .then((club) => {
      new Mailer(club).sendConfirmationEmail();
      return ClubHelper.logIn(club, res);
    }).catch((err) => {
      console.log(err);
      if (err.code === 11000 || err.code === 11001) {
        res.status(422).send("Username has already been taken");
      } else {
        res.status(422).send(err);
      }
    });
});

export default router;
