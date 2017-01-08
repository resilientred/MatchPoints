import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { resetPassword } from 'redux/modules/reset';
import { setMessage } from 'redux/modules/main';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

@connect(({ reset }) => ({ reset }), { resetPassword, setMessage })
export default class ForgotReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordCheck: '',
      error: {
        first: '',
        second: '',
      },
    };
  }

  componentWillUnmount() {
    this.setState({
      password: '',
      passwordCheck: '',
      error: '',
    });
  }

  handleChange = (field, val) => {
    this.setState({
      [field]: val,
      error: {},
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password.length < 8) {
      return this.setState({
        error: {
          first: 'Password has to be at least 8 characters long',
        },
      });
    }
    if (this.state.password !== this.state.passwordCheck) {
      return this.setState({
        error: {
          second: "Passwords don't match",
        },
      });
    }
    this.props.resetPassword(this.props.reset.token, this.state.password).then(() => {
      this.timeout = setTimeout(() => {
        browserHistory.push('/');
        this.props.setPage(1);
      }, 5000);
    }).catch(() => {
      this.timeout = setTimeout(() => {
        browserHistory.push('/');
        this.props.setPage(1);
      }, 5000);
    });
  }

  render() {
    const { token, success } = this.props.reset;

    if (!token || success) {
      return (<div className="forms activated" style={{ top: '30%' }}>
        <form onSubmit={e => e.preventDefault()}>
          {
            success ?
              <h4>Password has been changed successfully.</h4>
              :
              <p>The token is invalid or has expired.</p>
          }
          <p>You will be redirected to login page in 5 seconds.</p>
          <RaisedButton
            label="Back to Main Page"
            primary={Boolean(true)}
            labelColor="white"
            onClick={() => {
              clearTimeout(this.timeout);
              browserHistory.push('/');
              this.props.setPage(1);
            }}
          />
        </form>
      </div>);
    }

    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        <h3>Reset Your Password</h3>
        <div>
          <TextField
            type="password"
            hintText="New Password"
            floatingLabelText="New Password"
            errorText={this.state.error.first}
            value={this.state.password}
            onChange={e => this.handleChange('password', e.target.value)}
            fullWidth={Boolean(true)}
          />
          <TextField
            type="password"
            hintText="Type the password again"
            floatingLabelText="Type the password again"
            errorText={this.state.error.second}
            value={this.state.passwordCheck}
            fullWidth={Boolean(true)}
            onChange={e => this.handleChange('passwordCheck', e.target.value)}
          />
          <RaisedButton
            label="Reset Password"
            backgroundColor="#1565C0"
            labelColor="white"
            style={{ marginRight: '10px', marginTop: '10px' }}
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    </div>);
  }
}
