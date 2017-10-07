import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { signUp } from 'redux/modules/auth';

@connect(({ auth: { error } }) => ({ error }), { signUp })
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      clubName: '',
      stateName: '',
      city: '',
      errors: {},
    };
  }
  validate() {
    const emailRegex = new RegExp('.+@.+..+', 'i');
    let isValid = true;
    const errors = {};
    if (this.state.clubName.length === 0) {
      errors.clubName = 'Club name cannot be empty';
      isValid = false;
    }
    if (this.state.city.length === 0) {
      errors.city = 'City cannot be empty';
      isValid = false;
    }
    if (this.state.stateName.length === 0) {
      errors.stateName = 'State cannot be empty';
      isValid = false;
    }
    if (this.state.username.length < 8) {
      errors.username = 'Username must be at least 8 characters long';
      isValid = false;
    }
    if (this.state.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }
    if (!emailRegex.test(this.state.email)) {
      errors.email = 'Email is not a valid format';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  }

  updateField(field, e) {
    const { [field]: fieldError, ...errors } = this.state.error;

    if (fieldError) {
      this.setState({ errors });
    }
    this.setState({ [field]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.props.signUp(this.state).then(() => {
        this.props.setPage(0);
        browserHistory.push('/club');
      });
    }
  }
  render() {
    const { errors } = this.state;
    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div style={{ color: 'red' }}>{this.props.error}</div>
        <div>
          <TextField
            type="text"
            hintText="clubName"
            floatingLabelText="Club Name"
            onChange={e => this.updateField('clubName', e)}
            errorText={errors.clubName}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            hintText="city"
            floatingLabelText="City"
            onChange={e => this.updateField('city', e)}
            errorText={errors.city}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            hintText="State"
            floatingLabelText="State"
            onChange={e => this.updateField('stateName', e)}
            errorText={errors.stateName}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            hintText="username"
            floatingLabelText="Username"
            onChange={e => this.updateField('username', e)}
            errorText={errors.username}
            required
          />
        </div>
        <div>
          <TextField
            type="email"
            hintText="email"
            floatingLabelText="Email"
            onChange={e => this.updateField('email', e)}
            errorText={errors.email}
            required
          />
        </div>
        <div>
          <TextField
            type="password"
            hintText="password"
            floatingLabelText="Password"
            onChange={e => this.updateField('password', e)}
            errorText={errors.password}
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
