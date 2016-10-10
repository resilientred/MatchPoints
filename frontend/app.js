import React, { Component, PropTypes } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navBar";

class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
  constructor(props, context) {
    super(props, context);
    this.state = { loading: false };
  }

  openLogin() {
    this.context.router.push({
      pathname: "/", state: { login: true }
    });
  }

  render() {
    return (<MuiThemeProvider>
      <div>
        <NavBar openLogin={() => this.openLogin} />
        { this.props.children }
      </div>
    </MuiThemeProvider>);
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default App;
