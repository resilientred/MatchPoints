import csrf from 'csurf'
import express from "express"
import clubMethoding from '../api/clubMethods'
import bodyParser from 'body-parser'
import redis from "redis"
const client = redis.createClient();
export { client };
export const parseUrlEncoded = bodyParser.urlencoded({ extended: true });
export const app = express();
export const clubMethods = new clubMethoding(app)
export const csrfProtection = csrf({ cookie: true })
