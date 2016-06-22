import React from 'react';
import RoundRobinSessionsList from './rrSession/roundrobinSessionsList';
import { Link, browserHistory } from "react-router";
class Club extends React.Component {
    constructor(props) {
        super(props);
    }
    
    content(){
        if (/^\/club$/.test(this.props.location.pathname)){
         return <ul className="select-action">
            <li><Link to="/club/newRRSession" activeClassName="active">New Session</Link></li>
            <li><Link to="/club/sessions" activeClassName="active">Session Records</Link></li>
          </ul>;
        } else {
            return <RoundRobinSessionsList />;
        }
    }
    render() {
        
        return <div>
            { this.content() }
        </div>;
    }
}

export default Club;
