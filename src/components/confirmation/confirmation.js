import React, { Component } from "react";
import { connect } from "react-redux";
import { resendEmail } from "redux/modules/confirmation";
import { setError } from "redux/modules/main";

@connect(() => ({}), { resend, setError })
export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resent: false
    };
  }

  resend = () => {
    if (!resent) {
      this.props.resendEmail();
      this.setState({ resent: true });
      setTimeout(() => {
        this.setSTate({ resent: false });
      }, 30000)
    } else {
      this.props.setError("Please wait 30 seconds before retrying");
    }
  }
  render() {
    return (
      <div className="confirmation-sent">
        <p>We've sent you a confirmation email with a link to actviate your account.</p>
        <p>Did not receive the email?<a onClick={this.resend}>Resend</a></p>
      </div>
    );
  }
}
