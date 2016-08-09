import { generatePDF } from "../helpers/pdf_modules.js"
import { parseUrlEncoded, app, csrfProtection, client, eventNotifier } from "../helpers/app_modules"
import fs from "fs"
const router = express.Router();

const _handleExpired = (name) => {
  //not a correct value passed in
  fs.unlink(`/pdfs/${name}.pdf`, (err) => {
    if (err) return console.log(err);
    console.log("removed an old file");
  })
}
eventNotifier.on('message', (pattern, channelPattern, emittedKey) => {
  const channel = this.parseMessageChannel(channelPattern);
  //is there a channel.value?
  switch (channel.key) {
    case 'expired':
      console.log("expired channael", channel);
      // _handleExpired(emittedKey);
      break;
    default:
      logger.debug("Unrecognized Channel Type:" + channel.type);
      break;
  }
})

route.post("/:clubId", parseUrlEncoded, csrfProtection, (req, res) => {
  let clubId = req.params.clubId,
      { club, addedPlayers, schema } = req.body.session;
  let urls = {};

  schema.forEach((group, i) => {
    let players = [];
    process.nextTick(() => {
      urls["group" + (i + 1)] = generatePDF(club, addedPlayers.splice(0, group), i + 1, group);
      if (addedPlayers.length === 0){
        client.setex(clubId, 1, JSON.stringify(urls)).then(()=>{
          res.status(200).send(urls);
        }).catch(err => res.status(500).send("something went wrong.."));
      }
    })
  })
})
//and expire it within 15minutes
route.get("/:clubId", (req, res) => {
  let clubId = req.params.clubId;
  client.hget(session)
    .then((data) => res.status(200).send(JSON.parse(data)))
    .catch((err) => res.status(404).send("Expired or does not exist"))
    //somehow need to delete all the entry that are not

})

route.get("/download/:file", (req, res) => {
  res.download(`/pdfs/${req.params.file}.pdf`, (err) => {
    res.status(404).send("File expired or does not exist");
  })
})
export default router
