import React, { Component, PropTypes } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import moment from "moment";
import ClubQueryStore from "../../stores/clubQueryStore";
import { fetchClubRoundrobins } from "../../actions/clientActions";
import ClubResultDetails from "./clubResultDetails";

export default class ClubQuery extends Component {
  static propTypes = {
    clubs: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      currentClub: null,
      roundrobins: null,
      selectedDate: null
    };
  }
  componentWillMount() {
    this.listenerOne = ClubQueryStore.addListener(this.fetchedClubRoundrobins);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentClub &&
      ((this.state.currentClub && !prevState.currentClub) ||
      (this.state.currentClub._id !== prevState.currentClub._id))) {
      this.checkIfCachedClub(this.state.currentClub._id);
    }
  }
  componentWillUnmount() {
    this.listenerOne.remove();
  }
  setDate = (e, i, selectedDate) => {
    this.setState({
      selectedDate: ClubQueryStore.findRoundrobin(this.state.currentClub._id, selectedDate)
    });
  }
  fetchedClubRoundrobins = () => {
    this.setState({
      roundrobins: ClubQueryStore.find(this.state.currentClub._id)
    });
  }
  checkIfCachedClub(id) {
    const roundrobins = ClubQueryStore.find(id);
    if (roundrobins) {
      this.setState({ roundrobins });
    } else {
      fetchClubRoundrobins(id);
    }
  }

  changeClub = (e, idx, currentClubId) => {
    const currentClub = this.props.clubs.find(club => club._id === currentClubId);
    this.setState({ currentClub });
  }

  clubInfo = () => {
    const currentClub = this.state.currentClub;
    if (currentClub) {
      return (<div className="club-info-container">
        <h1>Club: { currentClub.clubName }</h1>
        <div>Location: { `${currentClub.location.city}, ${currentClub.location.state}`}</div>
      </div>);
    }
    return null;
  }
  render() {
    const clubs = this.props.clubs;
    if (!clubs) return <div className="club-info-container">Select a club..</div>;

    return (<div className="club-result-container">
      <div className="name-select-div">
        <SelectField
          value={this.state.currentClub ? this.state.currentClub._id : null}
          onChange={this.changeClub}
          floatingLabelText="Select a Club"
          floatingLabelFixed={Boolean(true)}
        >
          {
            clubs.map((club, i) => (
              <MenuItem key={i} value={club._id} primaryText={club.clubName} />
            ))
          }
        </SelectField>
        <SelectField
          value={this.state.selectedDate ? this.state.selectedDate._id : null}
          onChange={this.setDate}
          floatingLabelText="Select a Date"
          floatingLabelFixed={Boolean(true)}
        >
          {
            this.state.roundrobins ?
              this.state.roundrobins.map((roundrobin, i) => (
                <MenuItem key={i} value={roundrobin._id} primaryText={moment(roundrobin.date).format("MMMM DD, YYYY")} />
             )) :
              <MenuItem key="empty" value={null} primaryText="No dates available" />
          }
        </SelectField>
      </div>
      { this.clubInfo() }
      <ClubResultDetails {...this.state.selectedDate} />
    </div>);
  }
}
