import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { changePassword, changeInfo } from "redux/modules/account";
import { setMessage } from "redux/modules/main";

@connect(({ auth: { club } }) => { club }, { changePassword, changeInfo, setMessage })
export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
  }

  setTab(tab) {
    this.setState({ tab });
  }

  render() {
    return (<div>
      <Card>
        <CardHeader title="Member Profile" />
        <CardActions>
          <FlatButton
            label="Change Password"
            onChange={() => this.setTab(0)}
          />
          <FlatButton
            label="Change Info"
            onChange={() => this.setTab(1)}
          />
        </CardActions>
        <CardText style={{ display: this.state.tab === 0 }}>
          <PasswordChange
            club={this.props.club}
            submitChange={this.props.changePassword}
            setMessage={this.props.setMessage}
          />
        </CardText>
        <CardText style={{ display: this.state.tab === 1 }}>
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