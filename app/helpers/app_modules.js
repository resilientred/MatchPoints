import csrf from 'csurf'
import express from "express"
import clubMethoding from '../api/clubMethods'
import bodyParser from 'body-parser'
import redis from "redis"
const client = redis.createClient("redis://matchpoints.ho1ans.ng.0001.usw1.cache.amazonaws.com:6379");
export { client };
export const parseUrlEncoded = bodyParser.urlencoded({ extended: true });
export const app = express();
export const clubMethods = new clubMethoding(app)
export const csrfProtection = csrf({ cookie: true })
