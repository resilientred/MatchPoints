import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EditSession, ViewSession } from 'containers';
import { asyncConnect } from 'redux-async-connect';
import { fetchSession, isLoaded, updateScore } from 'redux/modules/selectedSession';
import { deleteSession, postResult } from 'redux/modules/sessions';

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
  ({ selectedSession: { session, scoreChange, scoreUpdate } }) => {
    return ({ session, scoreChange, scoreUpdate });
  },
  { deleteSession, postResult, updateScore })
export default class RoundrobinSession extends Component {
  render() {
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
      scoreUpdate={this.props.scoreUpdate}
    />);
  }
}
