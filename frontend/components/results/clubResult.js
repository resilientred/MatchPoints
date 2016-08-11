import React, { Component } from "react"

export default class ClubQuery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: null
      // record: null,
      // selectedDate: null
    }
  }

  componentWillMount() {
      this.qaListener = PlayerStore.addListener(this._fetchedPlayerRecord);
      this._checkIfCachedClub()
  }

  _checkIfCachedClub() {
    let players = PlayerStore.contain(this.props.params.clubId);
    if (players){
    }
  }

  _checkIfCached(date) {
    //normal date query i.e. 
    //should not include everything
    //should be fetched here
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    if (!this.state.club) return <h1>Loading...</h1>;
    if (!this.state.selectedDate){
      return <h1>Please select a date</h1>;
    }

    return (<div className="club-result-container">
      { this.props.children }
      </div>
      )
  }
}