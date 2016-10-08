import fs from "fs";
import path from "path";
import readline from "readline";
import Club from "../app/models/club";
import { Player } from "../app/models/player";

export default class PlayerParser {
  static CSVToPlayers(file, id) {
    const rd = readline.createInterface({
      input: fs.createReadStream(file)
    });
    const players = [];
    let promise;
    let name;
    let rating;

    return new Promise((resolve, reject) => {
      rd.on("line", (line) => {
        if(!name) {
          const row = this.CSVtoArray(line);
          row.forEach((label, i) => {
            if((/name/i).test(label)) {
              name = i;
            } else if ((/rating/i).test(label)) {
              rating = i;
            }
          });
          if (!name || !rating) {
            reject("No labels found");
          }
        } else {
          const data = this.CSVtoArray(line);
          const newPlayer = new Player({
            name: data[name],
            rating: +data[rating]
          });
          newPlayer.markModified("player");
          players.push(newPlayer);
        }
      });
      rd.on("close", () => {
        Club.addPlayers(id, players)
          .then((players) => {
            resolve(players);
          }).catch((err) => {
            reject(err);
          });
      });
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
            return '';
        });
    if (/,\s*$/.test(text)) a.push('');
    return a;
  }

  static JSONToPlayers(file, id) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err){
          reject(err);
        } else {
          const playersData = JSON.parse(data);
          const players = data.map(player => {
            const newPlayer = new Player({
              name: player.name,
              rating: +player.rating
            });
            newPlayer.markModified("player");
            return newPlayer;
          })
          Club.addPlayers(id, players)
            .then(players => {
              resolve(players);
            }).catch(err => {
              reject(err);
            });
        }
      });

    });
  }
};
