import React, { Component } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { logIn } from "redux/modules/auth";

@connect(() => ({}), { logIn })
export default class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }
  updateField(field, e) {
    const newField = { [field]: e.target.value };

    if (this.state.error) {
      newField.error = "";
    }
    this.setState(newField);
  }

  handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      if (e.target.tagName !== "BUTTON") {
        this.props.logIn(this.state).then(() => {
          this.setState({ username: "", password: "", error: "" });
          browserHistory.push("/club");
        }).catch((error) => {
          this.setState({ error });
        });
      }
    } else {
      this.props.logIn(this.state).then(() => {
          this.setState({ username: "", password: "", error: "" });
        browserHistory.push("/club");
      }).catch((error) => {
        this.setState({ error });
      });
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
        <div className="form-error">{this.state.error}</div>
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
          {"Don't have an account yet?"}&nbsp;&nbsp;
          <a onClick={() => this.props.setPage(2)}>
            Sign Up
          </a>
        </div>
        <div className="forgot-password">
          {"Forgot your password?"}&nbsp;&nbsp;
          <a onClick={() => this.props.setPage(3)}>
            Reset Password
          </a>
        </div>
      </form>
    </div>);
  }
}
