import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class InfoChange extends Component {
  constructor(props) {
    super(props);

    const club = props.club;
    this.state = {
      email: club.email,
      ...club.location,
      oldPassword: '',
      error: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { error, oldPassword, ...others } = this.state;

    if (this.validate()) {
      this.props.submitChange(others, oldPassword)
        .then((club) => {
          this.props.setMessage('Info has been changed successfully.');
          this.setState({
            email: club.email,
            location: {
              ...club.location,
            },
            oldPassword: '',
            error: {},
          });
        }).catch((err) => {
          if (err.response) {
            console.log(err.response);
            const message = err.response.data;
            if (typeof message === 'object') {
              this.setState({
                error: {
                  ...message,
                },
              });
            } else {
              this.props.setMessage(err.response.data);
            }
          }
        });
    }
  }

  handleChange(field, val) {
    this.setState({
      [field]: val,
      error: {},
    });
  }

  validate() {
    if (this.state.state.length === 0) {
      this.setState({
        error: { state: 'State cannot be empty.' },
      });
      return false;
    }

    if (this.state.city.length === 0) {
      this.setState({ error: {
        state: 'City cannot be empty.',
      } });
      return false;
    }

    if (this.state.oldPassword.length === 0) {
      this.setState({ error: {
        password: 'Please fill in your old password.',
      } });
      return false;
    }
    const emailRegex = new RegExp('.+@.+..+', 'i');
    if (!emailRegex.test(this.state.email)) {
      this.setState({ error: {
        email: 'Not a valid email',
      } });

      return false;
    }

    return true;
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <TextField
        hintText="Old Password"
        floatingLabelText="Old Password"
        value={this.state.oldPassword}
        onChange={e => this.handleChange('oldPassword', e.target.value)}
        errorText={this.state.error.password}
        type="password"
        fullWidth={Boolean(true)}
      />
      <TextField
        floatingLabelText="Email"
        value={this.state.email}
        onChange={e => this.handleChange('email', e.target.value)}
        errorText={this.state.error.email}
        type="email"
        fullWidth={Boolean(true)}
      />
      <TextField
        floatingLabelText="City"
        value={this.state.city}
        onChange={e => this.handleChange('city', e.target.value)}
        errorText={this.state.error.city}
        type="text"
        fullWidth={Boolean(true)}
      />
      <TextField
        floatingLabelText="State"
        value={this.state.state}
        onChange={e => this.handleChange('state', e.target.value)}
        errorText={this.state.error.state}
        type="text"
        fullWidth={Boolean(true)}
      />
      <RaisedButton
        type="submit"
        label="Change Information"
        backgroundColor="#1565C0"
        labelColor="white"
        style={{ marginRight: '10px', marginTop: '10px' }}
        onClick={this.handleSubmit}
      />
    </form>);
  }
}
