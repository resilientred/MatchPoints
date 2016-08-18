import React, { Component } from "react"
import ClubQueryStore from "../../stores/clubQueryStore"
import { fetchClubRoundrobins } from "../../actions/clientActions"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import moment from "moment"
import ClubResultDetails from "./clubResultDetails"

export default class ClubQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClub: null, //so this should contain the information
      roundrobins: null,
      selectedDate: null
    }
  }
  componentWillMount() {
    this.listenerOne = ClubQueryStore.addListener(this._fetchedClubRoundrobins);
  }
  _fetchedClubRoundrobins = () => {
    this.setState({ roundrobins: ClubQueryStore.find(this.state.currentClub._id)})
  }
  componentWillUnmount(){
    this.listenerOne.remove();
  }
  setDate = (e, i, selectedDate) => {
    this.setState({ selectedDate: ClubQueryStore.findRoundrobin(this.state.currentClub._id, selectedDate) })
  }
  _checkIfCachedClub(id) {
    let roundrobins = ClubQueryStore.find(id);
    if (roundrobins){
      this.setState({ roundrobins });
    } else {
      fetchClubRoundrobins(id);
    }

  }

  changeClub = (e, idx, currentClubId) => {
    let currentClub = this.props.clubs.find(club => club._id === currentClubId);
    this.setState({ currentClub })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentClub && ((this.state.currentClub && !prevState.currentClub) ||
      (this.state.currentClub._id !== prevState.currentClub._id))){
      this._checkIfCachedClub(this.state.currentClub._id);
    }
  }

  clubInfo = () => {
    let currentClub = this.state.currentClub;
    if (currentClub){
      return <div className="club-info-container">
        <h1>Club: { currentClub.clubName }</h1>
        <div>Location: { currentClub.location.city + ", " + currentClub.location.state}</div>
      </div>
    }
  }
  render() {
    let clubs = this.props.clubs;
    if (!clubs) return <div className="club-info-container">Select a club..</div>;
    
    return (<div className="club-result-container">
      <div className="name-select-div">
      <SelectField 
            value={this.state.currentClub ? this.state.currentClub._id : null} 
            onChange={this.changeClub}
            floatingLabelText="Select a Club"
            floatingLabelFixed={true}> 
            { 
              clubs.map( (club, i) => (
                <MenuItem key={i} value={club._id} primaryText={club.clubName} />
              )) 
            }
      </SelectField>
       <SelectField
        value={this.state.selectedDate ? this.state.selectedDate._id : null}
        onChange={this.setDate}
        floatingLabelText="Select a Date"
        floatingLabelFixed={true}>
        {
          this.state.roundrobins ?
            this.state.roundrobins.map( (roundrobin, i) => (
              <MenuItem key={i} value={roundrobin._id} primaryText={moment(roundrobin.date).format("MMMM DD, YYYY")} />
           )) :
          <MenuItem key="empty" value={null} primaryText="No dates available" />
        }
      </SelectField>
      </div>
      { this.clubInfo() }
      <ClubResultDetails {...this.state.selectedDate}/>
      </div>
      )
  }
}