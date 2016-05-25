import React from 'react';

class PlayerButton extends React.Component {
	constructor(props){
		super(props);
	}

	static propTypes = {
		callback: React.PropTypes.func.isRequired,
		name: React.PropTypes.string.isRequired
	}

	render(){
		return (
			<div>
				<button className="playerButton"
					onChange={this.props.callback}>{this.props.name}</button>
			</div>
			)
	}
}

export default PlayerButton;