import React, { Component, Children, cloneElement } from 'react'
import RoundRobinSessions from './record/roundrobinSessions'
import { Link, browserHistory } from "react-router"
import NavBar from "./navBar"
import { fetchCurrentClub } from '../actions/clubActions'
import ClubStore from "../stores/clubStore"
import CircularProgress from "material-ui/CircularProgress"
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
    componentWillUnmount() {
        if (this.cuListener) this.cuListener.remove();
    }
    render() {
        if (!this.state.club) {
            return <div className="overlay"><div className="loading">
                <CircularProgress size={2} />
                </div></div>
        }
        return <div className="app">
            <div className="club-body">
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
