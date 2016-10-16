import React, { PropTypes, Component } from "react";
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import IconButton from "material-ui/IconButton";
import Close from "react-icons/lib/md/close";
import ModeEdit from "react-icons/lib/md/mode-edit";
import PlayerSearchField from "./playerSearchField";

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleUpdateInput = (e) => {
    this.setState({ input: e.target.value.toLowerCase() });
  }
  handleClearInput = () => {
    this.setState({ input: "" });
  }
  playerRow(player) {
    return (
      <TableRow key={player._id} selected={!!this.props.addedPlayers[player._id]}>
        <TableRowColumn className="col-name">{player.name}</TableRowColumn>
        <TableRowColumn className="col-rating">{player.rating}</TableRowColumn>
        <TableRowColumn className="col-button">
          <IconButton
            onClick={() => this.props.deletePlayer(player._id)}
            iconClassName="material-icons"
            tooltip="Remove Player"
          >
            <Close />
          </IconButton>
        </TableRowColumn>
        <TableRowColumn className="col-button">
          <IconButton
            onClick={() => this.props.openEditModal(player)}
            iconClassName="material-icons"
            tooltip="Edit Player"
          >
            <ModeEdit />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
  render() {
    const players = this.props.players;
    const input = this.state.input;
    const filteredPlayers = [];
    const playerList = [];

    for (let i = 0; i < players.length; i++) {
      if (input === "" || playerList.length >= 15) {
        break;
      }
      const player = players[i];
      if (player.name && player.name.toLowerCase().indexOf(input) > -1) {
        playerList.push(this.playerRow(player));
        filteredPlayers.push(player);
      }
    }

    return (
      <div>
        <h3 className="table-title">{ this.props.title }</h3>
        <PlayerSearchField
          input={this.state.input}
          handleUpdateInput={this.handleUpdateInput}
          handleClearInput={this.handleClearInput}
        />
        <Table
          height="400px"
          fixedHeader={Boolean(true)}
          selectable={Boolean(true)}
          multiSelectable={Boolean(true)}
          onCellClick={(i, col, e) => this.props.handleToggle(filteredPlayers[i]._id, e)}
        >
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn className="col-name">Name</TableHeaderColumn>
              <TableHeaderColumn className="col-rating">Rating</TableHeaderColumn>
              <TableHeaderColumn className="col-button" />
              <TableHeaderColumn className="col-button" />
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckBox={Boolean(true)}
            showRowHover={Boolean(true)}
            deselectOnClickaway={Boolean(false)}
          >
            { playerList }
          </TableBody>
        </Table>
      </div>
    );
  }
}

PlayerList.propTypes = {
  openEditModal: PropTypes.func,
  players: PropTypes.array,
  addedPlayers: PropTypes.object,
  deletePlayer: PropTypes.func,
  handleToggle: PropTypes.func,
  title: PropTypes.string
};

export default PlayerList;
