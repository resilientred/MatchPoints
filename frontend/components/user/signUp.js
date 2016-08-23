import React, { Component } from "react"
import { fetchCurrentClub, signUp } from "../../actions/clubActions"
import ClubStore from "../../stores/clubStore"
import { browserHistory } from 'react-router'  
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export default class SignUpForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      clubName: "",
      stateName: "",
      city: "",
      error: ""
    }
  }
  componentWillMount() {
    if (ClubStore.getCurrentClub()){
      browserHistory.push("/club");
    } else {
      this.csListener = ClubStore.addListener(this._clubStoreChange);
      fetchCurrentClub();
    }
  }
  updateField(field, e){
    let newField = {[field]: e.target.value};

    if (this.state.error) { 
      newField.error = "";
    }
    this.setState(newField)
  }
  _clubStoreChange = () => {
    const error = ClubStore.getError(),
          club = ClubStore.getCurrentClub();
    if (club){
      browserHistory.push("/club");
    } else if (error){
      this.setState({ error });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    signUp(this.state);
  }
  render() {
    return <div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        { this.state.error }
        <div>
          <TextField type="text"
                 hintText="clubName" 
                 floatingLabelText="Club Name"
                 onChange={this.updateField.bind(this, "clubName")}
                 required/>
        </div>
        <div>
          <TextField type="text"
                 hintText="city" 
                 floatingLabelText="City"
                 onChange={this.updateField.bind(this, "city")}
                 required/>
        </div>
        <div>
          <TextField type="text"
                 hintText="State" 
                 floatingLabelText="State"
                 onChange={this.updateField.bind(this, "stateName")}
                 required/>
        </div>
        <div>
          <TextField type="text"
                 hintText="username" 
                 floatingLabelText="Username"
                 onChange={this.updateField.bind(this, "username")}
                 required/>
        </div>
        <div>
          <TextField type="password" 
                hintText="password" 
                floatingLabelText="Password"
                onChange={this.updateField.bind(this, "password")}
                required/>
        </div>
        <div className="button-div">
          <RaisedButton backgroundColor="#00796B" labelColor="white" onClick={this.handleSubmit} label="Sign Up"/>
        </div>
        <div className="redirect-signup">
          Already have an account yet?&nbsp;&nbsp;<a onClick={() => this.props.setTab(1)}>Log In</a>
        </div>
      </form>
    </div>;
  }
}