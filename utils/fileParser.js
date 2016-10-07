import fs from "fs";
import path from "path";
import readline from "readline";

export class CSVParser {
  static parseFile(file){
    var rd = readline.createInterface({
      input: fs.createReadStream(file)
    });
    var name, rating, players = [];

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

          players.push({
            name: data[name],
            rating: data[rating]
          });
        }
      });
      rd.on("close", () => {
        resolve(players);
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
            return ''; // Return empty string.
        });
    if (/,\s*$/.test(text)) a.push('');
    return a;
  }
}

export class JSONParser{
  static parseFile(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err){
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });

    });

  }
}


