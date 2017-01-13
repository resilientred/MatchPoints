import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { fetchAllClubs, hasLoaded } from 'redux/modules/query';
import { asyncConnect } from 'redux-async-connect';
import ClubQuery from './ClubQuery';

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
    return (<div>
      <div className="result-query-container">
        <Tabs
          value={this.state.tab}
          onChange={this.handleTabChange}
          contentContainerStyle={{
            padding: '20px',
            border: '1px solid #E0E0E0',
          }}
        >
          <Tab label="Club" value={0}>
            <ClubQuery />
          </Tab>
        </Tabs>
      </div>
    </div>);
  }
}
