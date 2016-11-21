import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class PasswordChange extends Component {
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
    if (this.state.oldPassword.length === 0) {
      this.setState({ error: {
        password: "Please fill in your old password."
      } });
      return false;
    }

    if (this.state.newPassword.length < 8) {
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

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      this.props.submitChange(this.state.oldPassword, this.state.newPassword)
        .then(() => {
          this.props.setMessage("Info has been changed successfully.");
          this.setState({
            oldPassword: "",
            newPassword: "",
            newPasswordConfirm: "",
            error: {}
          });
        }).catch((err) => {
          if (err.response) {
            const message = err.response.data;
            if (typeof message === "object") {
              this.setState({
                error: {
                  password: message.oldPassword
                }
              });
            } else {
              this.props.setMessage(err.response.data);
            }
          }
        });
    }
  }
  render() {
    return (<form>
      <TextField
        hintText="Old Password"
        floatingLabelText="Old Password"
        value={this.state.oldPassword}
        onChange={e => this.handleChange("oldPassword", e.target.value)}
        errorText={this.state.error.password}
        type="password"
        fullWidth={Boolean(true)}
      />
      <TextField
        hintText="New Password"
        floatingLabelText="New Password"
        value={this.state.newPassword}
        onChange={e => this.handleChange("newPassword", e.target.value)}
        errorText={this.state.error.newPassword1}
        type="password"
        fullWidth={Boolean(true)}
      />
      <TextField
        hintText="Retype your password"
        floatingLabelText="Retype your password"
        value={this.state.newPasswordConfirm}
        onChange={e => this.handleChange("newPasswordConfirm", e.target.value)}
        errorText={this.state.error.newPassword2}
        type="password"
        fullWidth={Boolean(true)}
      />
      <RaisedButton
        type="submit"
        label="Change Password"
        backgroundColor="#1565C0"
        labelColor="white"
        style={{ marginTop: "20px" }}
        onClick={this.handleSubmit}
      />
    </form>);
  }
}
