import React from 'react';
import { Link } from 'react-router';
import { logOut } from '../actions/clubActions';


const FaBars = require("react-icons/lib/fa/bars");
const NavBar = (props) => {
    let content, collapsedIcon;
    collapsedIcon = <div className="collapsed-icon">&#9776;</div>
    if (props.club){
      content = (<ul className="nav">
                  <li><Link to="/club/newSession" activeClassName="active">New Session</Link></li>
                  <li><Link to="/club/sessions" activeClassName="active">Old Sessions</Link></li>
                  <li>Browse Results</li>
                  <li className="links" onClick={logOut}><a>Log Out</a></li>
              </ul>)
    } else {
      content = (<ul className="nav">
                <li className="links">Browse Results</li>
                <li className="links">Log In</li>
            </ul>)
    }


    return <div className="nav-bar">
        <div>
        	<div className="logo links" href="/">Match.Point</div>
          { collapsedIcon }
          { content }
        </div>
    </div>;
}

export default NavBar;
