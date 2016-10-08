import React, { Component, PropTypes } from "react";
import CircularProgress from "material-ui/CircularProgress";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { fetchAllPlayersFromClub } from "../../actions/clientActions";
import PlayerResult from "./playerResult";
import PlayerStore from "../../stores/playerStore";

export default class PlayerResultQuery extends Component {
  static propTypes = {
    clubs: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedClub: null,
      players: null,
      selectedPlayer: null
    };
  }
  componentDidMount() {
    this.qaListener = PlayerStore.addListener(this.fetchedPlayersRecord);
  }
  componentWillUnmount() {
    this.qaListener.remove();
  }
  selectClub = (e, idx, club) => {
    this.setState({ selectedClub: club });
    this.checkIfCachedClub(club);
  }
  selectPlayer = (e, idx, player) => {
    this.setState({ selectedPlayer: player });
  }
  checkIfCachedClub(id) {
    const bool = PlayerStore.containClub(id);
    if (bool) {
      if (PlayerStore.currentClub() !== id) {
        PlayerStore.setClub(id);
      }
      this.setState({ players: PlayerStore.allPlayersInClub() });
    } else {
      fetchAllPlayersFromClub(id);
    }
  }
  fetchedPlayersRecord = () => {
    PlayerStore.setClub(this.state.selectedClub);
    this.setState({ players: PlayerStore.allPlayersInClub() });
  }
  render() {
    if (!this.props.clubs) return <CircularProgress size={2} />;

    return (<div>
      <div className="name-select-div">
        <SelectField
          value={this.state.selectedClub}
          onChange={this.selectClub}
          floatingLabelText="Select a club"
          floatingLabelFixed={Boolean(true)}
          menuStyle={{ textOverflow: "ellipsis" }}
        >
          {
            this.props.clubs.map(club => (
              <MenuItem key={club._id} value={club._id} primaryText={club.clubName} />
            ))
          }
        </SelectField>
        <SelectField
          value={this.state.selectedPlayer}
          onChange={this.selectPlayer}
          floatingLabelText="Select a club"
          floatingLabelFixed={Boolean(true)}
        >
          {
            this.state.players ?
              Object.keys(this.state.players).map((playerId) => {
                const player = this.state.players[playerId];
                return <MenuItem key={player._id} value={player._id} primaryText={player.name} />;
              }) :
              <MenuItem
                key="empty"
                disabled={Boolean(true)}
                value={null}
                primaryText="No Players Available"
              />
          }
        </SelectField>
      </div>
      <PlayerResult player={this.state.selectedPlayer} />
    </div>);
  }
}
