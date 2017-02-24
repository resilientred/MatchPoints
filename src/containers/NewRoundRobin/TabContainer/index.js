import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux';
import { openNewModal } from 'redux/modules/modals';
import { openUpload } from 'redux/modules/upload';
import { startTutorial } from 'redux/modules/tutorial';
import { setDate, registerPlayer, unregisterPlayer } from 'redux/modules/newSession';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Grouping from './Grouping';
import Participants from './Participants';

@connect(
  ({ newSession }) => ({
    date: newSession.date,
    allPlayers: newSession.allPlayers,
    addedPlayers: newSession.addedPlayers,
  }),
  ({ openNewModal, registerPlayer, unregisterPlayer, setDate, openUpload, startTutorial })
)
export default class TabContainer extends Component {
  state = {
    tab: 0,
  };

  componentDidMount() {
    this.props.startTutorial('registration');
  }

  toggleTab = (tab) => {
    if (tab.target) return;
    if (tab === 1) this.props.startTutorial('grouping');
    if (tab === 0) this.props.startTutorial('registration');
    this.setState({ tab });
  }

  render() {
    const today = new Date();
    const minDate = new Date(today.setYear(today.getFullYear() - 1));

    const sortedPlayers = this.props.addedPlayers.sort();

    const playerContent = (<div>
      <RaisedButton
        className="new-player-button"
        onClick={this.props.openNewModal}
        label="New Player"
        secondary={Boolean(true)}
        style={{
          position: 'absolute', right: 0,
        }}
      />
      <RaisedButton
        className="upload-player-button"
        onClick={this.props.openUpload}
        label="Upload Players"
        secondary={Boolean(true)}
        style={{
          position: 'absolute', right: '150px',
        }}
      />
      <div className="date" style={{ cursor: 'pointer' }}>
        <DatePicker
          className="session-date-picker"
          floatingLabelText="Date of Session"
          hintText="Date" value={this.props.date}
          onChange={(_, date) => this.props.setDate(date)}
          minDate={minDate}
        />
      </div>
      <Participants
        registerPlayer={this.props.registerPlayer}
        unregisterPlayer={this.props.unregisterPlayer}
        sortedPlayers={sortedPlayers}
        addedPlayers={this.props.addedPlayers}
        allPlayers={this.props.allPlayers}
      />
    </div>);

    return (<Tabs
      tabItemContainerStyle={{ backgroundColor: 'white' }}
      contentContainerStyle={{
        padding: '20px',
        minHeight: '400px',
        backgroundColor: 'white',
      }}
      value={this.state.tab}
      onChange={this.toggleTab}
    >
      <Tab label="Registration" value={0} className="registration-tab tab-menu-tab">
        {playerContent}
      </Tab>
      <Tab label="Grouping" value={1} className="grouping-tab tab-menu-tab">
        <Grouping sortedPlayers={sortedPlayers} addedPlayers={this.props.addedPlayers} />
      </Tab>
    </Tabs>);
  }
}
