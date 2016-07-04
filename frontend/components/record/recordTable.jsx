import React from 'react';
import RecordTableBack from "./recordTableBack"
import RecordTableFront from "./recordTableFront"

class RecordTable extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      result: [...Array(this.props.sizeOfGroup)].map((_) => 
      [...Array(this.props.sizeOfGroup)].map((_) => [0, 0]))
    }
	}
  static propTypes = {
    groupNum: React.PropTypes.number.isRequired,
    start: React.PropTypes.number.isRequired,
    joinedPlayers: React.PropTypes.object.isRequired,
    sizeOfGroup: React.PropTypes.number.isRequired
  }
  _handleCalculate = (e) => {
    e.preventDefault();
    if (e.currentTarget.className === "calculate"){
      this.props.updateScore(this.calculateScore(), this.props.groupNum - 1);
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props.groupNum && this.props.state && this.props.sizeOfGroup){
      return false;
    }
    return true;
  }

  calculateScore = () => {
    var joinedPlayers = this.props.joinedPlayers,
        playerIds = Object.keys(joinedPlayers),
        startIdx = this.props.start,
        calculatedScore = [];

    this.state.result.forEach( (indRecord, i) => {
      var record = indRecord.map( (record, j) => {
        if (j < i) return -calculatedScore[j][i]; //just mirror what the other result was
        if (i === j) return 0;

        var sign = record[0] - record[1] === 0 ? 0 : record[0] - record[1] > 0 ? 1 : -1;
        if (sign === 0) return 0;
        var modifier = sign === 1 ? -record[1] * 2 : record[0] * 2
        return 16 * sign - (joinedPlayers[playerIds[startIdx + i]].rating - 
          joinedPlayers[playerIds[startIdx + j]].rating) * 
          sign * 0.04 + modifier;
        
      })

      calculatedScore.push(record);
    });
    return calculatedScore;
  }
  updateResult(i, j, k, e) {
    this.state.result[i][j][k] = e.target.value;
    this.setState({ result: this.state.result });
  }

	render(){
      var start = this.props.start,
          sizeOfGroup = this.props.sizeOfGroup,
          joinedPlayers = this.props.joinedPlayers,
          scoreChange = this.props.scoreChange,
          playerIds = Object.keys(joinedPlayers);
      var propsToPass = {
        start: start, 
        sizeOfGroup: sizeOfGroup,
        joinedPlayers: joinedPlayers,
        playerIds: playerIds
      }
    return <table className="record-table">
        <button className="calculate" onClick={this._handleCalculate.bind(this)}>
          Calculate
        </button>
        <button className="update-record" onClick={this.props.saveSession}>
          Update
        </button>
        <thead>
        <tr>
          {
            [...Array(sizeOfGroup + 1)].map((_, i) => {
              if (i == 0) return <th key={"head" + i}>Group: {this.props.groupNum}</th>;
              return <th key={"head" + i}>vs. {i}</th>;
            })
          }
        </tr>
        </thead>
        <RecordTableFront {...propsToPass} result={this.state.result}
              updateResult={this.updateResult}/>
        <RecordTableBack {...propsToPass} scoreChange={scoreChange}/>
      </table>
	}
}

export default RecordTable;