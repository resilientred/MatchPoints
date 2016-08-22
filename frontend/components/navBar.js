import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { logOut } from '../actions/clubActions'
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import ClubStore from "../stores/clubStore"

class NavBar extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      club: null,
      opened: false,
      tab: 0
    }
  }

  componentWillMount() {
    this.cuListener = ClubStore.addListener(this._currentClubChange);
    let club = ClubStore.getCurrentClub();
    if (club){
        this.setState({ club })
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
    this.setState({tab})
  } 
  _currentClubChange = () => {
   let club = ClubStore.getCurrentClub(); 
    if (club){
      this.setState({ club })
    } 
  }
  handleOpen = () => {
    this.setState({ opened: !this.state.opened })
  }
  handleLink(link, tab){
    this.setState({ tab })
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
                  <li><Link to="/club/newSession" className="activeLink">New Session</Link></li>
                  <li><Link to="/club/sessions" className="activeLink">Old Sessions</Link></li>
                  <li><Link to="/results" className="activeLink">Browse Results</Link></li>
                  <li onClick={logOut}><a className="activeLink" >Log Out</a></li>
              </ul>)
    } else {
      return (<ul className="nav">
                <li className="activeLink"><Link to="/results" className="activeLink">Browse Results</Link></li>
                <li className="activeLink" onClick={this.props.openLogin}>Log In</li>
            </ul>)
    }

  }
  render() {
    let collapsedIcon;
    collapsedIcon = <div className="collapsed-icon" onClick={this.handleOpen}>&#9776;</div>

    return <div className="nav-bar">
        <div>
        	<div className="logo"><Link to={this.state.club ? "/club" : "/"} className="activeLink">MatchPoints</Link></div>
          { collapsedIcon }
          { this.normalNav() }
          { this.slideNav() }
        </div>
    </div>;
  }
}

export default NavBar;
