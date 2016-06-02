import React from 'react';
import UserActions from '../actions/userActions';
import Form from "../mixins/form";
import CSRFStore from "../stores/csrfStore";
import ClientActions from "../actions/clientActions";

class PlayerForm extends React.Component {
	constructor(props){
		super(props);
	}
  static propTypes = {
    name: React.PropTypes.string,
    rating: React.PropTypes.string
  }
  
	render = () => {
		  return (<div>
        <a onClick={this.props.closeModal}>Close</a>
        <form onSubmit={this.props._handleSubmit.bind(null, ClientActions.addPlayer)}>
          <h3>Player Form</h3>
          <label for="name">Name</label>
          <input type="text" id="name" 
          				onChange={this.props._updateField.bind(null, "name")} 
          				value={this.props.name} required/>

          <label for="rating">Rating</label>
          <input type="text" id="rating" 
          			 onChange={this.props._updateField.bind(null, "rating")} 
          			 value={this.props.rating} pattern="^\d{2,4}$"
          			 required/>
          <input type="submit" value="Register Player"/>
        </form>
      </div>)
	}
}
let initialState = {
      name: "",
      rating: "0",
      _csrf: ""
};
// need to clear
PlayerForm = Form(PlayerForm, initialState, CSRFStore, UserActions)
export default PlayerForm;