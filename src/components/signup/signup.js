import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { signUp } from "redux/modules/auth";
import { setPage } from "redux/modules/splash";

@connect(() => ({}), { signUp, setPage })
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
  updateField(field, e) {
    const newField = { [field]: e.target.value };

    if (this.state.error) {
      newField.error = "";
    }
    this.setState(newField);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state).then(() => {
      browserHistory.push("/club");
    }).catch((error) => {
      this.setState({ error });
    });
  }
  render() {
    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        {this.state.error}
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
