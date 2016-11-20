import express from "express";
import Mailer from "../helpers/mailer";
import Club from "../models/club";
import { csrfProtection, jsonParser } from "../helpers/appModules";
import URLSafeBase64 from "urlsafe-base64";
import crypto from "crypto";

const router = express.Router();

router.get("/activate", (req, res) => {
  const token = req.query.token;
  Club.confirmUser(token)
    .then((club) => {
      res.redirect("/activate/success");
    })
    .catch(message => res.redirect("/activate/error"))
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
      { username: username },
      { $set: { token: URLSafeBase64.encode(crypto.randomBytes(32)) } },
      { new: true }
    );
  } else {
    return res.status(422).send("No parameters were found");
  }

  promise.then(club => new Mailer(club).sendResetEmail())
    .then(() => res.status(202).send("Confirmation Email sent"))
    .catch((err) => {
      res.status(404).send("No users are associated with this credential..")
    });
})
.post("/reset", jsonParser, csrfProtection, (req, res) => {
  const { token, newPassword } = req.body;
  Club.resetPasswordWithToken(token, newPassword)
    .then((club) => {
      if (!club) return Promise.reject();

      Club.resetSessionToken(club.sessionToken);
      return res.status(200).send("success");
    }).catch((err) => {
      res.status(422).send("Token have expired.");
    });
});

export default router;