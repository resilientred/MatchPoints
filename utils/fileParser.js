import fs from "fs";
import path from "path";
import readline from "readline";
import Club from "../app/models/club";
export default class PlayersParser {
  static CSVToPlayers(file, id){
    var rd = readline.createInterface({
      input: fs.createReadStream(file)
    });
    var name, rating, 
        promises = [];

    return new Promise((resolve, reject) => {
      rd.on("line", (line) => {
        if(!name) {
          var row = this.CSVtoArray(line);
          row.forEach((label, i) => {
            if((/name/i).test(label)){
              name = i;
            } else if ((/rating/i).test(label)){
              rating = i;
            }

          });
          if (!name || !rating){
            reject("No labels found");
          }
        } else {
          var data = this.CSVtoArray(line);
          promises.push(Club.addPlayer(id, {
            name: data[name],
            rating: data[rating]
          }))
        }
      });
      Promise.all(promises).then(players => {
        resolve(players);
      }).catch(err => {
        reject(err);
      })
    });
  }

  static CSVtoArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    if (!re_valid.test(text)) return null;
    var a = [];                     
    text.replace(re_value, 
        function(m0, m1, m2, m3) {
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    if (/,\s*$/.test(text)) a.push('');
    return a;
  }

  static JSONToPlayers(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err){
          reject(err);
        } else {
          let players = JSON.parse(data),
              promises = players.map(player => {
                return Club.addPlayer({
                  name: player.name,
                  rating: player.rating
                })
              })
          Promise.all(promises).then(players => {
            resolve(players);
          }).catch(err => {
            reject(err);
          })
        }
      });

    });

  }
}






