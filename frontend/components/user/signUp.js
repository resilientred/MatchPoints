import React, { Component } from "react"
import { fetchCurrentClub, logIn } from "../../actions/clubActions"
import ClubStore from "../../stores/clubStore"
import { browserHistory } from 'react-router'  

export default class SignUpForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }
  componentWillMount() {
    if (ClubStore.getCurrentClub()){
      browserHistory.push("/club");
    } else {
      this.csListener = ClubStore.addListener(fetchedCurrentClub);
      fetchCurrentClub();
    }
  }
  updateField(field, e){
    this.setState({ [field]: e.target.value })
  }
  _fetchedCurrentClub = () => {
    if (ClubStore.getCurrentClub()){
      browserHistory.push("/club");
    } 
  }
  handleSubmit = (e) => {
    e.preventDefault();
    logIn(this.state);
  }
  render() {
    return <div class="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Log In</h3>
        <div>
          <label for="username">Username</label>
          <input type="text" id="username"
                 placeholder="username" 
                 onChange={this.updateField.bind(this, "username")}
                 required/>
        </div>
        <div>
          <label for="password">Password</label>
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