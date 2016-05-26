import React from 'react';
import { Link } from 'react-router';
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavBar';
    }
    render() {
        return <div className="nav-bar">
        	<div className="logo">MatchPoint</div>
        	<ul>
        		<li><Link to="/login" activeClassName="active">Log In</Link></li>
        		<li><Link to="/signup" activeClassName="active">Sign Up</Link></li>
        	</ul>
        </div>;
    }
}

