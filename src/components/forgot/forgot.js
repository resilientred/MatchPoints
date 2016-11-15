import React, { Component } from "react";
import { connect } from "react-redux";
import { resetWithUsername, resetWithEmail } from "redux/modules/reset";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
      error: "",
      success: ""
    };
  }

  handleSubmit = (e) => {
    const emailRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[._!@#*&$-])[a-zA-Z0-9_!@#*&$.-]{8,}$";
    let promise;
    if (!emailRegex.test(this.state.field)) {
      promise = this.props.resetWithUsername(this.state.field);
    } else {
      promise = this.props.resetWithEmail(this.state.field)
    }
    promise.then(() => {
      this.setState({
        field: "",
        error: "",
        success: "An email has been sent to your email with instructions to reset your password."
      });
    }).catch(() => {
      this.setState({ error: `No account matches ${this.state.field}` });
    });
  }
  render() {
    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Forgot Password</h3>
        <div className="form-error">{this.state.error}</div>
        <div>
          <TextField
            type="text"
            hintText="Enter your username or email address"
            floatingLabelText="Enter your username or email address"
            value={this.state.field}
            onChange={e => this.setState({ field: e.target.value })}
          />
          <RaisedButton
            label="Reset Password"
            backgroundColor="#1565C0"
            labelColor="white"
            style={{ marginRight: "10px" }}
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    </div>);
  }
}