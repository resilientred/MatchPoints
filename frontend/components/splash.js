import React, { Component } from "react"
import { Link } from "react-router"
import NavBar from "./navBar"
import LogInForm from "./user/logIn"
import SignUpForm from "./user/signUp"

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    }
  }

  setTab = (tab) => {
    this.setState({ tab });
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
          <NavBar club={null} />
          <div className="banner"></div>
          { content }
        </div>
    </div>)
  }

}