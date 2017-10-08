import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { RecordTableEnter, RecordTableView } from 'components';

export default class EditRecordTable extends Component {
  state = {
    tab: 0,
  };

  handleCalculate = () => {
    this.props.updateScore(this.calculateScore(), this.props.groupNum - 1);
  }

  changeTab = (tab) => {
    this.setState({ tab });
  }
  calculateScore() {
    // scoreChange = [{ id: 1000, change: 100, before }];
    //
    const joinedPlayers = this.props.joinedPlayers;
    const startIdx = this.props.start;
    const calculatedScore = [];
    const rc = {};

    this.props.results.forEach((indRecord, i) => {
      const currentRecord = indRecord.map((record, j) => {
        if (j < i) return -calculatedScore[j][i];
        if (i === j) return 0;

        let sign = -1;
        if (record[0] - record[1] === 0) {
          sign = 0;
        } else if (record[0] - record[1] > 0) {
          sign = 1;
        }

        if (sign === 0) return 0;
        const player1 = joinedPlayers[startIdx + i];
        const player2 = joinedPlayers[startIdx + j];
        const player1Id = player1._id;
        const player2Id = player2._id;
        let scoreAdjust;
        if (sign === 1) {
          scoreAdjust = parseInt(16 -
            ((player1.rating - player2.rating) * 0.04), 10) - (record[1] * 2);
        } else {
          scoreAdjust = -(parseInt(16 +
            ((player1.rating - player2.rating) * 0.04), 10)) + (record[0] * 2);
        }

        if (sign === 1 && scoreAdjust < 0) {
          scoreAdjust = 0 - (record[1] * 2);
        }
        rc[player1Id] += scoreAdjust;
        rc[player2Id] -= scoreAdjust;

        return scoreAdjust;
      });
      calculatedScore.push(currentRecord);
    });
    return [calculatedScore, rc];
  }

  // updateResult = (i, j, k, val) => {
  //   this.state.result[i][j][k] = val;
  //   this.setState({
  //     result: this.state.result,
  //   });
  // }

  render() {
    return (<div className="tab-container" style={{ width: '100%' }}>
      <Tabs
        value={this.state.tab}
        onChange={this.changeTab}
        tabItemContainerStyle={{ backgroundColor: 'white' }}
        contentContainerStyle={{
          padding: '20px',
          overflow: 'auto',
        }}
      >
        <Tab label="Enter Result" value={0} className="tab-menu-tab">
          <RaisedButton
            backgroundColor="#E64A19"
            labelColor="white"
            label="Calculate Score"
            onTouchTap={this.handleCalculate}
          />
          <RecordTableEnter
            {...this.props}
            results={this.props.results}
            updateResult={this.props.updateResult}
          />
        </Tab>
        <Tab label="View Result" value={1} className="tab-menu-tab">
          {/* <RecordTableView {...this.props} result={this.props.results} /> */}
        </Tab>
      </Tabs>
    </div>);
  }
}
