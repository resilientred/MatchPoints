import fs from "fs"
import html5pdf from "html5-to-pdf"
import shortid from "shortid"
import path from "path"
import Scheduler from "./rotatingArray"
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');

class PDFGenerator {
  static generatePDF({clubName}, num, players, numOfPlayers, date){
    let header = '<header class="cf"><div class="left"><h4>Date: ' + date + 
      '</h4></div><div class="center"><h2>' + clubName + 
      '</h2></div><div class="right">' +
      '<h3>Group ' + num + '</h3></div></header>';
    let content = "<content>" + this.playerList(numOfPlayers, players);
    content += this.schedule(numOfPlayers) + "</content>";
    content += this.scoreBoxes(numOfPlayers);
    const generatedId = shortid.generate();
    html5pdf({
      paperFormat: "letter",
      cssPath: path.join(__dirname, "..", "assets", "css-pdf", "pdf.css")
    }).from.string(header + content).to(`./pdfs/${generatedId}.pdf`, function(err) {
      if (err) console.log(err);
      console.log("done");
    })

    return generatedId;
  }
  static playerList(numOfPlayers, players){
    let list = "<ol>";
    players.forEach((player) => {
      list += "<li>" + player.name + "<span>" + parseInt(player.rating) + "</span></li>";
    })
    list += "</ol>";

    return list;
  }

  static schedule(numOfPlayers){
    let n = Math.floor(numOfPlayers / 2),
        schedule = Schedule.findSchedule(numOfPlayers),
        currentCount = 0;
    let schedStr = "<div class='schedule'><div class='scenario'><div>" + 
      numOfPlayers + " Players</div><ul>";

    for (var i = 0; i < schedule.length; i++){
      if (i % 12 !== 0 && i % n === 0){
        schedStr += "<li style='clear:both;'></li>";
        schedStr += "<li class='separator'>" + schedule[i] + "</li>";
      } else {
        schedStr += '<li>' + schedule[i] + '</li>';
      }

      currentCount++;
      if (currentCount % 12 === 0){
        schedStr += "</ul></div><div class='scenario'><div>" + 
          numOfPlayers + " Players</div><ul>";
      }

    }
    schedStr += '</ul></div></div>';

    return schedStr;
  }

  static scoreBoxes(numOfPlayers){
    let boxes = "<div class='score-boxes'>";
    boxes += "<div class='row cf'><div class='blank'>vs.</div>";
    for (let i = 1; i <= numOfPlayers; i++){
      boxes += "<div class='score-title'>" + i + "</div>";
    }
    boxes += "</div>";
    for (let k = 1; k < numOfPlayers; k++){
      boxes += "<div class='row cf'><div class='g-num'>" + k + "</div>"
      for (i = 0; i < numOfPlayers; i++){
        boxes += "<div class='cell-div" + (i === (k - 1) ? " grey'>" : "'>") + 
          "<div class='cell'></div><div class='cell'></div></div>"
      } 
      boxes += "</div>";   
    }

    boxes += "</div>";
    return boxes;
  }
}



