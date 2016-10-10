import csrf from "csurf";
import express from "express";
import bodyParser from "body-parser";
import redis from "redis";
import clubMethoding from "../api/clubMethods";

const client = process.env.NODE_ENV === "development" ?
      redis.createClient() :
      redis.createClient(`redis://${process.env.REDIS_HOST}`);

export { client };
export const parseUrlEncoded = bodyParser.urlencoded({ extended: true });
export const app = express();
export const clubMethods = new clubMethoding(app);
export const csrfProtection = csrf({ cookie: true });
