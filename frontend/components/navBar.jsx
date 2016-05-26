import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavBar';
    }
    render() {
        return <div className="nav-bar">
        	<div className="logo">MatchPoint</div>
        	<ul>
        		<li>Log In</li>
        		<li>Sign Up</li>
        	</ul>
        </div>;
    }
}

