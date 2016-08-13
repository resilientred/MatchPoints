import express from "express"
import redis from "redis"
import { generatePDF } from "../helpers/pdf_module.js"
import { parseUrlEncoded, app, csrfProtection, client } from "../helpers/app_modules"
import fs from "fs"
import bluebird from "bluebird"
import path from "path"


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
      const key = channel.split(":")[1];
      const file = key.split("#");
      if (file[1] && file[0] === "pdf"){
        _handleExpired(file[1]);
      }
      break;
  }
});

subscriber.psubscribe("__keyspace@0__:*", (err) => {
  if (err) console.log(err);
});



router.post("/:clubId", parseUrlEncoded, csrfProtection, (req, res) => {
  let clubId = req.params.clubId,
      { club, addedPlayers, schemas, date } = req.body.session;
  let urls = {};
  schemas.forEach((group, i) => {
    let players = [];
    process.nextTick(() => {
      let url = generatePDF(club, i + 1, addedPlayers.splice(0, group), group, date);
      urls["group" + (i + 1)] = url
      if (addedPlayers.length === 0){
        client.set(clubId, JSON.stringify(urls), (err) => {
          if (err) console.log("err: ", err);
          client.setex("pdf#" + url, 60*15, "true", (err) => {
            if (err) console.log(err);
          })
          console.log(urls);
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
