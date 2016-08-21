"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePDF = undefined;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _html5ToPdf = require("html5-to-pdf");

var _html5ToPdf2 = _interopRequireDefault(_html5ToPdf);

var _shortid = require("shortid");

var _shortid2 = _interopRequireDefault(_shortid);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_shortid2.default.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
var generatePDF = exports.generatePDF = function generatePDF(_ref, num, players, numOfPlayers, date) {
  var clubName = _ref.clubName;

  console.log("date: ", date, "clubName: ", clubName, "num: ", num, "players: ", players, "numOfPlayers: ", numOfPlayers);
  var header = '<header class="cf"><div class="left"><h4>Date: ' + date + '</h4></div><div class="center"><h2>' + clubName + '</h2></div><div class="right">' + '<h3>Group ' + num + '</h3></div></header>';
  var content = "<content>" + playerList(numOfPlayers, players);

  content += schedule(numOfPlayers) + "</content>";
  content += scoreBoxes(numOfPlayers);
  var generatedId = _shortid2.default.generate();
  (0, _html5ToPdf2.default)({
    paperFormat: "letter",
    cssPath: _path2.default.join(__dirname, "..", "assets", "css-pdf", "pdf.css")
  }).from.string(header + content).to("./pdfs/" + generatedId + ".pdf", function (err) {
    console.log(err);
    console.log("done");
  });

  return generatedId;
};

var playerList = function playerList(numOfPlayers, players) {
  var list = "<ol>";
  players.forEach(function (player) {
    list += "<li>" + player.name + " " + parseInt(player.rating) + "</li>";
  });
  list += "</ol>";

  return list;
};

var schedule = function schedule(numOfPlayers) {
  var schedule = "<div class='schedule'><div class='scenario'><div>" + numOfPlayers + " Players</div>" + "<ul>";

  schedule += '<li>1 vs 4</li><li>2 vs 3</li><li>1 vs 3</li><li>2 vs 4</li>' + '<li>1 vs 2</li><li>3 vs 4</li></ul></div>' + '<div class="scenario"><div>5 Players</div><ul><li>1 vs 4</li>' + '</ul></div></div>';

  return schedule;
};

var scoreBoxes = function scoreBoxes(numOfPlayers) {
  var boxes = "<div class='score-boxes'>";

  for (var k = 2, i, j; k <= numOfPlayers; k++) {
    boxes += "<div class='row cf'>";
    for (i = 1; i < k; i++) {
      boxes += "<div class='cell-div'><div class='match-title'>" + i + " vs " + k + "</div><div class='cell-group'>" + "<div class='cell'></div><div class='cell'></div></div></div>";
    }
    boxes += "</div>";
  }

  boxes += "</div>";
  return boxes;
};

var findSchedule = function findSchedule() {
  var matches = [];
  var scheduleAdded = {};
  for (var k = 1; k <= 5; k++) {
    var tempSched = {};
    for (var i = 1; i <= 5; i++) {
      if (!scheduleAdded[i]) {
        scheduleAdded[i] = {};
      }
      tempSched[i] = true;
      for (var j = 5; j >= 1; j--) {
        if (scheduleAdded[i][j] || i === j || tempSched[j]) {
          continue;
        } else {
          scheduleAdded[i][j] = true;
          matches.push([i, j]);
          tempSched[j] = true;
          break;
        }
      }
    }
  }
  return matches;
};