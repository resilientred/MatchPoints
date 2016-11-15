import express from "express";
import Mailer from "../helpers/mailer";
import Club from "../models/club";
import { csrfProtection, jsonParser, clubMethods } from "../helpers/appModules";
import URLSafeBase64 from "urlsafe-base64";
import crypto from "crypto";

const router = express.Router();

router.get("/activate", (req, res) => {
  const token = req.query.token;
  console.log("here");
  Club.confirmUser(token).then((message) => {
    console.log("confirmed")
    res.render("activate", { message: "Your account has been activated." })
  }).catch((message) => {
    console.log("error");
    res.render("activate", { message });
  });
})
.post("/reset/request", csrfProtection, (req, res) => {
  const email = req.query.email;
  const username = req.query.username;

  let promise;
  if (email) {
    promise = Club.findOneAndUpdate(
      { email: email },
      { $set: { token: URLSafeBase64.encode(crypto.randomBytes(32)) } },
      { new: true }
    );
  } else if (username) {
    promise = Club.findOneAndUpdate(
      { username: usernames },
      { $set: { token: URLSafeBase64.encode(crypto.randomBytes(32)) } },
      { new: true }
    );
  } else {
    return res.status(422).send("No parameters were found");
  }

  promise.then(club => new Mailer(club).sendResetEmail())
    .catch(err => res.status(404).send("No users are associated with this credential.."))
    .then(() => res.status(202).send("Confirmation Email sent"));
})
.post("/reset", jsonParser, csrfProtection, (req, res) => {
  const { token, newPassword } = req.body;
  Club.resetPasswordWithToken(token, newPassword)
    .then((club) => {
      clubMethods.logOut(club.sessionToken);
      return res.status(200).send("success");
    })
    .catch(() => {
      res.status(422).send("Token may have expired...");
    });
});

export default router;