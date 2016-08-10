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
const subscriber = redis.createClient();
const router = express.Router();


const _handleExpired = (name) => {
  fs.unlink(`/pdfs/${name}.pdf`, (err) => {
    if (err) return console.log(err);
    console.log("removed an old file");
  })
}
subscriber.on('message', (channel, message) => {
  console.log("redis message: ", message);
  console.log("redis channel: ", channel);
})
subscriber.subscribe("__keyspace@0__:expired", (err) => {
  console.log(err);
});
router.post("/:clubId", parseUrlEncoded, csrfProtection, (req, res) => {
  let clubId = req.params.clubId,
      { club, addedPlayers, schema, date } = req.body.session;
  let urls = {};
  console.log("schema: ", schema);
  schema.forEach((group, i) => {
    let players = [];
    process.nextTick(() => {
      urls["group" + (i + 1)] = generatePDF(club, i + 1, addedPlayers.splice(0, group), group, date);
      if (addedPlayers.length === 0){
        client.set(clubId, JSON.stringify(urls), (err) => {
          console.log("err: ", err)
          res.status(200).send(urls);
        });
      }
    })
  })
})
//and expire it within 15minutes
router.get("/:clubId", (req, res) => {
  let clubId = req.params.clubId;
  console.log(clubId);
  client.get(clubId, (err, data) => {
    if (!err){
      console.log(err);
      res.status(200).send(JSON.parse(data));
    } else {
      console.log(data)
      res.status(404).send("Expired or does not exist");
    }
  });
})

router.get("/download/:file", (req, res) => {
  const filePath = path.join(__dirname, "..", "..", "pdfs", `${req.params.file}.pdf`);
  res.writeHeader(200, {
    'Content-Disposition': 'attachment; filename=' + req.params.file + '.pdf',
    'Content-Type': 'application/pdf'
  });
  res.download(filePath);
  // res.download(`./pdfs/`, (err) => {
  //   console.log(err);
  // });
})
export default router
