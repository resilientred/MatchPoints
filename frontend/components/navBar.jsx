import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ClubActions from '../actions/clubActions';
import ClubStore from "../stores/clubStore";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { currentClub: null, tab: 0 };
    }
    componentDidMount() {
        this.cuListener = ClubStore.addListener(this.setCurrentClub);
        if (!this.state.currentClub){
            ClubActions.fetchCurrentClub();
        }
    }

    componentWillUnmount() {
        if (this.cuListener) this.cuListener.remove();   
    }
    setTab(tabNum){
        this.setState({ tab: tabNum });
    }
    setCurrentClub = () => {
        var currentClub = ClubStore.getCurrentClub();
        if (currentClub){
          this.setState({ currentClub, tab: 0 });
        } else {
          if (this.state.currentClub) this.setState({currentClub: null});
          browserHistory.push("/");
        }
    }
    rightNav() {
        if (this.state.currentClub){
            return  <ul><li>Welcome, { this.state.currentClub.username }</li>
                <li className="links" onClick={this.logOut}>Log Out</li></ul>;
        } else {
            return <ul>
                    <li>
                        <Link to="/login" className={
                            this.state.tab === 1 ? "links active-tab" : "links"}
                            onClick={this.setTab.bind(this, 1)}>
                                Log In
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className={"links" + 
                            this.state.tab === 2 ? "links active-tab" : "links"}
                            onClick={this.setTab.bind(this, 2)}>
                            Sign Up
                        </Link>
                    </li>
                </ul>;
        }
    }

    logOut() {
        ClubActions.logOut();
    }

    render() {
        return <div className="nav-bar">
            <div>
            	<div className="logo links" href="/">Match.Point</div>
                <ul><li><Link to="/club" className={ this.state.tab === 3 ? 
                            "links active-tab" : "links"}
                            onClick={this.setTab.bind(this, 3)}>Club</Link></li></ul>
                { this.rightNav() }
            </div>
        </div>;
    }
}

