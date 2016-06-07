import React from 'react';
import RoundRobinResultList from './rrSession/roundrobinResultList';
import { Link, browserHistory } from "react-router";
class Club extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
        <nav className="club-nav">
          <ul>
            <li><Link to="/club/newRRSession" activeClassName="active">New Session</Link></li>
            <li><Link to="/club/rrResults" activeClassName="active">Old Sessions</Link></li>
          </ul>
        </nav>
        { this.props.children }
        </div>;
    }
}

export default Club;
