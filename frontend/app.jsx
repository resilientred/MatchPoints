import React, { Component } from "react"
import Modal from "react-modal"
import NavBar from "./components/navBar"
export default class App extends Component {
  constructor(props){
    super(props);
    
  }
  componentWillMount() {
    var el = document.getElementById("root");
    Modal.setAppElement(el);    
  }

  render() {
    return (<div>
      <NavBar {...this.state} />
      { this.props.children }
    </div>);
  }
}