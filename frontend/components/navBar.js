import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { logOut, fetchCurrentClub } from '../actions/clubActions'
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import ClubStore from "../stores/clubStore"
class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      club: null,
      opened: false,
      tab: 0
    }
  }
  componentWillUnmount() {
    if (this.cuListener) this.cuListener.remove();
  }
  componentWillMount() {
    this.cuListener = ClubStore.addListener(this._currentClubChange);
    let club = ClubStore.getCurrentClub();
    if (!club){
      if (location.pathname === "/results"){
        fetchCurrentClub();
      } 
    }
    let tab, path = window.location.pathname;
    if (path === "/club/newSession"){
      tab = 1;
    } else if (/^\/club\/sessions.*/.test(path)){
      tab = 2;
    } else if (path === "/results"){
      tab = 3;  
    } else {
      tab = 0;
    }
    
    this.setState({tab, club})   
  } 
  _currentClubChange = () => {
   let club = ClubStore.getCurrentClub(); 
   this.setState({ club })
  }
  handleLogin = () => {
    this.props.openLogin();
    // this.handleOpen();
  }
  handleOpen = () => {
    this.setState({ opened: !this.state.opened })
  }
  handleLink(link, tab){
    this.setState({ tab, opened: false })
    browserHistory.push(link);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.opened !== nextState.opened || this.state.tab !== nextState.tab){
      return true
    }
    if ((!this.state.club && nextState.club) || (!nextState.club && this.state.club)){
      return true;
    }
    return false;
  }
  slideNav() {
    if (this.state.club){
      return (<Drawer open={this.state.opened } 
                         openSecondary={true}
                         docked={false}
                         onRequestChange={this.handleOpen}
                         zDepth={5}
                         >    
                  <MenuItem onTouchTap={this.handleLink.bind(this, "/club", 0)} 
                            primaryText="Home" 
                            insetChildren={true}
                            checked={this.state.tab === 0} />
                  <MenuItem onTouchTap={this.handleLink.bind(this, "/club/newSession", 1)} 
                            primaryText="New Session" 
                            insetChildren={true}
                            checked={this.state.tab === 1}/>
                  <MenuItem onTouchTap={this.handleLink.bind(this, "/club/sessions", 2)} 
                            primaryText="Old Sessions" 
                            insetChildren={true}
                            checked={this.state.tab === 2}/>
                  <MenuItem onTouchTap={this.handleLink.bind(this, "/results", 3)} 
                            primaryText="Browse Results"
                            insetChildren={true}
                            checked={this.state.tab === 3}/>
                  <MenuItem onTouchTap={logOut} 
                            primaryText="Log Out"
                            insetChildren={true}/>
              </Drawer>)
    } else {
      return (<Drawer open={this.state.opened } 
                         openSecondary={true} 
                         docked={false}
                         onRequestChange={this.handleOpen}
                         >
                <MenuItem onTouchTap={this.handleLink.bind(this, "/", 0)} 
                          primaryText="Home" 
                          checked={this.state.tab === 0} 
                          insetChildren={true}/>
                <MenuItem onTouchTap={this.handleLink.bind(this, "/results", 3)} 
                          primaryText="Browse Results"
                          insetChildren={true}
                          checked={this.state.tab === 3}/>
                <MenuItem primaryText="Log In"
                          onTouchTap={this.props.openLogin}
                          insetChildren={true}/>
            </Drawer>)
    }
  }
  normalNav() {
    if (this.state.club){
      return (<ul className="nav">
                  <li onClick={this.handleLink.bind(this, "/club/newSession", 1)}
                      className={this.state.tab === 1 ? "active-links" : ""}>New Session</li>
                  <li onClick={this.handleLink.bind(this, "/club/sessions", 2)}
                      className={this.state.tab === 2 ? "active-links" : ""}>Old Sessions</li>
                  <li onClick={this.handleLink.bind(this, "/results", 3)}
                      className={this.state.tab === 3 ? "active-links" : ""}>Browse Results</li>
                  <li onClick={logOut}>Log Out</li>
              </ul>)
    } else {
      return (<ul className="nav">
                <li onClick={this.handleLink.bind(this, "/results", 3)} className={this.state.tab === 3 ? "active-links" : ""}>Browse Results</li>
                <li className="nav-links" onClick={this.handleLogin}>Log In</li>
            </ul>)
    }

  }
  render() {
    let collapsedIcon;
    collapsedIcon = <div className="collapsed-icon" onClick={this.handleOpen}>&#9776;</div>

    return <div className="nav-bar">
        <div>
        	<div className="logo" onClick={this.handleLink.bind(this, this.state.club ? "/club" : "/", 0)}>MatchPoints</div>
          { collapsedIcon }
          { this.normalNav() }
          { this.slideNav() }
        </div>
    </div>;
  }
}

export default NavBar;
