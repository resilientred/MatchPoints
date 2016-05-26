import React from 'react';
import ClientActions from '../actions/clientActions';
import PlayerStore from '../stores/playerStore';
import PlayerButton from './playerButton';
import PlayerList from './playerList';
import PlayerForm from './playerForm';
export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayers: {},
      addedPlayers: {}
    }
  }

  componentDidMount(){
    ClientActions.fetchPlayers();
    PlayerStore.addListener(this._fetchedPlayers);
  }

  _fetchedPlayers = () => {
    this.setState({allPlayers: PlayerStore.all()});
  }

  addPlayer = (player) => {
    addedPlayers[player._id] = player
  }

  removePlayer = (player) => {
    delete addedPlayers[player._id];
  }
  addButton = () => {
    return (
      <button className="playerButton"
          onClick={this.addPlayer.bind(this)}>Add</button>
      )
  }
  removeButton = () => {
    return (
      <button className="playerButton"
          onClick={this.removePlayer.bind(this)}>Remove</button>
          )
  }
  render = () => {
    let allPlayers = this.state.allPlayers,
        addedPlayers = this.state.addedPlayers;
    return (<div>
      <PlayerList players={allPlayers} button={this.addButton()}/>
      <PlayerList players={addedPlayers} button={this.removeButton()}/>
      <PlayerForm />
    </div>
    )
  }
}


