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
      allPlayers: [],
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
    addedPlayers[player.id] = player
  }

  removePlayer = (player) => {

  }

  render(){
    let allPlayers = this.state.allPlayers;
    return (<div>
      <ul>
        {
          Object.keys(allPlayers).map ( (player) => {
            return <li key={allPlayers[player]._id}>{allPlayers[player].name}</li>;
            })
        }
      </ul>
      <PlayerForm />
    </div>
    )
  }
}
      //<ul>
        //{
          //this.state.allPlayers.map( player => 
            //(<li key={player.id}>{player.name}</li>)
           //)
        //}
      //</ul>
      //<div>
        //<PlayerButton name="Add" callback={this.addPlayer}/>
        //<PlayerButton name="Remove" callback={this.removePlayer}/>
      // </div>

