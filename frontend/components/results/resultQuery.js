import React, { Component } from 'react'
import { fetchAllClubs } from "../../actions/clientActions"
import AllClubsStore from "../../stores/allClubsStore"
import { browserHistory } from "react-router"

export default class ResultQuery extends Component {
  constructor(props){
    super(props);
    this.state = {
      clubs: null
    }
  }

  componentDidMount() {
    this.allCListener = AllClubsStore.addListener(this._fetchedAllClubs)
    this._checkIfCachedClubs();
  }
  _checkIfCachedClubs(){
    let clubs = AllClubsStore.all();
    if (clubs){
      this.setState({ clubs })
    } else {
      fetchAllClubs();
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    return true;
  }
  _fetchedAllClubs = () => {
    this.setState({ clubs: AllClubsStore.all() })
  }
  selectClub = (e) => {
    debugger;
    browserHistory.push(`/results/${e.target.value}`)
  }
  render() {
    return <div>
      <select value="" onChange={this.selectClub}>Select the a club
          <option value=""></option>;
          {
            this.state.clubs.map( (club, i) => {
              return <option key={club.id} value={club.id}>{club.clubName}</option>;
            })
          }
      </select>;      
      { this.props.children }
    </div>;
  }
}