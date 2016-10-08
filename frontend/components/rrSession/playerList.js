import React, { PropTypes } from "react";
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import IconButton from "material-ui/IconButton";
import Close from "react-icons/lib/md/close";

const PlayerList = (props) => {
  const players = props.players;
  const idRef = {};
  const playerList = players.map((player, i) => {
    idRef[i] = player._id;
    return (<TableRow key={player._id} selected={!!props.addedPlayers[player._id]}>
      <TableRowColumn>{player.name}</TableRowColumn>
      <TableRowColumn>{player.rating}</TableRowColumn>
      {
        !props.deletePlayer ? "" :
          <TableRowColumn>
            <IconButton
              onClick={() => props.deletePlayer(player._id)}
              iconClassName="material-icons"
              tooltip="Remove Player"
            >
              <Close />
            </IconButton>
          </TableRowColumn>
      }
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
            {
              props.deletePlayer && <TableHeaderColumn />
            }
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckBox={props.selectable}
          showRowHover={Boolean(true)}
          deselectOnClickaway={Boolean(false)}
        >
          { playerList }
        </TableBody>
      </Table>
    </div>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array,
  deletePlayer: PropTypes.func,
  selectable: PropTypes.bool,
  handleToggle: PropTypes.func,
  title: PropTypes.string
};

export default PlayerList;
