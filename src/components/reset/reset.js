import React, { Component } from "react";
import { asyncConnect } from "redux-async-connect";
import { connect } from "react-redux";
import { resetPassword } from "redux/modules/reset";

  //check whether params.location exist
@asyncConnect({
  token: params => Promise.resolve(params.location.query.token)
})
export default class ForgotReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordCheck: "",
      error: ""
    };
  }

  handleSubmit = (e) => {
    if (this.state.password !== this.state.passwordCheck) {
      this.setState({ error: "Passwords don't match" });
      return;
    }

    this.props.resetPassword(this.props.token).then(() => {
      this.setState({
        token: "",
        password: "",
        passwordCheck: "",
        error: ""
      });
    }).catch((error ) => {
      this.setState({ error });
    });
  }
  render() {
    if (!this.props.token) {
      return (<div className="forms">
        <h2>The token has expired</h2>
      </div>);
    }

    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Reset Your Password</h3>
        <div className="form-error">{this.state.error}</div>
        <div>
          <TextField
            type="text"
            hintText="New Password"
            floatingLabelText="New Password"
            value={this.state.field}
            onChange={e => this.setState({ field: e.target.value })}
          />
          <TextField
            type="text"
            hintText="Type the password again"
            floatingLabelText="Type the password again"
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