import { generatePDF } from "../pdf_module/pdf.js"
import { parseUrlEncoded, app, csrfProtection, client, eventNotifier } from "../app_modules"
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

route.post("/", parseUrlEncoded, csrfProtection, (req, res) => {
  let { session } = req.body;

  generatePDF();
  let urls = {};
  /* 
  client.setex(session._id, 24*60*60, urls.to_json).then((err))
  does setex exist?
  {
    group1: url,
    group2: url
    use redis?
  */
  }
})
//should impose a limit of 1 minute for pdf generate
//and expire it within 30minutes
route.get("/:sessionId", (req, res) => {
  let session = req.params.session;
  client.hget(session)
    .then((data) => res.status(200).send(JSON.parse(data)))
    .catch((err) => res.status(404).send("Expired or does not exist"))
    //somehow need to delete all the entry that are not

})
export default router
