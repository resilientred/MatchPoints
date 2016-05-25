import React from 'react';

class PlayerList extends React.Component {
	constructor(props){
		super(props);
	}

	static PropTypes = {
		players: React.PropTypes.array.isRequired
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.props.players.map( player => 
							<li>{player.name}</li>
							)
					}
				</ul>
			</div>
			);
	}
}

export default PlayerList;