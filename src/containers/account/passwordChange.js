import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
      error: {}
    };
  }

  handleChange(field, val) {
    this.setState({
      [field]: val,
      error: {}
    });
  }

  validate() {
    if (this.state.newPasswordlength <== 8) {
      this.setState({ error: {
        newPassword1: "The new password has to be at least 8 characters long."
      } });
      return false;
    }
    if (this.state.newPasswordConfirm !== this.state.newPassword) {
      this.setState({ error: {
        newPassword2: "The new passwords don't match."
      } });
      return false;
    }

    if (this.state.oldPassword.length === 0) {
      this.setState({ error: {
        password: "Please fill in your old password."
      } });
      return false;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { error, ...others } = this.state;

    if (this.validate()) {
      this.props.submitChange(this.state.oldPassword, this.state.newPassword)
        .then((club) => {
          this.props.setMessage("Password has been changed successfully.");
          this.setState({
            oldPassword: "",
            newPassword: "",
            newPasswordConfirm: "",
            error: {}
          });
        }).catch(err => this.props.setMessage(err))
    }
  }
  render() {
    return (<div className="forms">
      <form>
        <TextField
          hintText="Old Password"
          floatingLabelText="Old Password"
          value={this.state.oldPassword}
          onChange={e => this.handleChange("oldPassword", e.target.value)}
          errorText={this.state.error.password}
          type="password"
          fullWidth={true}
        />
        <TextField
          hintText="New Password"
          floatingLabelText="New Password"
          value={this.state.newPassword}
          onChange={e => this.handleChange("newPassword", e.target.value)}
          errorText={this.state.error.newPassword1}
          type="password"
          fullWidth={true}
        />
        <TextField
          hintText="Retype your password"
          floatingLabelText="Retype your password"
          value={this.state.newPasswordConfirm}
          onChange={e => this.handleChange("newPasswordConfirm", e.target.value)}
          errorText={this.state.error.newPassword2}
          type="password"
          fullWidth={true}
        />
        <RaisedButton
          label="Change Password"
          backgroundColor="#1565C0"
          labelColor="white"
          style={{ marginRight: "10px" }}
          onClick={this.handleSubmit}
        />
      </form>
    </div>);
  }
}