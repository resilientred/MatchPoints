import React, { Component } from "react";
import ClubStore from "../stores/clubStore";
import LogInForm from "./user/logIn";
import SignUpForm from "./user/signUp";
import ResetForm from "./user/signUp";

class Splash extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tab: 0
    };
  }

  componentDidMount() {
    if (ClubStore.getCurrentClub()) {
      this.context.router.push("/club");
    }
    this.checkLocation(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (ClubStore.getCurrentClub()) {
      this.context.router.push("/club");
    }
    this.checkLocation(nextProps);
  }
  setTab = (tab) => {
    this.setState({ tab });
  }
  checkLocation(props) {
    if (props.location.state && props.location.state.login) {
      this.setTab(1);
    }
  }
  render() {
    let content;
    (function mapContent(that) {
      switch (that.state.tab) {
        case 1:
          content = <LogInForm setTab={that.setTab} />;
          break;
        case 2:
          content = <SignUpForm setTab={that.setTab} />;
          break;
        case 3:
          content = <ResetForm setTab={that.setTab} />
        default:
          content = (<div className="banner-text">
            <p>One-stop shop for Round Robin Tournament Management..</p>
            <button onClick={() => that.setTab(1)}>Log In</button>
            <button onClick={() => that.setTab(2)}>Sign Up</button>
          </div>);
          break;
      }
    }(this));

    return (<div>
      <div className="banner-container">
        <div className="banner" />
        { content }
      </div>
    </div>);
  }
}

Splash.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Splash;
