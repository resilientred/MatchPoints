import React from 'react';
import ClientActions from '../actions/clientActions';
import PlayerStore from '../stores/playerStore';

class Players extends React.Component {
	constructor() {
		this.state = {
			players: ClientActions.all() || []
		}
	}

	componentDidMount = () => {
		ClientsActions.fetchUsers();
		PlayerStore.addListener(this._fetchedUsers);
	}

	_fetchedUsers = () => {
		this.setState({players: ClientsActions.all()});
	}

	render(){
		return (<div>
			<ul>
				{
					this.state.users.map( user => 
						(<li key={user.id}>{user.name}</li>)
					 )
				}
			</ul>
		</div>
		)
	}
}

export default Players;