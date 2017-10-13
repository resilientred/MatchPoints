import express from "express";
import URLSafeBase64 from "urlsafe-base64";
import crypto from "crypto";
import Mailer from "../helpers/mailer";
import Club from "../models/club";
import { csrfProtection, jsonParser } from "../helpers/appModules";

const router = express.Router();

router.get("/activate", (req, res) => {
  const token = req.query.token;
  Club.confirm(token)
    .then(
      () => res.redirect("/activate/success"),
      message => res.redirect("/activate/error")
    );
})
.post("/reset/request", csrfProtection, (req, res, next) => {
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
    return next({ code: 400 })
  }

  return promise.then(club => new Mailer(club).sendResetEmail())
    .then(
      () => res.status(202).send("Confirmation Email sent"),
      (err) => {
        next({ code: 404, message: { user: 'User not found.' } });
      }
    );
})
.post("/reset", jsonParser, csrfProtection, (req, res, next) => {
  const { token, newPassword } = req.body;
  Club.resetPasswordWithToken(token, newPassword)
    .then(
      (club) => {
        Club.resetSessionToken(club.sessionToken);
        return res.status(200).send({ success: true });
      },
      (err) => {
        next({ code: 404, message: err });
      }
    );
});

export default router;
