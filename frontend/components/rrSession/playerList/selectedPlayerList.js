import React, { PropTypes } from "react";
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

const SelectedPlayerList = (props) => {
  const idRef = {};
  const playerList = props.players.map((player, i) => {
    idRef[i] = player._id;
    return (<TableRow key={player._id} selected={!!props.addedPlayers[player._id]}>
      <TableRowColumn>{player.name}</TableRowColumn>
      <TableRowColumn>{player.rating}</TableRowColumn>
    </TableRow>);
  });

  return (
    <div>
      <h3 className="table-title">{ props.title }</h3>
      <Table
        height="400px"
        fixedHeader={Boolean(true)}
        selectable={Boolean(true)}
        multiSelectable={Boolean(true)}
        onCellClick={(i, col, e) => props.handleToggle(idRef[i], e)}
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
          { playerList }
        </TableBody>
      </Table>
    </div>
  );
};

SelectedPlayerList.propTypes = {
  players: PropTypes.array,
  addedPlayers: PropTypes.object,
  handleToggle: PropTypes.func,
  title: PropTypes.string
};

export default SelectedPlayerList;
