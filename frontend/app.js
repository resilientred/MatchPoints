import React, { Component } from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from "./components/navBar"


class App extends Component { 
  constructor(props, context){
    super(props, context);
    this.state = { loading: false };
  }

  openLogin() {
    this.context.router.push({pathname: "/", state: {login: true}});
  }

  render(){
    return (
      <MuiThemeProvider>
      <div>
        <NavBar openLogin={this.openLogin.bind(this)}/>
        { this.props.children }
      </div>
      </MuiThemeProvider>
    )
  }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default App