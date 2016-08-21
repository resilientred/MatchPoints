"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _redis = require("redis");

var _redis2 = _interopRequireDefault(_redis);

var _pdf_module = require("../helpers/pdf_module.js");

var _app_modules = require("../helpers/app_modules");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscriber = _redis2.default.createClient();
var router = _express2.default.Router();

var _handleExpired = function _handleExpired(name) {
  var filePath = _path2.default.join(__dirname, "..", "..", "pdfs", name + ".pdf");
  _fs2.default.unlink(filePath, function (err) {
    if (err) return console.log(err);
    console.log("removed an old file");
  });
};

subscriber.on('pmessage', function (pattern, channel, message) {
  switch (message) {
    case "expired":
      var key = channel.split(":")[1];
      var file = key.split("#");
      if (file[1] && file[0] === "pdf") {
        _handleExpired(file[1]);
      }
      break;
  }
});

subscriber.psubscribe("__keyspace@0__:*", function (err) {
  if (err) console.log(err);
});

router.post("/:clubId", _app_modules.parseUrlEncoded, _app_modules.csrfProtection, function (req, res) {
  var clubId = req.params.clubId;
  var _req$body$session = req.body.session;
  var club = _req$body$session.club;
  var addedPlayers = _req$body$session.addedPlayers;
  var schemas = _req$body$session.schemas;
  var date = _req$body$session.date;

  var urls = {};
  schemas.forEach(function (group, i) {
    var players = [];
    process.nextTick(function () {
      try {
        var url = (0, _pdf_module.generatePDF)(club, i + 1, addedPlayers.splice(0, group), group, date);

        _app_modules.client.setex("pdf#" + url, 60 * 15, "true", function (err) {
          if (err) console.log(err);
        });
        urls["group" + (i + 1)] = url;
        if (addedPlayers.length === 0) {
          res.status(200).send(urls);
        }
      } catch (e) {
        res.status(500).send("Unable to generate pdfs. Please try again later.");
      }
    });
  });
});

router.get("/download/:file", function (req, res) {
  var filepath = _path2.default.join(__dirname, "..", "..", "pdfs", req.params.file + ".pdf");
  _fs2.default.access(filepath, function (err) {
    if (err) {
      res.status(404).send("File have expired or does not exist");
    } else {
      res.setHeader('Content-Disposition', 'attachment; filename=' + req.params.file + '.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.download(filepath);
    }
  });
});
exports.default = router;