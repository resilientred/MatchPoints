import React, { Component, Children, cloneElement } from "react";
import CircularProgress from "material-ui/CircularProgress";
import { browserHistory } from "react-router";
import { fetchCurrentClub } from "../actions/clubActions";
import ClubStore from "../stores/clubStore";

class Club extends Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  }
  constructor(props) {
    super(props);
    this.state = {
      club: null
    };
  }
  componentWillMount() {
    this.cuListener = ClubStore.addListener(this.currentClubChange);
    const club = ClubStore.getCurrentClub();
    if (club) {
      this.setState({ club });
    } else {
      fetchCurrentClub();
    }
  }

  componentWillUnmount() {
    if (this.cuListener) this.cuListener.remove();
  }
  currentClubChange = () => {
    const club = ClubStore.getCurrentClub();
    if (club) {
      this.setState({ club });
    } else {
      browserHistory.push("/");
    }
  }
  render() {
    if (!this.state.club) {
      return (<div className="overlay">
        <div className="loading">
          <CircularProgress size={2} />
        </div>
      </div>);
    }

    return (<div className="app">
      <div className="club-body">
        <div className="club-children">
          {
            Children.map(this.props.children, (child =>
              cloneElement(child, { club: this.state.club })
            ))
          }
        </div>
      </div>
    </div>);
  }
}

export default Club;
