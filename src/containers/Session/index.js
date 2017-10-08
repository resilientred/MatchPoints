import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { fetchSession, isLoaded, updateScore, updateResult } from 'redux/modules/selectedSession';
import { deleteSession, postResult } from 'redux/modules/sessions';
import EditSession from './EditSession';
import ViewSession from './ViewSession';

@asyncConnect([{
  promise: ({ store, params }) => {
    let promise;
    if (!isLoaded(store.getState(), params.id)) {
      promise = store.dispatch(fetchSession(params.id));
    }

    return promise;
  },
}])
@connect(
  ({ selectedSession: { session, scoreChange, scoreUpdate, results } }) => {
    return ({ session, scoreChange, scoreUpdate, results });
  },
  { deleteSession, postResult, updateScore, updateResult })
export default class RoundrobinSession extends Component {
  render() {
    if (!this.props.session) {
      return null;
    }
    if (this.props.session.finalized) {
      return (<ViewSession
        session={this.props.session}
        scoreChange={this.props.scoreChange}
      />);
    }

    return (<EditSession
      id={this.props.params.id}
      session={this.props.session}
      scoreChange={this.props.scoreChange}
      deleteSession={this.props.deleteSession}
      updateScore={this.props.updateScore}
      postResult={this.props.postResult}
      updateResult={this.props.updateResult}
      scoreUpdate={this.props.scoreUpdate}
      results={this.props.results}
    />);
  }
}
