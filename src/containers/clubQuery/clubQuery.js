import React, { Component } from "react";
import { connect } from "react-redux";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import moment from "moment";
import { setClub, setDate, fetchRoundrobins } from "redux/modules/query";
import { ClubQueryDetail } from "components";

@connect(({ query }) => ({ ...query }), { setClub, setDate, fetchRoundrobins })
export default class ClubQuery extends Component {
  changeDate = (e, i, date) => {
    if (date) {
      this.props.setDate(date);
    }
  }
  changeClub = (e, idx, clubId) => {
    this.props.setClub(clubId);
    if (!this.props.roundrobins[clubId]) {
      this.props.fetchRoundrobins(clubId);
    }
  }
  render() {
    const { clubs, selectedClub, selectedDate, roundrobins } = this.props;
    return (<div className="club-result-container">
      <div className="name-select-div">
        <SelectField
          value={selectedClub && selectedClub._id}
          onChange={this.changeClub}
          floatingLabelText="Select a Club"
          floatingLabelFixed={Boolean(true)}
        >
          {
            Object.keys(clubs).map((id, i) => (
              <MenuItem key={i} value={id} primaryText={clubs[id].clubName} />
            ))
          }
        </SelectField>
        <SelectField
          value={selectedDate && selectedDate._id}
          onChange={this.changeDate}
          floatingLabelText="Select a Date"
          floatingLabelFixed={Boolean(true)}
        >
          {
            selectedClub && roundrobins[selectedClub._id] ?
              roundrobins[selectedClub._id].map((roundrobin, i) => (
                <MenuItem key={i} value={roundrobin._id} primaryText={moment(roundrobin.date).format("MMMM DD, YYYY")} />
             )) :
              <MenuItem key="empty" value={null} primaryText="No dates available" />
          }
        </SelectField>
      </div>
      {
        selectedClub && (<div className="club-info-container">
          <h1>Club: { selectedClub.clubName }</h1>
          <div>Location: { `${selectedClub.location.city}, ${selectedClub.location.state}`}</div>
        </div>)
      }
      <ClubQueryDetail {...selectedDate} />
    </div>);
  }
}
