import React from 'react'
import RRSessionActions from "../../actions/rrSessionActions"
import RRSessionStore from "../../stores/rrSessionStore"
import RRResultEntry from "../record/roundrobinResultEntry"
import ClubStore from "../../stores/clubStore"
import ClubActions from "../../actions/clubActions"
import CSRFStore from "../../stores/csrfStore"
import { browserHistory } from 'react-router'

class RoundRobinSessions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          results: [],
          _csrf: null
        }
    }
    componentDidMount(){
      this.rrsListener = RRSessionStore.addListener(this._fetchedRRSessions);
      this.csrfListener = CSRFStore.addListener(this._fetchedCSRF);

      ClubActions.fetchCSRF();

      this.currentClub = ClubStore.getCurrentClub();

      if (this.currentClub){
        RRSessionActions.fetchRRSessions(this.currentClub.id);
      } else {
        this.csListener = ClubStore.addListener(this._fetchClubId);
      }
    }
    _fetchedCSRF = () => {
      this.setState({ _csrf: CSRFStore.getCSRF() });
    }
    _fetchClubId = () =>{
      this.currentClub = ClubStore.getCurrentClub();
      
      if (!this.currentClub){
        browserHistory.push("/");
        return;
      }
      RRSessionActions.fetchRRSessions(this.currentClub.id);
    }
    _fetchedRRSessions = () => {
      this.setState({
        results: RRSessionStore.all()
      })
    }

    editResult = (id, clubId) => {
      browserHistory.push("/club/sessions/" + id);
    }

    deleteResult = (id, clubId) => {
      RRSessionActions.deleteSession(id, clubId, this.state._csrf);
      ClubActions.fetchCSRF();
    }

    finalizeResult = (id, clubId) => {
      RRSessionActions.finalizeResult(id, clubId, this.state._csrf);
    }

    componentWillUnmount() {
      if (this.rrsListener) this.rrsListener.remove();
      if (this.csListener) this.csListener.remove();
      if (this.csrfListener) this.csrfListener.remove();
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