import React from 'react';
import UserForm from '../mixins/userForm';
import UserStore from '../stores/userStore';
import UserActions from '../actions/userActions';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	organization: "",
        	username: "",
        	password: ""
        }
    }
    componentDidMount = () => {
    
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
SignUp = UserForm(SignUp, UserStore, UserActions);
export default SignUp;
