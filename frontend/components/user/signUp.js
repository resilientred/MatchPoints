import React, { Component } from "react"
import { fetchCurrentClub, signUp } from "../../actions/clubActions"
import ClubStore from "../../stores/clubStore"
import { browserHistory } from 'react-router'  

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
        <h3>Log In</h3>
        { this.state.error }
        <div>
          <label htmlFor="clubName">Club Name</label>
          <input type="text" id="clubName"
                 placeholder="clubName" 
                 onChange={this.updateField.bind(this, "clubName")}
                 required/>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city"
                 placeholder="city" 
                 onChange={this.updateField.bind(this, "city")}
                 required/>
        </div>
        <div>
          <label htmlFor="stateName">State</label>
          <input type="text" id="stateName"
                 placeholder="State" 
                 onChange={this.updateField.bind(this, "stateName")}
                 required/>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"
                 placeholder="username" 
                 onChange={this.updateField.bind(this, "username")}
                 required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" 
                placeholder="password" 
                onChange={this.updateField.bind(this, "password")}
                required/>
        </div>
        <input type="submit" value="Log In"/>
      </form>
    </div>;
  }
}