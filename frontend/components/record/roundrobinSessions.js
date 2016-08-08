import React, { Component } from 'react'
import{ fetchRRSessions, deleteSession } from "../../actions/rrSessionActions"
import RRSessionStore from "../../stores/rrSessionStore"
import RRResultEntry from "../record/roundrobinResultEntry"
import ClubStore from "../../stores/clubStore"
import { browserHistory } from 'react-router'

class RoundRobinSessions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          results: null
        }
    }
    componentWillMount(){
      this.rrsListener = RRSessionStore.addListener(this._fetchedRRSessions);
      const results = RRSessionStore.all();
      if (results) {
        this.setState({ results })
      } else {
        fetchRRSessions(this.props.club._id);
      }
    }
    _fetchedRRSessions = () => {
      this.setState({
        results: RRSessionStore.all()
      })
    }
    editResult = (id, clubId) => {
      browserHistory.push("/club/sessions/" + id);
    }

    deleteResult = (id) => {
      deleteSession(id);
    }

    componentWillUnmount() {
      if (this.rrsListener) this.rrsListener.remove();
    }

    render() {
        var callbacksForChildren = {
          editResult: this.editResult,
          deleteResult: this.deleteResult,
          finalizeResult: this.finalizeResult
        };
        if (!this.props.club || !this.state.results){
          return <div>Loading....</div>
        }
        return (<div>
          <h1>Round Robin results</h1>
          {
            this.state.results.map ( (result) => {
              return <RRResultEntry key={result.id} {...result} {...callbacksForChildren}/>
            })
          }
        </div>);
    }
}

export default RoundRobinSessions;