import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { } from "";

export default class Reset extends Component {
  constructor(super) {
    super(props);
    this.state = {
      input: "",
      error: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[._!@#*&$-])[a-zA-Z0-9_!@#*&$.-]{8,}$/.test(this.state.input)) {

    } else {
      this.setState({ error: "Must be a valid email address" });
    }


  render() {
    return (
      <form handleSubmit={this.handleSubmit}>
        <TextField
          hintText="email"
          floatingLabelText="Enter your Email Address"
          type="email"
          errorText={this.state.error}
          value={this.state.input}
          onChange={(event) => this.setState({ input: event.target.value })}
        />
      </form>
    );
  }
}
