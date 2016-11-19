import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { changePassword, changeInfo } from "redux/modules/infoChange";

@connect(({ auth: { club } }) => { club }, { changePassword, changeInfo })
export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
  }

  changeTab(tab) {
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
            submitChange={}
          />
        </CardText>
        <CardText style={{ display: this.state.tab === 1 }}>
          <InfoChange
            club={this.props.club}
            submitChange={}
          />
        </CardText>
      </Card>
    </div>);
  }
}