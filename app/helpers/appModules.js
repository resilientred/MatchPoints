import csrf from "csurf";
import express from "express";
import bodyParser from "body-parser";
import redis from "redis";
import clubMethoding from "../api/clubMethods";

const client = process.env.NODE_ENV === "production" ?
      redis.createClient(`redis://${process.env.REDIS_HOST}`) :
      redis.createClient();

export { client };
export const parseUrlEncoded = bodyParser.urlencoded({ extended: true });
export const app = express();
export const clubMethods = new clubMethoding(app);
export const csrfProtection = process.env.NODE_ENV === "test" ?
  (req, res, next) => { return next() } : csrf({ cookie: true });
