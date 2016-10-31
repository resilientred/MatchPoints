import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { fetchCurrentClub, logIn } from "../../actions/clubActions";
import ClubStore from "../../stores/clubStore";

export default class LogInForm extends Component {
  static propTypes = {
    setTab: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }
  componentWillMount() {
    if (ClubStore.getCurrentClub()) {
      browserHistory.push("/club");
    } else {
      this.csListener = ClubStore.addListener(this.clubStoreChange);
      fetchCurrentClub();
    }
  }
  componentWillUnmount() {
    this.csListener.remove();
  }
  updateField(field, e) {
    const newField = { [field]: e.target.value };

    if (this.state.error) {
      newField.error = "";
    }
    this.setState(newField);
  }
  clubStoreChange = () => {
    const error = ClubStore.getError();
    const club = ClubStore.getCurrentClub();
    if (club) {
      browserHistory.push("/club");
    } else if (error) {
      this.setState({ error });
    }
  }
  handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      if (e.target.tagName !== "BUTTON") {
        logIn(this.state);
      }
    } else {
      logIn(this.state);
    }
  }
  guestLogIn = (e) => {
    e.preventDefault();
    const user = "guest";
    const password = "password";
    this.setState({ username: "", password: "" });
    let count = 0;
    const int = setInterval(() => {
      if (count < 5) {
        this.setState({ username: this.state.username + user[count++] });
      } else if (count < 13) {
        this.setState({ password: this.state.password + password[count++ - 5] });
      } else {
        clearInterval(int);
        this.handleSubmit();
      }
    }, 200);
  }
  render() {
    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Log In</h3>
        <div className="form-error">{ this.state.error }</div>
        <div>
          <TextField
            type="text"
            hintText="username"
            floatingLabelText="Username"
            value={this.state.username}
            onChange={e => this.updateField("username", e)}
          />
        </div>
        <div>
          <TextField
            type="password"
            hintText="password"
            floatingLabelText="Password"
            value={this.state.password}
            onChange={e => this.updateField("password", e)}
          />
        </div>
        <div className="button-div">
          <RaisedButton
            label="Log In"
            backgroundColor="#1565C0"
            labelColor="white"
            style={{ marginRight: "10px" }}
            onClick={this.handleSubmit}
          />
          <RaisedButton label="Guest" backgroundColor="#EF6C00" labelColor="white" onClick={this.guestLogIn} />
        </div>
        <div className="redirect-signup">
          Don't have an account yet?&nbsp; &nbsp;
          <a onClick={() => this.props.setTab(2)}>
            Sign Up
          </a>
        </div>
        <div className="forgot-password">
          Forgot your password?&nbsp; &nbsp;
          <a onClick={() => this.props.setTab(3)}>
            Reset Password
          </a>
        </div>
      </form>
    </div>);
  }
}
