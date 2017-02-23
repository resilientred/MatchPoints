import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment';
import { setClub, setDate, fetchRoundrobins } from 'redux/modules/query';
import { ClubQueryDetail } from 'components';

@connect(({ query }) => ({ ...query }), { setClub, setDate, fetchRoundrobins })
export default class ClubQuery extends Component {
  changeDate = (e, i, date) => {
    if (date) {
      this.props.setDate(date);
    }
  }

  changeClub = (e, idx, clubId) => {
    this.props.setClub(clubId);
    if (clubId && !this.props.roundrobins[clubId]) {
      this.props.fetchRoundrobins(clubId);
    }
  }
  render() {
    const { clubs, selectedClub, selectedDate, roundrobins } = this.props;
    const selected = selectedClub && selectedClub._id;
    const resultsAvailable = selectedClub &&
      roundrobins[selectedClub._id] && roundrobins[selectedClub._id].length > 0;
    // eslint-disable-next-line no-nested-ternary
    const dateLabelText = selected ?
      (resultsAvailable ? 'Select a Date' : 'No results found') : 'Select a club first';

    return (<div className="club-result-container">
      <div className="name-select-div">
        <SelectField
          value={selectedClub && selectedClub._id}
          onChange={this.changeClub}
          floatingLabelText="Select a Club"
          floatingLabelFixed={Boolean(false)}
        >
          {
            Object.keys(clubs).length > 0 && Object.keys(clubs).map((id, i) => (
              <MenuItem key={i} value={id} primaryText={clubs[id].clubName} />
            ))
          }
        </SelectField>
        <SelectField
          value={selectedDate && selectedDate._id}
          onChange={this.changeDate}
          floatingLabelText={dateLabelText}
          floatingLabelFixed={Boolean(false)}
        >
          {
            selected && resultsAvailable ? roundrobins[selectedClub._id].map((roundrobin, i) => (
              <MenuItem
                key={i}
                value={roundrobin._id}
                primaryText={moment(roundrobin.date).utc().format('MMMM DD, YYYY')}
              />
            )) : <MenuItem
              value="nothing"
            />
          }
        </SelectField>
      </div>
      {
        selectedClub && (<div className="club-info-container">
          <h1>Club: { selectedClub.clubName }</h1>
          <div>Location: { `${selectedClub.location.city}, ${selectedClub.location.state}`}</div>
        </div>)
      }
      <ClubQueryDetail
        {...selectedDate}
        clubSelected={selected}
        resultsAvailable={resultsAvailable}
      />
    </div>);
  }
}
