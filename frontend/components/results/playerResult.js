import React, { Component } from 'react'
import Graph from "./graph"
import PlayerStore from "../../stores/playerStore"
import { fetchPlayerRecord } from "../../actions/clientActions"
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn } from "material-ui/Table"
import moment from "moment"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
export default class PlayerResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.player){
      let player = PlayerStore.find(nextProps.player);
      this.setState({ player })
    }
  }

  parseData(){
    return this.state.player.ratingHistory.map(history => history.newRating)
  }

  render() {
    let player = this.state.player;
    if (!player) return <div className="player-query">No players are selected.</div>;
    let history = player.ratingHistory;
    return <div className="player-query">
      <Table selectable={false} multiSelectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Rating Before</TableHeaderColumn>
            <TableHeaderColumn>Rating Change</TableHeaderColumn>
            <TableHeaderColumn>Rating After</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          { 
            history.map( date => {
              return (<TableRow key={date._id}>
                  <TableRowColumn>{ moment(date.date).format("MMMM DD, YYYY")}</TableRowColumn>
                  <TableRowColumn>{ date.oldRating }</TableRowColumn>
                  <TableRowColumn>{ date.ratingChange }</TableRowColumn>
                  <TableRowColumn>{ date.newRating }</TableRowColumn>
                </TableRow>)
            })
          }
        </TableBody>
      </Table>
      <div className="big-container"><Graph data={this.parseData()} /></div>
    </div>;
  }
}
