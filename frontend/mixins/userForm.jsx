import React from 'react';

export default function userForms(Component, store, action) {
	const userFormMixins = React.createClass({
		componentDidMount(){
			action.fetchCSRF();
			this.csrfListener = store.addListener(this._fetchedCSRF);
		},
		_fetchedCSRF(){
			
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
    	return <Component {...this.props} {...this.state} />;
    }
	});

	return userFormMixins;
}