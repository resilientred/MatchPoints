import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "redux/modules/splash";
import { setToken } from "redux/modules/reset";
import { LogInForm, SignUpForm, ForgotForm, ResetForm, Activated } from "components";
import { asyncConnect } from "redux-async-connect";

@asyncConnect([{
  promise: ({ store, location }) => {
    if (location.pathname === "/reset") {
      return Promise.all([store.dispatch(setPage(4)), store.dispatch(setToken(location.query.token))]);
    } else if (location.pathname === "/activate/success") {
      return Promise.resolve(store.dispatch(setPage(5)));
    } else if (location.pathname === "/activate/error") {
      return Promise.resolve(store.dispatch(setPage(6)));
    }
    return null;
  }
}])
@connect(({ splash: { page } }) => ({ page }), { setPage })
class Splash extends Component {
  componentWillUnmount() {
    this.props.setPage(0);
  }
  render() {
    const content = (() => {
      switch (this.props.page) {
        case 1:
          return <LogInForm setPage={this.props.setPage} />;
        case 2:
          return <SignUpForm setPage={this.props.setPage} />;
        case 3:
          return <ForgotForm setPage={this.props.setPage} />;
        case 4:
          return <ResetForm setPage={this.props.setPage} />;
        case 5:
          return (<Activated
            message="Your account has been activated successfully."
          />);
        case 6:
          return (<Activated
            setPage={this.props.setPage}
            message="The token has expired or your account has already been activated."
          />);
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
