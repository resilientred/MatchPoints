import React from 'react';

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
      this.props.updateScore(this.calculateScore());
    }
  }

  shouldComponentUpdate(nextProps, nextState){

  }

  calculateScore = () => {
    var joinedPlayers = this.props.joinedPlayers,
        startIdx = this.props.start,
        calculatedScore = this.state.result.map( (indRecord, i, a) => {
      indRecord.map( (record, j) => {
        if (j > i) return -a[j][i]; //just mirror what the other result was
        if (i === j) return 0;

        var sign = record[0] - record[1] >= 0 ? 1 : -1;

        return Math.abs(joinedPlayers[startIdx + i].rating - joinedPlayers[startIdx + j].rating) * 
          sign * 0.04 - 2 * (record[0] - record[1]) * sign;
        
      })
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
          playerIds = Object.keys(joinedPlayers);
    return <table className="record-table">
            <button className="calculate" onClick={this._handleCalculate}>
              Calculate
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
          <tbody>         
              {
                [...Array(sizeOfGroup)].map( (_, m) => {
                  var curPlayer = joinedPlayers[playerIds[m + start]];
                  return <tr>{[...Array(sizeOfGroup + 1)].map( (_, n) => {

                    if (n == 0) return <td key={"row" + m + ":" + n} className="cell">{m + 1}</td>;
                    if ((m + 1) === n) return <td key={"row" + m + ":" + n} className="greyed cell"></td>;

                    var againstPlayer = joinedPlayers[playerIds[n + start - 1]];
                    return <td key={"row" + m + ":" + n} className="cell">
                        <ul>
                          <li>{ curPlayer.name }</li>
                          <li>{ "Rating: " + curPlayer.rating }</li>
                          <li>vs.</li>
                          <li>{ againstPlayer.name }</li> 
                          <li>{ "Rating: " + againstPlayer.rating }</li>
                        </ul>
                        {
                          n > m ?
                          <div>
                            <input type="number" min="0" max="3" 
                                   key={"row" + m + ":" + n + "-1"} className="score" 
                                   onChange={this.updateResult.bind(this, m, n - 1, 0)} 
                                   value={this.state.result[m][n - 1][0]} />

                            <input type="number" min="0" max="3" 
                                   key={"row" + m + ":" + n + "-2"} className="score" 
                                   onChange={this.updateResult.bind(this, m, n - 1, 1)} 
                                   value={this.state.result[m][n - 1][1]} />
                          </div> :  <div>
                            <input type="number" disabled
                                   key={"row" + m + ":" + n + "-1"} className="score"                             
                                   value={this.state.result[n - 1][m][1]} />

                            <input type="number" min="0" max="3"  disabled
                                   key={"row" + m + ":" + n + "-2"} className="score" 
                                   value={this.state.result[n - 1][m][0]} />
                          </div> 

                        }

                      </td>
                    })}</tr>
                })
              }
              
          </tbody>
          </table>
	}
}

export default RecordTable;