import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { logOut, fetchCurrentClub } from "../actions/clubActions";
import ClubStore from "../stores/clubStore";

class NavBar extends Component {
  static propTypes = {
    openLogin: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      club: null,
      opened: false,
      tab: 0
    };
  }
  componentWillMount() {
    this.cuListener = ClubStore.addListener(this.currentClubChange);
    const club = ClubStore.getCurrentClub();
    if (!club) {
      if (location.pathname === "/results") {
        fetchCurrentClub();
      }
    }
    let tab = 0;
    const path = window.location.pathname;
    if (path === "/club/newSession") {
      tab = 1;
    } else if (/^\/club\/sessions.*/.test(path)) {
      tab = 2;
    } else if (path === "/results") {
      tab = 3;
    }

    this.setState({ tab, club });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.opened !== nextState.opened || this.state.tab !== nextState.tab) {
      return true;
    }
    if ((!this.state.club && nextState.club) || (!nextState.club && this.state.club)) {
      return true;
    }
    return false;
  }
  componentWillUnmount() {
    if (this.cuListener) this.cuListener.remove();
  }
  currentClubChange = () => {
    const club = ClubStore.getCurrentClub();
    this.setState({ club });
  }
  handleLogin = () => {
    this.setState({ opened: false, tab: 0 });
    this.props.openLogin();
  }
  handleLogout = () => {
    this.setState({ opened: false, tab: 0 });
    logOut();
  }
  handleClose = () => {
    this.setState({ opened: false });
  }
  handleOpen = () => {
    this.setState({ opened: true });
  }
  handleLink(link, tab) {
    this.setState({ tab, opened: false });
    browserHistory.push(link);
  }

  slideNav() {
    if (this.state.club) {
      return (<Drawer
        open={this.state.opened}
        openSecondary={Boolean(true)}
        docked={false}
        onRequestChange={(opened) => this.setState({ opened })}
        zDepth={5}
      >
        <MenuItem
          onTouchTap={() => this.handleLink("/club", 0)}
          primaryText="Home"
          insetChildren={Boolean(true)}
          checked={this.state.tab === 0}
        />
        <MenuItem
          onTouchTap={() => this.handleLink("/club/newSession", 1)}
          primaryText="New Session"
          insetChildren={Boolean(true)}
          checked={this.state.tab === 1}
        />
        <MenuItem
          onTouchTap={() => this.handleLink("/club/sessions", 2)}
          primaryText="Old Sessions"
          insetChildren={Boolean(true)}
          checked={this.state.tab === 2}
        />
        <MenuItem
          onTouchTap={() => this.handleLink("/results", 3)}
          primaryText="Browse Results"
          insetChildren={Boolean(true)}
          checked={this.state.tab === 3}
        />
        <MenuItem
          onTouchTap={this.handleLogout}
          primaryText="Log Out"
          insetChildren={Boolean(true)}
        />
      </Drawer>);
    }
    return (<Drawer
      open={this.state.opened}
      openSecondary={Boolean(true)}
      docked={false}
      onRequestChange={this.handleOpen}
    >
      <MenuItem
        onTouchTap={() => this.handleLink("/", 0)}
        primaryText="Home"
        checked={this.state.tab === 0}
        insetChildren={Boolean(true)}
      />
      <MenuItem
        onTouchTap={() => this.handleLink("/results", 3)}
        primaryText="Browse Results"
        insetChildren={Boolean(true)}
        checked={this.state.tab === 3}
      />
      {
        location.pathname === "/" ||
        <MenuItem
          primaryText="Log In"
          onTouchTap={this.handleLogin}
          insetChildren={Boolean(true)}
        />
      }
    </Drawer>);
  }
  normalNav() {
    if (this.state.club) {
      return (<ul className="nav">
        <li
          onClick={() => this.handleLink("/club/newSession", 1)}
          className={this.state.tab === 1 ? "active-links" : ""}
        >
          New Session
        </li>
        <li
          onClick={() => this.handleLink("/club/sessions", 2)}
          className={this.state.tab === 2 ? "active-links" : ""}
        >
          Old Sessions
        </li>
        <li
          onClick={() => this.handleLink("/results", 3)}
          className={this.state.tab === 3 ? "active-links" : ""}
        >
          Browse Results
        </li>
        <li onClick={this.handleLogout}>Log Out</li>
      </ul>);
    }
    return (<ul className="nav">
      <li onClick={() => this.handleLink("/results", 3)} className={this.state.tab === 3 ? "active-links" : ""}>Browse Results</li>
      {
        location.pathname === "/" ||
          <li className="nav-links" onClick={this.handleLogin}>Log In</li>
      }
    </ul>);
  }
  render() {
    const collapsedIcon = <div className="collapsed-icon" onClick={this.handleOpen}>&#9776;</div>;

    return (<div className="nav-bar">
      <div>
        <div className="logo" onClick={() => this.handleLink(this.state.club ? "/club" : "/", 0)}>MatchPoints</div>
        { collapsedIcon }
        { this.normalNav() }
        { this.slideNav() }
      </div>
    </div>);
  }
}

export default NavBar;
