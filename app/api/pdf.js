import express from "express";
import redis from "redis";
import fs from "fs";
import path from "path";
import PDFGenerator from "../../utils/pdfGenerator";
import { parseUrlEncoded, csrfProtection, client } from "../helpers/appModules";

const subscriber = process.env.NODE_ENV === "production" ?
      redis.createClient(`redis://${process.env.REDIS_HOST}`) :
      redis.createClient();
const router = express.Router();

const handleExpired = (name) => {
  const filePath = path.join(__dirname, "..", "..", "pdfs", `${name}.pdf`);
  fs.unlink(filePath, (err) => {
    if (err) console.log(err);
  });
};

subscriber.on("pmessage", (pattern, channel, message) => {
  switch (message) {
    case "expired": {
      const key = channel.split(":")[1];
      const file = key.split("#");
      if (file[1] && file[0] === "pdf") {
        handleExpired(file[1]);
      }
      break;
    }
    default: {
      console.log(message);
      break;
    }
  }
});

subscriber.psubscribe("__keyspace@0__:*", (err) => {
  if (err) console.log(err);
});


router.post("/:clubId", parseUrlEncoded, csrfProtection, (req, res) => {
  const { club, addedPlayers, schemas, date } = req.body.session;
  const urls = {};

  const promises = schemas.map((group, i) => (
    PDFGenerator.generatePDF(club, i + 1, addedPlayers.splice(0, group), group, date)
  ));

  Promise.all(promises).then((pdfs) => {
    pdfs.forEach((url, i) => {
      client.setex(`pdf#${url}`, 60 * 15, "true", (err) => {
        if (err) console.log(err);
      });
      urls[`group${(i + 1)}`] = url;
    });
    res.status(200).send(urls);
  }).catch(() => {
    res.status(500).send("Unable to generate pdfs. Please try again later.");
  });
});


router.get("/download/:file", (req, res) => {
  const filepath = path.join(__dirname, "..", "..", "pdfs", `${req.params.file}.pdf`);
  fs.access(filepath, (err) => {
    if (err) {
      res.status(404).send("File have expired or does not exist");
    } else {
      res.setHeader("Content-Disposition", `attachment; filename=${req.params.file}.pdf`);
      res.setHeader("Content-Type", "application/pdf");
      res.download(filepath);
    }
  });
});

export default router;

