import React, { Component } from "react"
import Modal from "react-modal"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  componentWillMount() {
    var el = document.getElementById("root");
    Modal.setAppElement(el);    
  }

  render() {
    return (<MuiThemeProvider>
      <div>
      { this.props.children }
    </div>
    </MuiThemeProvider>);
  }
}