import React from 'react';

class PlayerList extends React.Component {
	constructor(props){
		super(props);
	}

	static PropTypes = {
		players: React.PropTypes.object.isRequired,
		button: React.PropTypes.object.isRequired,
    hiddenPlayers: React.PropTypes.object
	}

	render() {
		var players = this.props.players, playerLists = [];

    for (let _id in players){
      var hideClassName = this.props.hiddenPlayers[_id] ? " hidden-name" : "";

      if (players.hasOwnProperty(_id)){
        let cur_player = players[_id];
        playerLists.push(<li key={_id} 
                        onClick={this.props.selectPlayer.bind(null, cur_player)}
                        className={ (_id === this.props.selectedPlayer._id ? 
                                    "selected" : "not-selected") + hideClassName}>
                          <div>{cur_player.name}</div>
                          <div>{cur_player.rating}</div>
                    </li>);
      }
    }
		return (
			<div className="player-list">
        <div className="list-title">{this.props.title}</div>
				<ul> {playerLists} </ul>
			</div>
			);
	}
}

export default PlayerList;