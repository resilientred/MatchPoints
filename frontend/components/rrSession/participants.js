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
      allPlayers: React.PropTypes.object.isRequired,
      addedPlayers: React.PropTypes.object.isRequired,
      hiddenPlayers: React.PropTypes.object.isRequired,
      selectedPlayer: React.PropTypes.object.isRequired,
      selectedRemovePlayer: React.PropTypes.object.isRequired
    }

    button(callback, name){
      return  (<button className="player-buttons"
          onClick={callback}>{name}</button>
      )
    }

    render() {
        return <div className="participant-reg">
          <div>
            <div className="add">
              <PlayerList players={this.props.allPlayers}
                          selectPlayer={this.props.selectPlayer}
                          selectedPlayer={this.props.selectedPlayer}
                          hiddenPlayers={this.props.hiddenPlayers}
                          title="All Players"/>
              { this.button(this.props.addPlayer, "Add") }
            </div>
            <div className="remove">
              <PlayerList players={this.props.addedPlayers} 
                          selectPlayer={this.props.selectRemovePlayer}
                          selectedPlayer={this.props.selectedRemovePlayer}
                          hiddenPlayers={{}}
                          title="Selected Players"/>
              { this.button(this.props.removePlayer, "Remove") }
            </div>
          </div>
        </div>;
    }
}
//need to have sort..
export default PlayerGroup;
