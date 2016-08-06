import React from 'react';
import ClubActions from '../../actions/clubActions';
import { addPlayer } from "../../actions/clientActions";
import PlayerStore from "../../stores/playerStore";

class PlayerForm extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      name: "",
      rating: "0"
    }
	}
  static propTypes = {
    name: React.PropTypes.string,
    rating: React.PropTypes.number
  }
  componentDidMount() {
    this.pStore = PlayerStore.addListener(this.props.closeModal);
  }
  componentWillUnmount() {
    this.pStore.remove();
  }
  _updateField(name, e) {
    this.setState({ [name]: e.target.value });
  }
  _handleSubmit(callback, e) {
    e.preventDefault();
    callback(this.state);
  }
	render = () => {
		  return (<div>
        <div className="close-icon" onClick={this.props.closeModal}>&#10006;</div>
        <form onSubmit={this.props._handleSubmit.bind(null, addPlayer)}>
          <h3>Player Form</h3>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" 
            				onChange={this.props._updateField.bind(null, "name")} 
            				value={this.props.name} required/>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input type="text" id="rating" 
            			 onChange={this.props._updateField.bind(null, "rating")} 
            			 value={this.props.rating} pattern="^\d{2,4}$"
            			 required/>
          </div>
          <input type="submit" value="Register Player"/>
        </form>
      </div>)
	}
}

export default PlayerForm;