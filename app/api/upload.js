import express from "express";
import multer from "multer";
import path from "path";
import PlayerParser from "../../utils/fileParser";
const router = express.Router();
const upload = multer({
  dest: path.join(__dirname, "..", "..", "utils", "uploads")
});

router.post("/players", upload.single("file"), (req, res) => {
  var file = req.file,
      filepath = path.join(__dirname, "save", file.filename),
      promise;
  if (/csv/.test(file.mimetype)){
    promise = PlayerParser.CSVToPlayers(filepath);
  } else if(/json/.test(file.mimetype)) {
    promise = PlayerParser.JSONToPlayers(filepath);
  } else {
    res.status(422).send("Invalid file type");
    return;
  }

  promise.then(data => {
    fs.unlinkSync(filepath);
    res.status(200).send(data);
  }).catch(err => {
    res.status(422).send(err);
  });
});

export default router;