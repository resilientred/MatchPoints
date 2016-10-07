class RotatingArray {
  constructor(len){
    this.len = len % 2 === 0 ? len - 1: len;
    this.arr = new Array(this.len);
    this.start = this.len;
    this.end = this.len;

    for (var i = 0; i < (len % 2 === 0 ? len - 1: len); i++){
      this.arr[i] = i === len - 1 ? null : i + 2;
    }
  }

  rotate(){
    this.start--;
    this.end--;
  }

  currentRoundSchedule(schedule, i){
    var { arr, start, end } = this,
        scheStr = "";
    for (var j = 0; j < Math.ceil(this.len / 2); j++){
      var firstEl, secondEl; 

      if (j === 0){
        firstEl = 1;
        secondEl = arr[(arr.length - 1 - i)];
      } else {
        firstEl = arr[(j + start - 1) % this.len];
        secondEl = arr[(arr.length - 1 - j + end) % this.len]; 
      }

      if (firstEl === null || secondEl === null){
        continue;
      } else if (firstEl > secondEl){
        schedule.push(`${secondEl} vs. ${firstEl}`);
      } else {
        schedule.push(`${firstEl} vs. ${secondEl}`);
      }
    }

    return schedule;
  }

  getAllRounds(){
    var allSchedule = [];
    for (var i = 0; i < this.len; i++){
      this.currentRoundSchedule(allSchedule, i);
      this.rotate();
    }

    return allSchedule;
  }
}

export default RotatingArray;