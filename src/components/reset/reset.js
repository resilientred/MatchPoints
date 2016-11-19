import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { resetPassword, setError } from "redux/modules/reset";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

@connect(({ reset }) => ({ reset }), { resetPassword, setError })
export default class ForgotReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordCheck: "",
      error: {
        first: "",
        second: ""
      }
    };
  }
  handleChange = (field, val) => {
    this.setState({
      [field]: val,
      error: {}
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password.length <= 8) {
      return this.setState({
        error: {
          first: "Password has to be at least 8 characters long"
        }
      });
    }
    if (this.state.password !== this.state.passwordCheck) {
      return this.setState({
        error: {
          second: "Passwords don't match"
        }
      });
    }
    this.props.resetPassword(this.props.reset.token, this.state.password).then(() => {
      browserHistory.push("/");
      this.props.setPage(0);
      this.setState({
        password: "",
        passwordCheck: ""
      });
    });
  }
  render() {
    if (!this.props.reset.token) {
      return (<div className="forms activated">
        <form onSubmit={(e) => e.preventDefault()}>
          <p>The token has expired.</p>
          <RaisedButton
            label="Back to Main Page"
            primary={true}
            labelColor="white"
            onClick={() => {
              browserHistory.push("/");
              this.props.setPage(0);
            }}
          />
        </form>
      </div>);
    }

    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Reset Your Password</h3>
        <div className="form-error">{this.props.reset.error}</div>
        <div>
          <TextField
            type="password"
            hintText="New Password"
            floatingLabelText="New Password"
            errorText={this.state.error.first}
            value={this.state.password}
            onChange={e => this.handleChange("password", e.target.value)}
            fullWidth={true}
          />
          <TextField
            type="password"
            hintText="Type the password again"
            floatingLabelText="Type the password again"
            errorText={this.state.error.second}
            value={this.state.passwordCheck}
            fullWidth={true}
            onChange={e => this.handleChange("passwordCheck", e.target.value)}
          />
          <RaisedButton
            label="Reset Password"
            backgroundColor="#1565C0"
            labelColor="white"
            style={{ marginRight: "10px", marginTop: "10px" }}
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    </div>);
  }
}
