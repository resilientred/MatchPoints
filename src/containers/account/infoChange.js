import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Info extends Component {
  constructor(props) {
    super(props);

    const club = props.club;
    this.state = {
      email: club.email,
      city: club.city,
      state: club.state,
      oldPassword: "",
      error: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { error, changed, ...others } = this.state;
    const clubs = this.props.clubs;
    if (this.validate()) {
      this.props.submitChange(this.state.email, this.state.oldPassword)
        .then((club) => {
          this.props.setMessage("Info has been changed successfully.");
          this.setState({
            email: club.email,
            city: club.city,
            state: club.state,
            oldPassword: "",
            error: {}
          });
        }).catch((err) => {
          this.props.setMessage(err);
        });
    }
  }

  handleChange(field, val) {
    this.setState({
      [field]: val,
      error: {}
    });
  }

  validate() {
    if (this.state.state.length === 0) {
      this.setState({
        error: { state: "State cannot be empty." }
      });
      return false;
    }

    if (this.state.city.length === 0) {
      this.setState({ error: {
        state: "City cannot be empty."
      } });
      return false;
    }

    if (this.state.oldPassword.length === 0) {
      this.setState({ error: {
        password: "Please fill in your old password."
      } });
      return false;
    }
    const emailRegex = new RegExp(".+@.+..+", "i");
    if (!emailRegex.test(this.state.email)) {
      this.setState({ error: {
        email: "Not a valid email"
      } });

      return false;
    }
  }
  render() {
    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
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
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.handleChange("email", e.target.value)}
          errorText={this.state.error.email}
          type="email"
          fullWidth={true}
        />
        <TextField
          floatingLabelText="City"
          value={this.state.city}
          onChange={e => this.handleChange("city", e.target.value)}
          errorText={this.state.error.city}
          type="text"
          fullWidth={true}
        />
        <TextField
          floatingLabelText="State"
          value={this.state.state}
          onChange={e => this.handleChange("state", e.target.value)}
          errorText={this.state.error.state}
          type="text"
          fullWidth={true}
        />
        <RaisedButton
          label="Change Information"
          backgroundColor="#1565C0"
          labelColor="white"
          style={{ marginRight: "10px" }}
          onClick={this.handleSubmit}
        />
      </form>
    </div>);
  }
}