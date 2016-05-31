import React from 'react';
import { Link } from 'react-router';
import UserActions from '../actions/userActions';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavBar';
    }

    rightNav() {
        if (this.props.currentUser){
            return  <ul><li>Welcome, { this.props.currentUser.username }</li>
                <li><button onClick={this.logOut}>Log Out</button></li></ul>;
        } else {
            return  <ul><li><Link to="/login" activeClassName="active">Log In</Link></li>
                <li><Link to="/signup" activeClassName="active">Sign Up</Link></li></ul>;
        }
    }

    logOut() {
        UserActions.logOut();
    }

    render() {
        return <div className="nav-bar">
        	<div className="logo">MatchPoint</div>
            { this.rightNav() }
        </div>;
    }
}

