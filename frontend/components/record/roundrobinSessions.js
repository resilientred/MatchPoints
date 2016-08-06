import React from 'react'
import{ fetchRRSessions, deleteSession } from "../../actions/rrSessionActions"
import RRSessionStore from "../../stores/rrSessionStore"
import RRResultEntry from "../record/roundrobinResultEntry"
import ClubStore from "../../stores/clubStore"
import { browserHistory } from 'react-router'

class RoundRobinSessions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          results: []
        }
    }
    componentDidMount(){
      this.rrsListener = RRSessionStore.addListener(this._fetchedRRSessions);
      this.currentClub = ClubStore.getCurrentClub();

      if (this.currentClub){
        fetchRRSessions(this.currentClub.id);
      } else {
        this.csListener = ClubStore.addListener(this._fetchClubId);
      }
    }
    _fetchClubId = () =>{
      this.currentClub = ClubStore.getCurrentClub();
      
      if (!this.currentClub){
        browserHistory.push("/");
        return;
      }
      fetchRRSessions(this.currentClub.id);
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
      if (this.csListener) this.csListener.remove();
    }

    render() {
        var callbacksForChildren = {
          editResult: this.editResult,
          deleteResult: this.deleteResult,
          finalizeResult: this.finalizeResult
        };

        return (<div>
          <h3>Round Robin results</h3>
          {
            this.state.results.map ( (result) => {
              return <RRResultEntry key={result.id} {...result} {...callbacksForChildren}/>
            })
          }
        </div>);
    }
}

export default RoundRobinSessions;