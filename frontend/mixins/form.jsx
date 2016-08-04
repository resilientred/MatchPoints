import React from 'react';
import { browserHistory } from "react-router";

export default function clubForms(Component, fields, store, action) {
  const clubFormMixins = React.createClass({
  getInitialState(){
    return Object.assign({}, fields);
  },
  _updateField(name, e) {
    let field = {[name]: e.target.value};
    this.setState(field);
  },
  _handleSubmit(callback, e) {
    e.preventDefault();
    callback(this.state);
  },
  render() {
    return <Component {...this.props} 
              _updateField={this._updateField} 
              _handleSubmit={this._handleSubmit}
              />;
  }
  });

  return clubFormMixins;
}