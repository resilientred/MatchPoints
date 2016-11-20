import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { activateClub } from "redux/modules/auth";

@connect(() => ({}), { activateClub })
export default class Activated extends Component {
  render() {
    return (<div className="forms activated">
      <form onSubmit={(e) => e.preventDefault()}>
        <p>{this.props.message}</p>
        <RaisedButton
          label="Back to Main Page"
          backgroundColor="#EF6C00"
          labelColor="white"
          onClick={() => {
            if (this.props.setPage) {
              this.props.setPage(0);
            } else {
              this.props.activateClub().then(() => {
                browserHistory.push("/club");
              });
            }
          }}
        />
      </form>
    </div>);
  }
}
