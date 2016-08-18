import React, { Component } from 'react';
import RecordTableEnter from "./recordTableEnter"
import RecordTableView from "./recordTableView"
import { Tabs, Tab } from "material-ui/Tabs"
import FlatButton from 'material-ui/FlatButton';

class RecordTable extends Component {
	constructor(props){
		super(props);
    this.state = {
      result: [...Array(this.props.sizeOfGroup)].map((_) => 
        [...Array(this.props.sizeOfGroup)].map((_) => [0, 0])),
      tab: 0
    }
	} 
  changeTab = (tab) => {
    this.setState({ tab });
  }
  _handleCalculate = (e) => {
    this.props.updateScore(this.calculateScore(), this.props.groupNum - 1);
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
        rc = {};

    this.state.result.forEach( (indRecord, i) => {
      var record = indRecord.map( (record, j) => {
        if (j < i) return -calculatedScore[j][i]; //just mirroring what the other result was
        if (i === j) return 0;

        var sign = record[0] - record[1] === 0 ? 0 : record[0] - record[1] > 0 ? 1 : -1;

        if (sign === 0) return 0;
        var player1Id = playerIds[startIdx + i],
            player2Id = playerIds[startIdx + j],
            modifier = sign === 1 ? -record[1] * 2 : record[0] * 2;

        var scoreAdjust = parseInt(16 * sign - (joinedPlayers[player1Id].rating - 
          joinedPlayers[player2Id].rating) * 
          sign * 0.04 + modifier);

        rc[player1Id] = {
          change: rc[player1Id] ? rc[player1Id]["change"] : 0 + scoreAdjust,
          ratingBefore: +joinedPlayers[player1Id].rating
        };
        rc[player2Id] = {
          change: rc[player2Id] ? rc[player2Id]["change"] : 0 - scoreAdjust,
          ratingBefore: +joinedPlayers[player2Id].rating
        };
        return scoreAdjust;
        
      })

      calculatedScore.push(record);
    });
    return [calculatedScore, rc];
  }
  updateResult = (i, j, k, e, idx, val) => {
    this.state.result[i][j][k] = val;
    this.setState({ 
      result: this.state.result
    });
  }

	render(){
      let { finalized, updateScore, ...propsToPass } = this.props;

      if (finalized){
        return <div style={{overflow: "scroll"}}><RecordTableView {...propsToPass} result={this.state.result}/></div>
      } else {
        return (<div>
                <FlatButton secondary={true} label="Update" onTouchTap={this._handleCalculate}/>
                <Tabs value={ this.state.tab }
                  onChange={ this.changeTab } 
                  contentContainerStyle={{ padding: "20px", border: "1px solid #E0E0E0", overflow: "scroll"}}>
                <Tab label="Enter Result" value={0}>
                  <RecordTableEnter {...propsToPass} result={this.state.result}
                        updateResult={this.updateResult} />
                </Tab>
                <Tab label="View Result" value={1}>
                  <RecordTableView {...propsToPass} result={this.state.result}/>
                </Tab>
              </Tabs>
            </div>)        
      }
  }
}

export default RecordTable;