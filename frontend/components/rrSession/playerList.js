import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import Close from 'react-icons/lib/md/close'
import Create from 'react-icons/lib/md/create'

const PlayerList = (props) => {
  let players = props.players,
      idRef = {};
  let playerList = players.map((player, i) => {
    idRef[i] = player._id;
    return (<TableRow key={player._id} selected={!!props.addedPlayers[player._id]}>
                        <TableRowColumn>{player.name}</TableRowColumn>
                        <TableRowColumn>{player.rating}</TableRowColumn>
                        {
                          !props.updatePlayer ? "" :
                            <TableRowColumn>
                              <IconButton onClick={props.deletePlayer.bind(null, player._id)} 
                                          iconClassName="material-icons" 
                                          tooltip="Remove Player"><Close /></IconButton>
                              <IconButton onClick={props.updatePlayer.bind(null, player._id)}
                                          iconClassName="material-icons" 
                                          tooltip="Update Player"><Create /></IconButton>
                            </TableRowColumn>
                        }
                  </TableRow>);
  }) 

  return (
    <div>
      <h3 className="table-title">{ props.title }</h3>
      <Table height='400px' fixedHeader={true} 
        selectable={true} 
        multiSelectable={true} 
        onCellClick={(i, col, e) => {props.handleToggle(idRef[i])}}
        >
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Rating</TableHeaderColumn>
            {
              !props.updatePlayer ? "" :
              <TableHeaderColumn></TableHeaderColumn>
            }
          </TableRow>
        </TableHeader>
        <TableBody 
            displayRowCheckBox={props.selectable} 
            showRowHover={true}
            deselectOnClickaway={false}>
          { playerList }
        </TableBody>
      </Table>
    </div>
  );
}



export default PlayerList;