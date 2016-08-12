import csrf from 'csurf'
import express from "express"
import clubMethoding from '../api/clubMethods'
import bodyParser from 'body-parser'
import redis from "redis"
// import RedisNotifier from 'redis-notifier'


// export const eventNotifier = new RedisNotifier(redis, {
//   redis : { host : '127.0.0.1', port : 6379 },
//   expired : true,
//   logLevel : 'DEBUG' //Defaults To INFO 
// });
const client = redis.createClient();
client.config("SET", "notify-keyspace-events", "KA");
export { client };
export const parseUrlEncoded = bodyParser.urlencoded({ extended: true });
export const app = express();
export const clubMethods = new clubMethoding(app)
export const csrfProtection = csrf({ cookie: true })
