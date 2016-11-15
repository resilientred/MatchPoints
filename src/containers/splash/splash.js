import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "redux/modules/splash";
import { LogInForm, SignUpForm, ForgotForm, ResetForm } from "components";
import { asyncConnect } from "redux-async-connect";

@asyncConnect([{
  promise: ({ store }) => {
    if (params.location.pathname === "/reset") {
      return Promise.resolve(store.dispatch(setTab(4)));
    }
  }
}])
@connect(({ splash: { page } }) => ({ page }), { setPage })
class Splash extends Component {
  render() {
    const content = (() => {
      switch (this.props.page) {
        case 1:
          return <LogInForm setPage={this.props.setPage} />;
        case 2:
          return <SignUpForm setPage={this.props.setPage} />;
        case 3:
          return <ForgotForm />;
        case 4:
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
