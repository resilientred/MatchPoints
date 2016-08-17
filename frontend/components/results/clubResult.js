import React, { Component } from "react"
import ClubQueryStore from "../../stores/clubQueryStore"
import { fetchClubDetail } from "../../actions/clientActions"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"

export default class ClubQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClub: null,
      currentClubId: null
    }
  }

  componentWillMount() {
    this.listenerOne = ClubQueryStore.addListener(this._fetchedClubDetail);
  }
  _fetchedClubDetail = () => {
    this.setState({ club: ClubQueryStore.find(this.currentClubId)})
  }
  componentWillUnmount(){
    this.listenerOne.remove();
  }
  _checkIfCachedClub(id) {
    let club = ClubQueryStore.find(id);
    if (club){
      this.setState({ currentClub: club });
    } else {
      fetchClubDetail(id);
    }

  }
  // I don't think I change the props
  // componentWillReceiveProps(nextProps) {
  //   this._checkIfCachedClub(nextProps.club);
  // }
  changeClub = (e, idx, currentClubId) => {
    this._checkIfCachedClub(currentClubId);
    this.setState({ currentClubId })
  }

  render() {

    let clubs = this.props.clubs;
    if (!clubs) return <h1>Loading...</h1>;
    
    debugger;
    return (<div className="club-result-container">
      <h1>HEllo</h1>
      <SelectField 
            value={this.state.currentClubId} 
            onChange={this.changeClub}
            floatingLabelText="Select a Club"
            floatingLabelFixed={true}> 

            { 
              clubs.map( (club, i) => (
                <MenuItem key={i} value={club._id} primaryText={club.clubName} />
              )) 
            }
      </SelectField>
      </div>
      )
  }
}