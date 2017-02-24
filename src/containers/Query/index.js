import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { fetchAllClubs, hasLoaded } from 'redux/modules/query';
import { asyncConnect } from 'redux-async-connect';
import ClubQuery from './ClubQuery';

import './styles.scss';

@asyncConnect([{
  promise: ({ store }) => {
    let promise;

    if (!hasLoaded(store.getState())) {
      promise = store.dispatch(fetchAllClubs());
    }

    return promise;
  },
}])
export default class Query extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tab: 0,
    };
  }

  handleTabChange = (tab) => {
    this.setState({ tab });
  }

  render() {
    return (<div className="result-query-container">
      <Tabs
        value={this.state.tab}
        onChange={this.handleTabChange}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        tabItemContainerStyle={{ backgroundColor: 'white' }}
        contentContainerStyle={{
          padding: '20px',
          height: '100%',
        }}
      >
        <Tab label="Club" value={0} className="tab-menu-tab">
          <ClubQuery />
        </Tab>
      </Tabs>
    </div>);
  }
}
