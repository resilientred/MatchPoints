import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "redux/modules/splash";
import { LogInForm, SignUpForm, ResetForm } from "components";

@connect(({ splash: { page } }) => ({ page }), { setPage })
class Splash extends Component {
  render() {
    const content = (() => {
      switch (this.props.page) {
        case 1:
          return <LogInForm />;
        case 2:
          return <SignUpForm />;
        case 3:
          return <ResetForm />;
        default:
          return (<div className="banner-text">
            <p>One-stop shop for Round Robin Tournament Management..</p>
            <button onClick={() => this.props.setPage(1)}>Log In</button>
            <button onClick={() => this.props.setPage(2)}>Sign Up</button>
          </div>);
      }
    })();

    return (<div>
      <div className="banner-container">
        <div className="banner" />
        { content }
      </div>
    </div>);
  }
}

export default Splash;
