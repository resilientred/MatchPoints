import React, { Component } from 'react'
import RoundRobinSessions from './record/roundrobinSessions'
import { Link, browserHistory } from "react-router"
import NavBar from "./navBar"
import { fetchCurrentClub } from '../actions/clubActions'
import ClubStore from "../stores/clubStore"

class Club extends Component {
    constructor(props) {
        super(props);
        this.state = {
            club: null
        }
    }
    componentWillMount() {
        this.cuListener = ClubStore.addListener(this.setCurrentClub);
        let club = ClubStore.getCurrentClub();
        if (club){
            this.setState({ club })
        } else {
            fetchCurrentClub();
        }
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
        if (!this.state.club) {
            return <h1>Loading...</h1>
        }
        return <div className="club-body">
            <NavBar { ...this.state } />
            { this.clubNav() }
            <div className="club-children">
                { this.props.children }
            </div>       
        </div>;
    }
}

export default Club;
