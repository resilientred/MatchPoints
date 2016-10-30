import html5pdf from "html5-to-pdf";
import shortid from "shortid";
import path from "path";
import Scheduler from "./scheduler";

shortid.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_");

class PDFGenerator {
  static generatePDF({ clubName }, num, players, numOfPlayers, date) {
    let header = "<header class='cf'><div class='left'>";
    header += `<h4>${date}</h4></div><div class="center">`;
    header += `<h2>${clubName}</h2></div>`;
    header += `<div class="right"><h3>Group ${num}</h3></div></header>`;
    let content = "<content>";
    content += this.playerList(numOfPlayers, players);
    content += this.schedule(numOfPlayers);
    content += "</content>";
    content += this.scoreBoxes(numOfPlayers);
    const generatedId = shortid.generate();

    return new Promise((resolve, reject) => {
      html5pdf({
        paperFormat: "letter",
        cssPath: path.join(__dirname, "..", "assets", "css-pdf", "pdf.css")
      }).from.string(header + content).to(path.join(__dirname, "..", "pdfs", `${generatedId}.pdf`), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(generatedId);
        }
      });
    });
  }
  static playerList(numOfPlayers, players) {
    let list = "<ol>";
    players.forEach((player) => {
      list += `<li>${player.name}<span>${parseInt(player.rating, 10)}</span></li>`;
    });
    list += "</ol>";

    return list;
  }

  static schedule(numOfPlayers) {
    const n = Math.floor(numOfPlayers / 2);
    const schedule = Scheduler.findSchedule(numOfPlayers);
    let currentCount = 0;
    let schedStr = `<div class='schedule'><div class='scenario'><div>${numOfPlayers} Players</div><ul>`;

    for (let i = 0; i < schedule.length; i++) {
      if (i % 12 !== 0 && i % n === 0) {
        schedStr += "<li style='clear:both;'></li>";
        schedStr += `<li class='separator'>${schedule[i]}</li>`;
      } else {
        schedStr += `<li>${schedule[i]}</li>`;
      }
      currentCount++;
      if (currentCount % 12 === 0) {
        schedStr += `</ul></div><div class='scenario'><div>${numOfPlayers} Players</div><ul>`;
      }
    }
    schedStr += "</ul></div></div>";

    return schedStr;
  }

  static scoreBoxes(numOfPlayers) {
    let boxes = "<div class='score-boxes'>";
    boxes += "<div class='row cf'><div class='blank'>vs.</div>";
    for (let i = 1; i <= numOfPlayers; i++) {
      boxes += `<div class='score-title'>${i}</div>`;
    }
    boxes += "</div>";
    for (let j = 1; j < numOfPlayers; j++) {
      boxes += `<div class='row cf'><div class='g-num'>${j}</div>`;
      for (let i = 0; i < numOfPlayers; i++) {
        boxes += `<div class='cell-div${(i <= (j - 1) ? " grey'>" : "'>")}`;
        boxes += `<div class='cell'><div class='pos'>${i > (j - 1) ? j : ""}</div></div><div class='cell'><div class='pos'>${i > (j - 1) ? i + 1 : ""}</div></div></div>`;
      }
      boxes += "</div>";
    }

    boxes += "</div>";
    return boxes;
  }
}


export default PDFGenerator;
