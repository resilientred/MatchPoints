import React from 'react';
import RoundRobinResultList from './rrSession/roundrobinResultList';
import { Link, browserHistory } from "react-router";
class Club extends React.Component {
    constructor(props) {
        super(props);
    }
    
    content (){
        if (/^\/club$/.test(this.props.location.pathname)){
         return <ul className="select-action">
            <li><Link to="/club/newRRSession" activeClassName="active">New Session</Link></li>
            <li><Link to="/club/rrResults" activeClassName="active">Old Sessions</Link></li>
          </ul>;
        } else {
            return this.props.children;
        }
    }
    render() {
        return <div>
            { this.content() }
        </div>;
    }
}

export default Club;
