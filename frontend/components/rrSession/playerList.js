import React, { PropTypes, Component } from "react";
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";
import Close from "react-icons/lib/md/close";

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

  playerRow(player) {
    return (<TableRow key={player._id} selected={!!this.props.addedPlayers[player._id]}>
      <TableRowColumn>{player.name}</TableRowColumn>
      <TableRowColumn>{player.rating}</TableRowColumn>
      <TableRowColumn>
        <IconButton
          onClick={() => this.props.deletePlayer(player._id)}
          iconClassName="material-icons"
          tooltip="Remove Player"
        >
          <Close />
        </IconButton>
      </TableRowColumn>
    </TableRow>);
  }
  render() {
    const players = this.props.players;
    const input = this.state.input;
    const idRef = {};
    const playerList = [];

    for (let i = 0; i < players.length; i++) {
      if (input === "" || playerList.length >= 15) {
        break;
      }
      const player = players[i];
      if (player.name.toLowerCase().indexOf(input) > -1) {
        idRef[i] = player._id;
        playerList.push(this.playerRow(player));
      }
    }

    return (
      <div>
        <h3 className="table-title">{ this.props.title }</h3>
        <TextField
          hintText="Start typing..."
          onChange={this.handleUpdateInput}
          floatingLabelText="Search for a player"
          fullWidth={Boolean(true)}
        />
        <Table
          height="400px"
          fixedHeader={Boolean(true)}
          selectable={Boolean(true)}
          multiSelectable={Boolean(true)}
          onCellClick={(i, col, e) => this.props.handleToggle(idRef[i], e)}
        >
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Rating</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckBox={this.props.selectable}
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
  players: PropTypes.array,
  addedPlayers: PropTypes.object,
  deletePlayer: PropTypes.func,
  selectable: PropTypes.bool,
  handleToggle: PropTypes.func,
  title: PropTypes.string
};

export default PlayerList;
