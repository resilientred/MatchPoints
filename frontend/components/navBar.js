import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { logOut } from '../actions/clubActions'
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      opened: false,
      tab: 0
    }
  }
  handleOpen = () => {
    this.setState({ opened: !this.state.opened })
  }
  handleLink(link){
    browserHistory.push(link);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.opened !== nextState.opened){
      return true
    }
    if ((!this.props.club && nextProps.club) || (!nextProps.club && this.props.club)){
      return true;
    }
    return false;
  }
  slideNav() {
    if (this.props.club){
      return (<Drawer open={this.state.opened } 
                         openSecondary={true}
                         docked={false}
                         onRequestChange={this.handleOpen}
                         zDepth={5}
                         >    
                  <MenuItem onTouchTap={this.handleLink.bind(this, "/club")} primaryText="Home" focusState="focused" />
                  <MenuItem onTouchTap={this.handleLink.bind(this, "/club/newSession")} primaryText="New Session" />
                  <MenuItem onTouchTap={this.handleLink.bind(this, "/club/sessions")} primaryText="Old Sessions" />
                  <MenuItem primaryText="Browse Results"/>
                  <MenuItem onTouchTap={logOut} primaryText="Log Out"/>
              </Drawer>)
    } else {
      return (<Drawer open={this.state.opened } 
                         openSecondary={true} 
                         docked={false}
                         onRequestChange={this.handleOpen}
                         >
                <MenuItem primaryText="Browse Results"/>
                <MenuItem primaryText="Log In"/>
            </Drawer>)
    }
  }
  normalNav() {
    if (this.props.club){
      return (<ul className="nav">
                  <li><Link to="/club/newSession" activeClassName="active">New Session</Link></li>
                  <li><Link to="/club/sessions" activeClassName="active">Old Sessions</Link></li>
                  <li>Browse Results</li>
                  <li className="links" onClick={logOut}><a>Log Out</a></li>
              </ul>)
    } else {
      return (<ul className="nav">
                <li className="links">Browse Results</li>
                <li className="links">Log In</li>
            </ul>)
    }

  }
  render() {
    let collapsedIcon;
    collapsedIcon = <div className="collapsed-icon" onClick={this.handleOpen}>&#9776;</div>

    return <div className="nav-bar">
        <div>
        	<div className="logo links" href="/">Match.Point</div>
          { collapsedIcon }
          { this.normalNav() }
          { this.slideNav() }
        </div>
    </div>;
  }
}

export default NavBar;
