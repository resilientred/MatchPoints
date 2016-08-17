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
  componentWillMount() {
    let tab;
    switch (this.props.curPage){
      case "/club/newSession":
        tab = 1;
        break;
      case "/club/sessions":
        tab = 2;
        break;
      case "/results":
        tab = 3;
        break;
      default:
        tab = 0;
        break;
    }
    this.setState({tab})
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
                          insetChildren={true}/>
            </Drawer>)
    }
  }
  normalNav() {
    if (this.props.club){
      return (<ul className="nav">
                  <li><Link to="/club/newSession" activeClassName="active">New Session</Link></li>
                  <li><Link to="/club/sessions" activeClassName="active">Old Sessions</Link></li>
                  <li><Link to="/results" activeClassName="active">Browse Results</Link></li>
                  <li className="links" onClick={logOut}><a>Log Out</a></li>
              </ul>)
    } else {
      return (<ul className="nav">
                <li className="links"><Link to="/results" activeClassName="active">Browse Results</Link></li>
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
