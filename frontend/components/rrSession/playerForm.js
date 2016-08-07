import React from 'react'
import { addPlayer } from "../../actions/clientActions"
import PlayerStore from "../../stores/playerStore"
import ClubStore from "../../stores/clubStore"

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
  _handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(ClubStore.getCurrentClub()._id, this.state)
  }
	render = () => {
		  return (<div>
        <div className="close-icon" onClick={this.props.closeModal}>&#10006;</div>
        <form onSubmit={this._handleSubmit}>
          <h3>Player Form</h3>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" 
            				onChange={this._updateField.bind(this, "name")} 
            				value={this.state.name} required/>
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input type="text" id="rating" 
            			 onChange={this._updateField.bind(this, "rating")} 
            			 value={this.state.rating} pattern="^\d{2,4}$"
            			 required/>
          </div>
          <input type="submit" value="Register Player"/>
        </form>
      </div>)
	}
}

export default PlayerForm;