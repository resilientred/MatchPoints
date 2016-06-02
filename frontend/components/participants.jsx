import React from 'react';
import PlayerList from './playerList';

class PlayerGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
      selectPlayer: React.PropTypes.func.isRequired,
      selectRemovePlayer: React.PropTypes.func.isRequired,
      addButton: React.PropTypes.func.isRequired,
      removeButton: React.PropTypes.func.isRequired,
      allPlayers: React.PropTypes.object.isRequired,
      addedPlayers: React.PropTypes.object.isRequired,
      selectedPlayer: React.PropTypes.object.isRequired,
      selectedRemovePlayer: React.PropTypes.object.isRequired
    }

    render() {
        return <div>
          <h3>Participant Registration</h3>
          <PlayerList players={this.props.allPlayers}
                      selectPlayer={this.props.selectPlayer}
                      selectedPlayer={this.props.selectedPlayer}
                      title="All Players"/>
          <div className="buttons">
            { this.props.addButton() }
            { this.props.removeButton() }
          </div>
          <PlayerList players={this.props.addedPlayers} 
                      selectPlayer={this.props.selectRemovePlayer}
                      selectedPlayer={this.props.selectedRemovePlayer}
                      title="Selected Players"/>
        </div>;
    }
}
//need to have sort..
export default PlayerGroup;
