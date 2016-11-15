import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { changePassword } from "redux/modules/auth";

@connect(({ auth: { club } }) => { club })
export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
      error: {
        password: "",
        passwordConfirm: ""
      }
    };
  }

  handleOldPassword = (event) => {
    this.setState({
      oldPassword: event.target.value,
      error: {
        ...this.state.error,
        passsword: ""
      }
    });
  }

  handleNewPassword = (field, event) => {
    this.setState({
      [field]: event.target.value,
      error: {
        ...this.state.error,
        passswordConfirm: ""
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { error, ...others } = this.state;
    if (this.state.newPasswordConfirm !== this.state.newPassword) {
      this.setState({
        error: {
          ...this.state.error,
          passswordConfirm: "The new passwords don't match."
        }
      })
      return;
    }

    if (this.state.oldPassword.length == 0) {
      this.setState({
        error: {
          ...this.state.error,
          password: "Please fill in your old password."
        }
      })
    }
    this.props.changePassword(others).then(() => {
      this.props.setError("Password has been changed successfully.");
      this.setState({
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
        error: {
          ...this.state.error,
          passsword: "Password is not correct."
        }
      })
    }).catch(() => {
      this.setState({ })
    });
  }
  render() {
    return (<div>
      <Card>
        <CardHeader title="Member Profile" />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardText>
          <div className="forms">
            <form onSubmit={this.handleSubmit}>
              <TextField
                floatingLabelText="Email"
                value={this.props.club.email}
                type="email"
                fullWidth={true}
              />
              <TextField
                hintText="Old Password"
                floatingLabelText="Old Password"
                value={this.state.oldPassword}
                onChange={this.handleOldPassword}
                errorText={this.state.error.password}
                type="password"
                fullWidth={true}
              />
              <TextField
                hintText="New Password"
                floatingLabelText="New Password"
                value={this.state.newPassword}
                onChange={(e) => this.handleNewPassword("newPassword", e)}
                errorText={this.state.error.passwordConfirm}
                type="password"
                fullWidth={true}
              />
              <TextField
                hintText="Retype your password"
                floatingLabelText="Retype your password"
                value={this.state.newPasswordConfirm}
                onChange={(e) => this.handleNewPassword("newPasswordConfirm", e)}
                errorText={this.state.error.passwordConfirm}
                type="password"
                fullWidth={true}
              />
            </form>
          </div>
        </CardText>
      </Card>
    </div>);
  }
}