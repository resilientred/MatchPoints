import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

class PlayerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: {}
    }
  }
  cellClickHandler = (id) => {
    this.props.handleToggle(id);
    let checked = Object.assign({}, this.state.checked);
    checked[id] = true;
    this.setState({checked})
  }
  render(){
    let players = this.props.players,
        idRef = {};
    let playerList = players.map((player, i) => {
      idRef[i] = player._id;
      return (<TableRow key={player._id} selected={this.state.checked[player._id]}>
                          <TableRowColumn>{player.name}</TableRowColumn>
                          <TableRowColumn>{player.rating}</TableRowColumn>
                    </TableRow>);
    }) 

    return (
      <div>
        <Table height='400px' fixedHeader={true} 
          selectable={this.props.selectable} 
          multiSelectable={this.props.selectable} 
          onCellClick={(i) => this.cellClickHandler(idRef[i])}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn colSpan="2" style={{textAlign: 'center'}}>
                { this.props.title }
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Rating</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckBox={this.props.selectable} showRowHover={true}>
            { playerList }
          </TableBody>
        </Table>
      </div>
    );
  }
}

    // (<div className="player-list">
    //   <div className="list-title">{props.title}</div>
    //   <ul>{playerLists}</ul>
    // </div>)

export default PlayerList;