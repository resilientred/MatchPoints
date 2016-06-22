import React from 'react'
import RRSessionActions from "../../actions/rrSessionActions"
import RRSessionStore from "../../stores/rrSessionStore"
import { browserHistory } from 'react-router'

class RoundRobinSessionsList extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
          results: []
        }
    }
    componentDidMount(){
      debugger;
      this.rrsListener = RRSessionStore.addListener(_fetchedRRSessions);
      RRSessionActions.fetchRRSessions(this.props.clubId);
    }

    _fetchedRRSessions = () => {
      this.setState({
        results: RRSessionStore.all()
      })
    }
    editResult = (id) => {
      browserHistory.push("/club/sessions/" + id);
    }

    deleteResult = (id) => {
      RRSessionActions.deleteSession(id);
      //need club id
    }

    finalizeResult = (id) => {
      RRSessionActions.finalizeResult(id);
      //need club id
    }

    componentWillUnmount() {
      if (this.rrsListener) this.rrsListener.remove();
    }

    render() {
        return <div>
          <h3>Round Robin results</h3>
          {
            this.state.results.map ( (result) => {
              return <RoundRobinResultEntry {...result} />
            })
          }
        </div>;
    }
}

export default RoundRobinSessionsList;
