import RotatingArray from "./rotatingArray";
import fs from 'fs';
import path from 'path';

class Schedule {
  constructor(){
    this.schedules = {};

    var data = fs.readFileSync(path.join(__dirname, "schedule.txt"))
    this.schedules = JSON.parse(data);
  }

  findSchedule(people){
    if (this.schedules[String(people)]){
      return this.schedules[String(people)];
    }

    var ra = new RotatingArray(people);
    var sched = ra.getAllRounds();
    this.schedules[String(people)] = sched;
    fs.writeFile(path.join(__dirname, "schedule.txt"), JSON.stringify(this.schedules), (err) => {
      if (err) console.log(err);
    })

    return this.schedules[String(people)];
  }
}

export default new Schedule();


