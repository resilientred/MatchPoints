import React from 'react';

class PlayerList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedPlayer: {}
		}
	}

	static PropTypes = {
		players: React.PropTypes.object.isRequired,
		button: React.PropTypes.object.isRequired
	}

	render = () => {
		let players = this.props.players;
		return (
			<div className="player-list">
        <h4>{this.props.title}</h4>
				<ul>
        {
          Object.keys(players).map ( (_id) => {
          	let cur_player = players[_id];
            return <li key={_id} 
            						onClick={this.props.selectPlayer.bind(null, cur_player)}
                        className={ _id === this.props.selectedPlayer._id ? 
                                    "selected" : "not-selected" }>
            							<div>{cur_player.name}</div>
                          <div>{cur_player.rating}</div>
            				</li>;
            })
        }				
       	</ul>
			</div>
			);
	}
}

export default PlayerList;