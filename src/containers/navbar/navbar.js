import React, { Component } from "react";
import { browserHistory } from "react-router";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import { openLogin } from "redux/modules/splash";
import { logIn, logOut } from "redux/modules/auth";
import { open, setTab, preSetTab } from "redux/modules/navbar";

@connect(
  ({ auth: { club }, navbar }) => ({ club, navbar }),
  { openLogin, logIn, logOut, open, setTab, preSetTab }
)
export default class Navbar extends Component {
  componentWillMount() {
    this.props.preSetTab(window.location.pathname);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.navbar.opened !== nextProps.navbar.opened ||
      this.props.navbar.tab !== nextProps.navbar.tab) {
      return true;
    }
    if ((!this.props.club._id && nextProps.club._id) ||
      (!nextProps.club._id && this.props.club._id)) {
      return true;
    }
    return false;
  }

  handleLogout = () => {
    this.props.logOut().then(() => {
      browserHistory.push("/");
    });
  }
  handleLink(link, tab) {
    this.props.setTab(tab);
    browserHistory.push(link);
  }

  slideNav() {
    const { tab, opened } = this.props.navbar;

    if (this.props.club._id) {
      return (<Drawer
        open={this.props.opened}
        openSecondary={Boolean(true)}
        docked={false}
        onRequestChange={this.props.open}
        zDepth={5}
      >
        <MenuItem
          onTouchTap={() => this.handleLink("/club", 0)}
          primaryText="Home"
          insetChildren={Boolean(true)}
          checked={tab === 0}
        />
        <MenuItem
          onTouchTap={() => this.handleLink("/club/sessions/new", 1)}
          primaryText="New Session"
          insetChildren={Boolean(true)}
          checked={tab === 1}
        />
        <MenuItem
          onTouchTap={() => this.handleLink("/club/sessions", 2)}
          primaryText="Old Sessions"
          insetChildren={Boolean(true)}
          checked={tab === 2}
        />
        <MenuItem
          onTouchTap={() => this.handleLink("/results", 3)}
          primaryText="Browse Results"
          insetChildren={Boolean(true)}
          checked={tab === 3}
        />
        <MenuItem
          onTouchTap={this.handleLogout}
          primaryText="Log Out"
          insetChildren={Boolean(true)}
        />
      </Drawer>);
    }

    return (<Drawer
      open={opened}
      openSecondary={Boolean(true)}
      docked={false}
      onRequestChange={this.props.open}
    >
      <MenuItem
        onTouchTap={() => this.handleLink("/", 0)}
        primaryText="Home"
        checked={tab === 0}
        insetChildren={Boolean(true)}
      />
      <MenuItem
        onTouchTap={() => this.handleLink("/results", 3)}
        primaryText="Browse Results"
        insetChildren={Boolean(true)}
        checked={tab === 3}
      />
      {
        window.location.pathname === "/" ||
          <MenuItem
            primaryText="Log In"
            onTouchTap={this.props.openLogin}
            insetChildren={Boolean(true)}
          />
      }
    </Drawer>);
  }
  normalNav() {
    const tab = this.props.navbar.tab;
    if (this.props.club._id) {
      return (<ul className="nav">
        <li
          onClick={() => this.handleLink("/club/sessions/new", 1)}
          className={tab === 1 ? "active-links" : ""}
        >
          New Session
        </li>
        <li
          onClick={() => this.handleLink("/club/sessions", 2)}
          className={tab === 2 ? "active-links" : ""}
        >
          Old Sessions
        </li>
        <li
          onClick={() => this.handleLink("/results", 3)}
          className={tab === 3 ? "active-links" : ""}
        >
          Browse Results
        </li>
        <li onClick={this.handleLogout}>Log Out</li>
      </ul>);
    }
    return (<ul className="nav">
      <li onClick={() => this.handleLink("/results", 3)} className={tab === 3 ? "active-links" : ""}>Browse Results</li>
      {
        location.pathname === "/" ||
          <li className="nav-links" onClick={this.props.openLogin}>Log In</li>
      }
    </ul>);
  }
  render() {
    const collapsedIcon = <div className="collapsed-icon" onClick={this.props.open}>&#9776;</div>;

    return (<div className="nav-bar">
      <div>
        <div className="logo" onClick={() => this.handleLink(this.props.club._id ? "/club" : "/", 0)}>
          MatchPoints
        </div>
        { collapsedIcon }
        { this.normalNav() }
        { this.slideNav() }
      </div>
    </div>);
  }
}
