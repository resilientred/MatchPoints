import React, { Component } from "react"
import { fetchCurrentClub, logIn } from "../../actions/clubActions"
import ClubStore from "../../stores/clubStore"
import { browserHistory } from 'react-router'  

export default class LogInForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
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
    if (e.target.tagName !== "BUTTON"){
      logIn(this.state);
    }
  }
  guestLogIn = (e) => {
    e.preventDefault();
    const user = "guest",
          password = "password";
    let count = 0;
    let int = setInterval( () => {
      if (count < 5){
        this.setState({username: this.state.username + user[count++]})
      } else if (count < 13){
        this.setState({password: this.state.password + password[count++ - 5]})
      } else {
        clearInterval(int);
      }
    }, 200)
  }
  componentWillUnmount() {
    this.csListener.remove();
  }
  render() {
    return <div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Log In</h3>
        { this.state.error }
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"
                 placeholder="username" 
                 value={this.state.username}
                 onChange={this.updateField.bind(this, "username")}
                 required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" 
                placeholder="password" 
                value={this.state.password}
                onChange={this.updateField.bind(this, "password")}
                required/>
        </div>
        <div className="button-div">
          <input type="submit" className="button" value="Log In"/>
          <input type="submit" className="button" onClick={this.guestLogIn} value="Guest Log In" />
        </div>
      </form>
    </div>;
  }
}