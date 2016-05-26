import React from 'react';
import ClientActions from '../actions/clientActions';

class PlayerForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			rating: 0
		}
	}

	updateField = (field, e) => {
		let newField = {};
		newField[field] = e.target.value
		this.setState(newField);
	}

	registerPlayer = (e) => {
		e.preventDefault();
		ClientActions.addPlayer({
			name: this.state.name, 
			rating: this.state.rating
		});
	}

	render = () => {
		  return (<div>
        <h3>UserForm</h3>
        <form onSubmit={this.registerPlayer}>
          <label for="name">Name</label>
          <input type="text" id="name" 
          				onChange={this.updateField.bind(null, "name")} 
          				value={this.state.name} required/>

          <label for="rating">Rating</label>
          <input type="text" id="rating" 
          			 onChange={this.updateField.bind(null, "rating")} 
          			 value={this.state.rating} pattern="^\d{2,4}$"
          			 required/>
          <input type="submit" value="Register Player"/>
        </form>
      </div>)
	}
}

export default PlayerForm;