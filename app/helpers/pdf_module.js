import fs from "fs"
import html5pdf from "html5-to-pdf"
import shortid from "shortid"
import path from "path"
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
export const generatePDF = ({clubName}, num, players, numOfPlayers, date) => {
    console.log("date: ", date, "clubName: ", clubName, "num: ", num, "players: ", players, "numOfPlayers: ", numOfPlayers); 
    let header = '<header class="cf"><div class="left"><h4>Date: ' + date + 
      '</h4></div><div class="center"><h2>' + clubName + 
      '</h2></div><div class="right">' +
      '<h3>Group ' + num + '</h3></div></header>';
    let content = "<content>" + playerList(numOfPlayers, players);

    content += schedule(numOfPlayers) + "</content>";
    content += scoreBoxes(numOfPlayers);
    const generatedId = shortid.generate();
    html5pdf({
      paperFormat: "letter",
      cssPath: path.join(__dirname, "..", "assets", "css-pdf", "pdf.css")
    }).from.string(header + content).to(`./pdfs/${generatedId}.pdf`, function(err) {
      console.log(err);
      console.log("done");
    })

    return generatedId;
}

const playerList = (numOfPlayers, players) => {
    let list = "<ol>";
    players.forEach((player) => {
      list += "<li>" + player.name + " " + parseInt(player.rating) + "</li>";
    })
    list += "</ol>";

    return list;
  }

const schedule = (numOfPlayers) => {
    let schedule = "<div class='schedule'><div class='scenario'><div>" + 
      numOfPlayers + " Players</div>" + "<ul>";

    schedule += '<li>1 vs 4</li><li>2 vs 3</li><li>1 vs 3</li><li>2 vs 4</li>' +
            '<li>1 vs 2</li><li>3 vs 4</li></ul></div>' +
            '<div class="scenario"><div>5 Players</div><ul><li>1 vs 4</li>' + 
            '</ul></div></div>';

    return schedule;
  }

const scoreBoxes = (numOfPlayers) => {
  let boxes = "<div class='score-boxes'>";

  for (let k = 2, i, j; k <= numOfPlayers; k++){
    boxes += "<div class='row cf'>";
    for (i = 1; i < k; i++){
      boxes += "<div class='cell-div'><div class='match-title'>" +
        i + " vs " + k + "</div><div class='cell-group'>" + 
        "<div class='cell'></div><div class='cell'></div></div></div>";
    } 
    boxes += "</div>";   
  }

  boxes += "</div>";
  return boxes;
}

 


const findSchedule = () => {
  var matches = [];
  var scheduleAdded = {};
  for (var k = 1; k <= 5; k++){
    var tempSched = {};
    for (var i = 1; i <= 5; i++){
      if (!scheduleAdded[i]){
        scheduleAdded[i] = {};
      }
      tempSched[i] = true;
      for (var j = 5; j >= 1; j--){
        if (scheduleAdded[i][j] || i === j || tempSched[j]){
         continue;
        } else {
          scheduleAdded[i][j] = true;
          matches.push([i, j]);
          tempSched[j] = true
          break;
        }
      }
    }
  
  }
  return matches;
}

