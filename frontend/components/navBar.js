import React from 'react';
import { Link } from 'react-router';
import { logOut } from '../actions/clubActions';

const NavBar = (props) => {
    return <div className="nav-bar">
        <div>
        	<div className="logo links" href="/">Match.Point</div>
            <ul><li>Welcome, { props.club.username }</li>
                <li className="links" onClick={logOut}>Log Out</li>
            </ul>
        </div>
    </div>;
}

export default NavBar;
