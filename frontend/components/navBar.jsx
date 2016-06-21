import React from 'react';
import { Link, browserHistory } from 'react-router';
import UserActions from '../actions/userActions';
import UserStore from "../stores/userStore";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavBar';
        this.state = { currentUser: null, tab: 0 };
    }
    componentDidMount() {
        this.cuListener = UserStore.addListener(this.setCurrentUser);
        if (!this.state.currentUser){
            UserActions.fetchCurrentUser();
        }
    }

    componentWillUnmount() {
        if (this.cuListener) this.cuListener.remove();   
    }
    setTab(tabNum){
        this.setState({ tab: tabNum });
    }
    setCurrentUser = () => {
        var currentUser = UserStore.getCurrentUser();
        if (currentUser){
          this.setState({currentUser: currentUser, tab: 0});
        } else {
          if (this.state.currentUser) this.setState({currentUser: null});
          browserHistory.push("/");
        }
    }
    rightNav() {
        if (this.state.currentUser){
            return  <ul><li>Welcome, { this.state.currentUser.username }</li>
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
        UserActions.logOut();
    }

    render() {
        return <div className="nav-bar">
            <div>
            	<div className="logo links" href="/">Match.Point</div>
                { this.rightNav() }
            </div>
        </div>;
    }
}

