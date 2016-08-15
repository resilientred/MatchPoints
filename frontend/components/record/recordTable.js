import React, { Component } from 'react';
import RecordTableDetail from "./recordTableDetail"

class RecordTable extends Component {
	constructor(props){
		super(props);
    this.state = {
      result: [...Array(this.props.sizeOfGroup)].map((_) => 
        [...Array(this.props.sizeOfGroup)].map((_) => [0, 0]))
    }
	}
  _handleCalculate(e){
    e.preventDefault();
    if (e.currentTarget.className.split(" ")[1] === "calculate"){
      this.props.updateScore(this.calculateScore(), this.props.groupNum - 1);
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props.groupNum && this.props.state && this.props.sizeOfGroup){
      return false;
    }
    return true;
  }

  calculateScore(){
    var joinedPlayers = this.props.joinedPlayers,
        playerIds = Object.keys(joinedPlayers),
        startIdx = this.props.start,
        calculatedScore = [],
        backSide = document.getElementsByClassName("back")[0],
        rc = {};
    backSide.className += " rotated";

    this.state.result.forEach( (indRecord, i) => {
      var record = indRecord.map( (record, j) => {
        if (j < i) return -calculatedScore[j][i]; //just mirroring what the other result was
        if (i === j) return 0;

        var sign = record[0] - record[1] === 0 ? 0 : record[0] - record[1] > 0 ? 1 : -1;

        if (sign === 0) return 0;
        var player1Id = playerIds[startIdx + i],
            player2Id = playerIds[startIdx + j],
            modifier = sign === 1 ? -record[1] * 2 : record[0] * 2;

        var scoreAdjust = (16 * sign - (joinedPlayers[player1Id].rating - 
          joinedPlayers[player2Id].rating) * 
          sign * 0.04 + modifier).toFixed(2);

        rc[player1Id] = {
          change: rc[player1Id] ? rc[player1Id]["change"] : 0 + scoreAdjust,
          ratingBefore: joinedPlayers[player1Id].rating
        };
        rc[player2Id] = {
          change: rc[player2Id] ? rc[player2Id]["change"] : 0 - scoreAdjust,
          ratingBefore: joinedPlayers[player2Id].rating
        };
        return scoreAdjust;
        
      })

      calculatedScore.push(record);
    });
    return [calculatedScore, rc];
  }
  updateResult = (i, j, k, e) => {
    this.state.result[i][j][k] = e.target.value;
    this.setState({ 
      result: this.state.result
    });
  }

	render(){
      var start = this.props.start,
          sizeOfGroup = this.props.sizeOfGroup,
          joinedPlayers = this.props.joinedPlayers,
          scoreChange = this.props.scoreChange,
          groupNum = this.props.groupNum,
          playerIds = Object.keys(joinedPlayers);
      var propsToPass = {
        start: start, 
        sizeOfGroup: sizeOfGroup,
        scoreChange: scoreChange,
        joinedPlayers: joinedPlayers,
        playerIds: playerIds,
        groupNum: groupNum
      }
    return <div className="record-table">
        <RecordTableDetail {...propsToPass} result={this.state.result}
              updateResult={this.updateResult} />
      </div>
  }
}
// (        <button className="record-btn calculate" onClick={this._handleCalculate.bind(this)}>
//           Calculate
//         </button>
//         <button className="record-btn update-record" onClick={this.props.saveSession}>
//           Save
//         </button>)
export default RecordTable;