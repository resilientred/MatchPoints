import React from 'react';
import { Link } from 'react-router';
import { logOut } from '../actions/clubActions';

const NavBar = (props) => {
    let content;
    if (props.club){
      content = (<ul>
                  <li><Link to="/club/newSession" activeClassName="active">New Session</Link></li>
                  <li><Link to="/club/sessions" activeClassName="active">Old Sessions</Link></li>
                  <li>Browse Results</li>
                  <li className="links" onClick={logOut}>Log Out</li>
              </ul>)
    } else {
      content = (<ul>
                <li className="links">Browse Results</li>
                <li className="links">Log In</li>
            </ul>)
    }
    return <div className="nav-bar">
        <div>
        	<div className="logo links" href="/">Match.Point</div>
          { content }
        </div>
    </div>;
}

export default NavBar;
