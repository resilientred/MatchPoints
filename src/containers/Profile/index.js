import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { changePassword, changeInfo } from 'redux/modules/profile';
import { setMessage } from 'redux/modules/main';
import { PasswordChange, InfoChange } from 'components';

import './styles.scss';

@connect(({ auth: { club } }) => ({ club }), { changePassword, changeInfo, setMessage })
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
  }

  setTab(tab) {
    this.setState({ tab });
  }

  render() {
    return (<div className="profile-container">
      <Card containerStyle={{ padding: '15px' }}>
        <CardHeader title="Member Profile" titleStyle={{ fontSize: '24px' }} />
        <CardActions>
          <FlatButton
            label="Change Password"
            onClick={() => this.setTab(0)}
          />
          <FlatButton
            label="Change Info"
            onClick={() => this.setTab(1)}
          />
        </CardActions>
        <CardText style={{ display: this.state.tab === 0 ? 'block' : 'none' }}>
          <PasswordChange
            club={this.props.club}
            submitChange={this.props.changePassword}
            setMessage={this.props.setMessage}
          />
        </CardText>
        <CardText style={{ display: this.state.tab === 1 ? 'block' : 'none' }}>
          <InfoChange
            club={this.props.club}
            submitChange={this.props.changeInfo}
            setMessage={this.props.setMessage}
          />
        </CardText>
      </Card>
    </div>);
  }
}
