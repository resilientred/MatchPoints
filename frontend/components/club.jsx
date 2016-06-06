import React from 'react';
import Roundrobin from '../roundrobin';

class Club extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Club';
    }
    render() {
        return <div>
        <nav>
          <ul>
            <li Link to="/club/newRRSession" activeClassName="active">New Session</li>
            <li Link to="/club/rrResults" activeClassName="active">Old Sessions</li>
          </ul>
        </nav>
        { this.props.children }
        </div>;
    }
}

export default Club;
