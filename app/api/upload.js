import express from "express";
import multer from "multer";
import path from "path";
import { CSVParser, JSONParser } from "../../utils/fileParser";
const router = express.Router();
const upload = multer({
  dest: path.join(__dirname, "..", "..", "utils", "uploads")
});

router.post("/upload", upload.single("file"), (req, res) => {
  var file = req.file,
      filepath = path.join(__dirname, "save", file.filename);
  if (/csv/.test(file.mimetype)){
    CSVParser.parseFile(filepath)
      .then(handleSuccess)
      .catch(handleError);
  } else if(/json/.test(file.mimetype)) {
    JSONParser.parseFile(filepath)
      .then(handleSuccess)
      .catch(handleError);
  }

  function handleSuccess(data){
    fs.unlinkSync(filepath);
    res.status(200).send(data);
  }
  function handleError(err){
    res.status(422).send(err);
  }
});

export default router;