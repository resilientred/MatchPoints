import React, { Component } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import PlayerResultQuery from "./playerResultQuery";
import ClubResultQuery from "./clubResultQuery";
import { fetchAllClubs } from "../../actions/clientActions";
import AllClubsStore from "../../stores/allClubsStore";

export default class ResultQuery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clubs: null,
      tab: 0
    };
  }
  componentDidMount() {
    this.allCListener = AllClubsStore.addListener(this.fetchedAllClubs);
    this.checkIfCachedClubs();
  }
  componentWillUnmount() {
    this.allCListener.remove();
  }

  handleTabChange = (tab) => {
    this.setState({ tab });
  }
  checkIfCachedClubs() {
    const clubs = AllClubsStore.all();
    if (clubs) {
      this.setState({ clubs });
    } else {
      fetchAllClubs();
    }
  }

  fetchedAllClubs = () => {
    this.setState({ clubs: AllClubsStore.all() });
  }
  render() {
    return (<div>
      <div className="result-query-container">
        <Tabs
          value={this.state.tab}
          onChange={this.handleTabChange}
          contentContainerStyle={{
            padding: "20px",
            border: "1px solid #E0E0E0",
          }}
        >
          <Tab label="Players" value={0}>
            <PlayerResultQuery clubs={this.state.clubs} />
          </Tab>
          <Tab label="Club" value={1}>
            <ClubResultQuery clubs={this.state.clubs} />
          </Tab>
        </Tabs>
      </div>
    </div>);
  }
}
