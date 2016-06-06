import React from 'react';
import PlayerList from './playerList';

class PlayerGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
      selectPlayer: React.PropTypes.func.isRequired,
      selectRemovePlayer: React.PropTypes.func.isRequired,
      addPlayer: React.PropTypes.func.isRequired,
      removePlayer: React.PropTypes.func.isRequired,
      sortPlayer: React.PropTypes.func.isRequired,
      allPlayers: React.PropTypes.object.isRequired,
      addedPlayers: React.PropTypes.object.isRequired,
      selectedPlayer: React.PropTypes.object.isRequired,
      selectedRemovePlayer: React.PropTypes.object.isRequired
    }

    button(callback, name){
      return  (<button className="playerButton"
          onClick={callback}>{name}</button>
      )
    }

    render() {
        return <div className="participant-reg">
          <h3>Participant Registration</h3>
          <div>
            <PlayerList players={this.props.allPlayers}
                        selectPlayer={this.props.selectPlayer}
                        selectedPlayer={this.props.selectedPlayer}
                        title="All Players"/>
            <div className="buttons">
              { this.button(this.props.addPlayer, "Add") }
              { this.button(this.props.removePlayer, "Remove") }
              { this.button(this.props.sortPlayer, "Sort") }
            </div>
            <PlayerList players={this.props.addedPlayers} 
                        selectPlayer={this.props.selectRemovePlayer}
                        selectedPlayer={this.props.selectedRemovePlayer}
                        title="Selected Players"/>
          </div>
        </div>;
    }
}
//need to have sort..
export default PlayerGroup;
