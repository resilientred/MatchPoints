import React, { Component } from "react"
import { fetchAllPlayersFromClub } from "../../actions/clientActions"
import { browserHistory } from "react-router"
import CircularProgress from 'material-ui/CircularProgress';
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import PlayerResult from "./playerResult"
import PlayerStore from "../../stores/playerStore"

export default class PlayerResultQuery extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedClub: null,
      players: null,
      selectedPlayer: null
    }
  }
  componentDidMount() {
    this.qaListener = PlayerStore.addListener(this._fetchedPlayersRecord);
  }
  componentWillUnmount(){
    this.qaListener.remove();
  }
  selectClub = (e, idx, club) => {
    this.setState({ selectedClub: club });
    this._checkIfCachedClub(club);
  }
  selectPlayer = (e, idx, player) => {
    this.setState({ selectedPlayer: player })
  }
  _checkIfCachedClub(id) {
    let bool = PlayerStore.containClub(id);
    if (bool){
      if (PlayerStore.currentClub() !== id){
        PlayerStore.setClub(id);
      }

      this.setState({ players: PlayerStore.allPlayersInClub() });
    } else {
      fetchAllPlayersFromClub(id);
    }

  }
  _fetchedPlayersRecord = () => {
    PlayerStore.setClub(this.state.selectedClub);
    this.setState({ players: PlayerStore.allPlayersInClub() });
  }
  render() {
    if (!this.props.clubs) return <CircularProgress size={2} />

    return <div>
      <div className="name-select-div">
        <SelectField 
          value={this.state.selectedClub} 
          onChange={this.selectClub} 
          floatingLabelText="Select a club" 
          floatingLabelFixed={true}
          menuStyle={{ textOverflow: "ellipsis"}}
        >
            {
              this.props.clubs.map( (club, i) => {
                return <MenuItem key={club._id} value={club._id} primaryText={club.clubName}/>;
              })
            }
        </SelectField>         
        <SelectField 
          value={this.state.selectedPlayer} 
          onChange={this.selectPlayer} 
          floatingLabelText="Select a club" 
          floatingLabelFixed={true}
        >
            {
              this.state.players ? 
                Object.keys(this.state.players).map( (playerId, i) => {
                  let player = this.state.players[playerId];
                  return <MenuItem key={player._id} value={player._id} primaryText={player.name}/>;
                }) :
                <MenuItem key="empty" disabled={true} value={null} primaryText="No Players Available"/>
            }
        </SelectField>
      </div>
      <PlayerResult player={this.state.selectedPlayer}/>     
    </div>
  }
}
