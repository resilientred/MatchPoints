import React from 'react'
import { addPlayer } from "../../actions/clientActions"
import ClubStore from "../../stores/clubStore"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton/IconButton'
import Close from 'react-icons/lib/md/close'

class PlayerForm extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      name: "",
      rating: "0"
    }
	}
  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.modalOpen && this.props.modalOpen){
      document.getElementById("name").focus();
    }
  }
  _updateField(name, e) {
    this.setState({ [name]: e.target.value });
  }
  _handleSubmit = () => {
    addPlayer(ClubStore.getCurrentClub()._id, this.state)
    this.setState({ name: "", rating: "0" });
  }
	render(){
      return (<div className="player-form" style={{display: this.props.modalOpen ? "block" : "none"}}>
        <form>
          <IconButton style={{position: "absolute", right: "10px", top: "10px"}} 
                      iconClassName="material-icons" 
                      onClick={this.props.closeModal}
                      tooltip="Close Form" touch={true} 
                      ><Close /></IconButton>
          <h3>Player Form</h3>
          <div>
            <TextField type="text" 
                    floatingLabelText="Name" 
                    id="name"
                    hintText="Name"
            				onChange={this._updateField.bind(this, "name")} 
            				value={this.state.name} 
                    required />
          </div>
          <div>
            <TextField type="text"
                    floatingLabelText="Rating" 
                    hintText="Rating"
            			 onChange={this._updateField.bind(this, "rating")} 
            			 value={this.state.rating} pattern="^\d{2,4}$"
            			 required/>
          </div>
          <RaisedButton 
            fullWidth={true} 
            label="Register Player" 
            style={{marginTop: "20px"}}
            onTouchTap={this._handleSubmit}/>
        </form>
      </div>)
	}
}

export default PlayerForm;