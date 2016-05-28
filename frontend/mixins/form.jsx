import React from 'react';

export default function userForms(Component, fields, store, action) {
	const userFormMixins = React.createClass({
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
			this.csrfListener.remove();
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

    render() {
    	return <Component {...this.props} {...this.state} 
    						_updateField={this._updateField} _handleSubmit={this._handleSubmit}/>;
    }
	});

	return userFormMixins;
}