import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { fetchCurrentClub, signUp } from "../../actions/clubActions";
import ClubStore from "../../stores/clubStore";

export default class SignUpForm extends Component {
  static propTypes = {
    setTab: PropTypes.func
  }
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
  componentWillMount() {
    if (ClubStore.getCurrentClub()) {
      browserHistory.push("/club");
    } else {
      this.csListener = ClubStore.addListener(this.clubStoreChange);
      fetchCurrentClub();
    }
  }
  updateField(field, e) {
    const newField = { [field]: e.target.value };

    if (this.state.error) {
      newField.error = "";
    }
    this.setState(newField);
  }
  clubStoreChange = () => {
    const error = ClubStore.getError();
    const club = ClubStore.getCurrentClub();
    if (club) {
      browserHistory.push("/club");
    } else if (error) {
      this.setState({ error });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    signUp(this.state);
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
          Already have an account yet?&nbsp;&nbsp;<a onClick={() => this.props.setTab(1)}>Log In</a>
        </div>
      </form>
    </div>);
  }
}
