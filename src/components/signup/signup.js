import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { signUp } from "redux/modules/auth";

@connect(() => ({}), { signUp })
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      clubName: "",
      stateName: "",
      city: "",
      error: ""
    };
  }
  isNotValid() {
    if (this.state.clubName.length === 0) {
      return "Club name cannot be empty";
    }
    if (this.state.city.length === 0) {
      return "City cannot be empty";
    }
    if (this.state.stateName.length === 0) {
      return "State cannot be empty";
    }
    if (this.state.username.length < 8) {
      return "Username must be at least 8 characters long";
    }
    if (this.state.password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!emailRegex.test(this.state.email)) {
      return "Email is not a valid format";
    }

    return null;
  }
  updateField(field, e) {
    const newField = { [field]: e.target.value };

    if (this.state.error) {
      newField.error = "";
    }

    this.setState(newField);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.isNotValid();
    if (error) {
      this.setState({ error });
    } else {
      this.props.signUp(this.state).then(() => {
        this.props.setPage(0);
        browserHistory.push("/club");
      }).catch((err) => {
        this.setState({ error: err });
      });
    }
  }
  render() {
    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div style={{ color: "red" }}>{this.state.error}</div>
        <div>
          <TextField
            type="text"
            hintText="clubName"
            floatingLabelText="Club Name"
            onChange={e => this.updateField("clubName", e)}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            hintText="city"
            floatingLabelText="City"
            onChange={e => this.updateField("city", e)}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            hintText="State"
            floatingLabelText="State"
            onChange={e => this.updateField("stateName", e)}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            hintText="username"
            floatingLabelText="Username"
            onChange={e => this.updateField("username", e)}
            required
          />
        </div>
        <div>
          <TextField
            type="email"
            hintText="email"
            floatingLabelText="Email"
            onChange={e => this.updateField("email", e)}
            required
          />
        </div>
        <div>
          <TextField
            type="password"
            hintText="password"
            floatingLabelText="Password"
            onChange={e => this.updateField("password", e)}
            required
          />
        </div>
        <div className="button-div">
          <RaisedButton
            backgroundColor="#00796B"
            labelColor="white"
            onClick={this.handleSubmit}
            label="Sign Up"
          />
        </div>
        <div className="redirect-signup">
          Already have an account yet?&nbsp;&nbsp;
          <a onClick={() => this.props.setPage(1)}>Log In</a>
        </div>
      </form>
    </div>);
  }
}
