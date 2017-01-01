import React from "react";
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

const SelectedPlayerList = (props) => {
  const idRef = {};
  const playerList = props.players.map((player, i) => {
    idRef[i] = player._id;
    return (<TableRow key={player._id} selected={props.addedPlayers.findIndex(player => player._id) > -1}>
      <TableRowColumn>{player.name}</TableRowColumn>
      <TableRowColumn>{player.rating}</TableRowColumn>
    </TableRow>);
  });

  return (
    <div>
      <h3 className="table-title">{`${props.title} (${props.players.length})`}</h3>
      <Table
        height="400px"
        fixedHeader={Boolean(true)}
        selectable={Boolean(true)}
        multiSelectable={Boolean(true)}
        onCellClick={i => props.unregisterPlayer(idRef[i])}
      >
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Rating</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckBox={false}
          showRowHover={Boolean(true)}
          deselectOnClickaway={false}
        >
          {playerList}
        </TableBody>
      </Table>
    </div>
  );
};

export default SelectedPlayerList;
