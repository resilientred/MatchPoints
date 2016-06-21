import React from 'react';
import { browserHistory } from "react-router";

export default function clubForms(Component, fields, store, action) {
  const clubFormMixins = React.createClass({
  getInitialState(){
    return Object.assign({}, fields);
  },
  componentDidMount(){
    this.csrfListener = store.addListener(this._fetchedCSRF);
    action.fetchCSRF();
  },
  _fetchedCSRF(){
    this.setState({ _csrf: store.getCSRF() });
  },
  componentWillUnmount() {
    if (this.csrfListener) this.csrfListener.remove();
  },
  _updateField(name, e) {
    let field = {};
    field[name] = e.target.value;
    this.setState(field);
  },
  _handleSubmit(callback, e) {
    e.preventDefault();
    callback(this.state);
  },
  csrf() {
    if (this.state.csrf){
      return <input type="hidden" name="_csrf" value={this.state.csrf} />;
    } else {
      return "";
    }
  },
  render() {
    return <Component {...this.props} {...this.state} 
              _updateField={this._updateField} _handleSubmit={this._handleSubmit}
              _csrf={this.csrf}/>;
  }
  });

  return clubFormMixins;
}