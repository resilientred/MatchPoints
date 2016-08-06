import React, { Component } from "react"
import Modal from "react-modal"

export default class App extends Component {
  componentWillMount() {
    var el = document.getElementById("root");
    Modal.setAppElement(el);    
  }

  render() {
    return (<div>
      { this.props.children }
    </div>);
  }
}