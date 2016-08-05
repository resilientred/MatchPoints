import React, { Component } from "react"

export default class ClubQuery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      record: null,
      selectedDate: null
    }
  }

  componentWillMount() {
      
  }

  _checkIfCached(date) {
    //normal date query i.e. 
    //should not include everything
    //should be fetched here
  }

  shouldComponentUpdate(nextProps, nextState) {
    //return false if date are the same
    return true;
  }
  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    if (!this.state.record || !this.state.selectedDate){
      return <h1>Loading...</h1>;
    }

    return (
      <h1>Hello</h1>
      )
  }
}