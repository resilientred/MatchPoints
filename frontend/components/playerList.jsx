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

	selectPlayer = (player) => {
		this.setState({selectedPlayer: player})
		console.log("selected" + player.name)
	}

	render = () => {
		let players = this.props.players;
		return (
			<div>
				<ul>
        {
          Object.keys(players).map ( (_id) => {
          	let cur_player = players[_id];
            return <li key={_id} 
            						onClick={this.selectPlayer.bind(null, cur_player)}>
            							{cur_player.name}
            				</li>;
            })
        }				
       	</ul>
       	{this.props.button}
			</div>
			);
	}
}

export default PlayerList;