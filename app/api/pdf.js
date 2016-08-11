import express from "express"
import redis from "redis"
import { generatePDF } from "../helpers/pdf_module.js"
import { parseUrlEncoded, app, csrfProtection } from "../helpers/app_modules"
import fs from "fs"
import bluebird from "bluebird"
import path from "path"
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();
client.config("SET", "notify-keyspace-events", "KA");
const subscriber = redis.createClient();
const router = express.Router();


const _handleExpired = (name) => {
  const filePath = path.join(__dirname, "..", "..", "pdfs", `${name}.pdf`);
  fs.unlink(filePath, (err) => {
    if (err) return console.log(err);
    console.log("removed an old file");
  })
};

subscriber.on('pmessage', (pattern, channel, message) => {
  switch (message){
    case "expired":
      console.log("Expired: redis channel: ", channel);
      const key = channel.split(":")[1];
      _handleExpired(key);
      break;
  }
  console.log("redis pattern: ", pattern);
  console.log("redis message: ", message);
});

subscriber.psubscribe("__keyspace@0__:*", (err) => {
  if (err) console.log(err);
});



router.post("/:clubId", parseUrlEncoded, csrfProtection, (req, res) => {
  let clubId = req.params.clubId,
      { club, addedPlayers, schema, date } = req.body.session;
  let urls = {};
  schema.forEach((group, i) => {
    let players = [];
    process.nextTick(() => {
      let url = generatePDF(club, i + 1, addedPlayers.splice(0, group), group, date);
      urls["group" + (i + 1)] = url
      if (addedPlayers.length === 0){
        client.set(clubId, JSON.stringify(urls), (err) => {
          if (err) console.log("err: ", err);
          client.setex(url, 60*15, "true", (err) => {
            if (err) console.log(err);
          })
          res.status(200).send(urls);
          res.end();
        });
      }
    })
  })
})
router.get("/:clubId", (req, res) => {
  let clubId = req.params.clubId;
  client.get(clubId, (err, data) => {
    if (!err){
      console.log(err);
      res.status(200).send(JSON.parse(data));
      res.end();
    } else {
      res.status(404).send("Expired or does not exist");
    }
  });
})

router.get("/download/:file", (req, res) => {
  const filePath = path.join(__dirname, "..", "..", "pdfs", `${req.params.file}.pdf`);
  res.setHeader('Content-Disposition', 'attachment; filename=' + req.params.file + '.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.download(filePath);
})
export default router
