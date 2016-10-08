import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import Edit from "react-icons/lib/md/edit";
import View from "react-icons/lib/md/pageview";
import Event from "react-icons/lib/md/event";
import Warning from "react-icons/lib/md/warning";
import moment from "moment";
import RRSessionStore from "../../stores/rrSessionStore";
import { fetchRRSessions } from "../../actions/rrSessionActions";

class RoundRobinSessions extends Component {
  static propTypes = {
    club: PropTypes.Object
  }

  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
  }
  componentWillMount() {
    this.rrsListener = RRSessionStore.addListener(this.fetchedRRSessions);
    const results = RRSessionStore.all();
    if (results) {
      this.setState({ results });
    } else {
      fetchRRSessions(this.props.club._id);
    }
  }

  componentWillUnmount() {
    if (this.rrsListener) this.rrsListener.remove();
  }

  fetchedRRSessions = () => {
    this.setState({
      results: RRSessionStore.all()
    });
  }
  render() {
    if (!this.props.club) {
      return <div>Loading....</div>;
    }
    return (<div className="sessions-list">
      <List>
        <Subheader
          style={{
            fontSize: "24px",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >Previous Sessions</Subheader>
        <Divider />
        <Subheader inset={Boolean(true)}>Pending Sessions</Subheader>
        {
          !this.state.results &&
            <ListItem
              key={"noth"}
              primaryText="There have not been any sessions..."
              leftAvatar={<Avatar icon={<Warning />} />}
              disabled
            />
        }
        {
          this.state.results &&
            this.state.results.filter(r => !r.finalized).map(result => (
              <ListItem
                key={result.id}
                onClick={() => browserHistory.push(`/club/sessions/${result.id}`)}
                leftAvatar={<Avatar icon={<Event />} />}
                primaryText={moment(result.date).format("MMMM DD, YYYY")}
                rightIcon={<Edit />}
              />
            ))
        }
      </List>
      <Divider inset={Boolean(true)} />
      <List>
        <Subheader inset={Boolean(true)}>Saved Sessions</Subheader>
        {
          !this.state.results &&
            <ListItem
              key={"noth"}
              primaryText="There have not been any sessions..."
              leftAvatar={<Avatar icon={<Warning />} />}
              disabled
            />
        }
        {
          this.state.results &&
            this.state.results.filter(r => r.finalized).map(result => (
              <ListItem
                key={result.id}
                onClick={() => browserHistory.push(`/club/sessions/${result.id}`)}
                leftAvatar={<Avatar icon={<Event />} />}
                primaryText={moment(result.date).format("MMMM DD, YYYY")}
                rightIcon={<View />}
              />
            ))
        }
      </List>
    </div>);
  }
}

export default RoundRobinSessions;
