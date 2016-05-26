import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SignUp';
        this.state = {
        	organization: "",
        	username: "",
        	password: ""
        }
    }
    _handleSubmit = (e) => {
    	e.preventDefault()
    } 
    _updateField = (name, e) => {
    	let field = {};
    	field[name] = e.target.value;
    	this.setState(field);
    }
    render() {
        return <div>
        	<form>
        		<label for="organization">Organization</label>
        		<input type="text" id="organization"/>
        		<label for="username">Username</label>
        		<input type="text" id="username"/>
        		<label for="password">Password</label>
        		<input type="password" id="password"/>
        	</form>
        </div>;
    }
}

export default SignUp;
