import React, { Component } from "react"
import { Link } from "react-router"
import LogInForm from "./user/logIn"
import SignUpForm from "./user/signUp"

class Splash extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tab: 0
    }
  }

  setTab = (tab) => {
    this.setState({ tab });
  }
  componentDidMount() {
    if (this.props.location.query.login){
      this.setState({ tab: 1 })
    }
  }
  render() {
    let content;
    (function(that){
      switch(that.state.tab){
        case 1:
          content = <LogInForm setTab={that.setTab} />;
          break;
        case 2:
          content = <SignUpForm setTab={that.setTab} />;
          break;
        default:
          content = <div className="banner-text">
            <p>One-stop shop for Round Robin Tournament Management..</p>
            <button onClick={ () => that.setTab(1) }>Log In</button>
            <button onClick={ () => that.setTab(2) }>Sign Up</button>
          </div>
          break;
      }
    })(this);

    return  (<div>
        <div className="banner-container">
          <div className="banner"></div>
          { content }
        </div>
    </div>)
  }

}

Splash.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Splash;