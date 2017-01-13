import RotatingArray from "util/RotatingArray";
import Schedules from './schedules';

class Schedule {
  constructor() {
    this.schedules = Schedules;
  }

  findSchedule(people) {
    if (this.schedules[String(people)]) {
      return this.schedules[String(people)];
    }

    const ra = new RotatingArray(people);
    const sched = ra.getAllRounds();
    this.schedules[String(people)] = sched;

    return this.schedules[String(people)];
  }
}

export default new Schedule();
