import React from 'react';
import RoundRobinSessions from './rrSession/roundrobinSessions';
import { Link, browserHistory } from "react-router";
class Club extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node
            ])
    }

    clubNav() {
        return <ul className="club-nav">
            <li><Link to="/club/newSession" activeClassName="active">New Session</Link></li>
            <li><Link to="/club/sessions" activeClassName="active">Session Records</Link></li>
        </ul>;
    }
    render() {
        
        return <div className="club-body">
            { this.clubNav() }
            <div className="club-children">
                { this.props.children }
            </div>       
        </div>;
    }
}

export default Club;
