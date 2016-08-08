import React, { Component, Children, cloneElement } from 'react'
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
        this.cuListener = ClubStore.addListener(this._currentClubChange);
        let club = ClubStore.getCurrentClub();
        if (club){
            this.setState({ club })
        } else {
            fetchCurrentClub();
        }
    }

    _currentClubChange = () => {
       let club = ClubStore.getCurrentClub(); 
        if (club){
            this.setState({ club })
        } else {
            browserHistory.push("/");
        }
    }
    clubNav() {
        return <ul className="club-nav">
            <li><Link to="/club/newSession" activeClassName="active">New Session</Link></li>
            <li><Link to="/club/sessions" activeClassName="active">Session Records</Link></li>
        </ul>;
    }
    componentWillUnmount() {
        this.cuListener.remove();
    }
    render() {
        if (!this.state.club) {
            return <h1>Loading... </h1>
        }
        return <div className="app">
            <NavBar { ...this.state } />
            <div className="club-body">
                { this.clubNav() }
                <div className="club-children">
                    { Children.map(this.props.children, (child) => {
                        return cloneElement(child, { club: this.state.club });
                      }) 
                    }
                </div>       
            </div>
        </div>;
    }
}

export default Club;
