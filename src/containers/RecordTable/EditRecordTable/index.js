import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { RecordTableEnter, RecordTableView } from 'components';

export default class EditRecordTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [...Array(this.props.sizeOfGroup)].map(() =>
        [...Array(this.props.sizeOfGroup)].map(() => [0, 0])),
      tab: 0,
    };
  }

  handleCalculate = () => {
    this.props.updateScore(this.calculateScore(), this.props.groupNum - 1);
  }
  changeTab = (tab) => {
    this.setState({ tab });
  }
  calculateScore() {
    const joinedPlayers = this.props.joinedPlayers;
    const startIdx = this.props.start;
    const calculatedScore = [];
    const rc = {};

    this.state.result.forEach((indRecord, i) => {
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
        rc[player1Id] = {
          change: rc[player1Id] ? (rc[player1Id].change + scoreAdjust) : 0 + scoreAdjust,
          ratingBefore: +player1.rating,
        };
        rc[player2Id] = {
          change: rc[player2Id] ? (rc[player2Id].change - scoreAdjust) : 0 - scoreAdjust,
          ratingBefore: +player2.rating,
        };

        return scoreAdjust;
      });
      calculatedScore.push(currentRecord);
    });
    return [calculatedScore, rc];
  }

  updateResult = (i, j, k, e, idx, val) => {
    this.state.result[i][j][k] = val;
    this.setState({
      result: this.state.result,
    });
  }

  render() {
    return (<div>
      <Tabs
        value={this.state.tab}
        onChange={this.changeTab}
        contentContainerStyle={{
          padding: '20px',
          border: '1px solid #E0E0E0',
          overflow: 'scroll',
        }}
      >
        <Tab label="Enter Result" value={0}>
          <RaisedButton
            backgroundColor="#E64A19"
            labelColor="white"
            label="Calculate Score"
            onTouchTap={this.handleCalculate}
          />
          <RecordTableEnter
            {...this.props}
            result={this.state.result}
            updateResult={this.updateResult}
          />
        </Tab>
        <Tab label="View Result" value={1}>
          <RecordTableView {...this.props} result={this.state.result} />
        </Tab>
      </Tabs>
    </div>);
  }
}
