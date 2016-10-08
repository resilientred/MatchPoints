import React, { Component, PropTypes } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import FlatButton from "material-ui/FlatButton";
import RecordTableEnter from "./recordTableEnter";
import RecordTableView from "./recordTableView";

class RecordTable extends Component {
  static propTypes = {
    updateScore: PropTypes.func,
    finalized: PropTypes.bool,
    sizeOfGroup: PropTypes.number,
    groupNum: PropTypes.number,
    start: PropTypes.number,
    state: PropTypes.String,
    joinedPlayers: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      result: [...Array(this.props.sizeOfGroup)].map(() =>
        [...Array(this.props.sizeOfGroup)].map(() => [0, 0])),
      tab: 0
    };
  }

  shouldComponentUpdate() {
    if (this.props.groupNum && this.props.state && this.props.sizeOfGroup) {
      return false;
    }
    return true;
  }
  handleCalculate = () => {
    this.props.updateScore(this.calculateScore(), this.props.groupNum - 1);
  }
  changeTab = (tab) => {
    this.setState({ tab });
  }
  calculateScore() {
    const joinedPlayers = this.props.joinedPlayers;
    const playerIds = Object.keys(joinedPlayers);
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
        const player1Id = playerIds[startIdx + i];
        const player2Id = playerIds[startIdx + j];
        const modifier = sign === 1 ? -record[1] * 2 : record[0] * 2;

        const scoreAdjust = parseInt(((16 * sign) -
          ((joinedPlayers[player1Id].rating - joinedPlayers[player2Id].rating) *
            sign * 0.04)) + modifier, 10);

        rc[player1Id] = {
          change: rc[player1Id] ? rc[player1Id].change : 0 + scoreAdjust,
          ratingBefore: +joinedPlayers[player1Id].rating
        };
        rc[player2Id] = {
          change: rc[player2Id] ? rc[player2Id].change : 0 - scoreAdjust,
          ratingBefore: +joinedPlayers[player2Id].rating
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
      result: this.state.result
    });
  }

  render() {
    const { finalized, ...propsToPass } = this.props;

    if (finalized) {
      return (<div style={{ overflow: "scroll" }}>
        <RecordTableView
          {...propsToPass}
          result={this.state.result}
        />
      </div>);
    }

    return (<div>
      <FlatButton
        secondary={Boolean(true)}
        label="Update"
        onTouchTap={this.handleCalculate}
      />
      <Tabs
        value={this.state.tab}
        onChange={this.changeTab}
        contentContainerStyle={{
          padding: "20px",
          border: "1px solid #E0E0E0",
          overflow: "scroll"
        }}
      >
        <Tab label="Enter Result" value={0}>
          <RecordTableEnter
            {...propsToPass}
            result={this.state.result}
            updateResult={this.updateResult}
          />
        </Tab>
        <Tab label="View Result" value={1}>
          <RecordTableView {...propsToPass} result={this.state.result} />
        </Tab>
      </Tabs>
    </div>);
  }
}

export default RecordTable;
