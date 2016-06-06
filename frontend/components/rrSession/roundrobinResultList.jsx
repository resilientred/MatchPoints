import React from 'react';
import RRSessionActions from "../../acitons/RRSessionActions";
import RRSessionStore from "../../stores/rrSessionStore";
import { browserHistory } from 'react-router';

class RoundRobinResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          results: []
        }
    }
    componentDidMount() {
      this.rrsListener = RRSessionStore.addListener(_setResults);
      RRSessionActions.fetchRRSessions(this.props.clubId);
    }

    fetchRRSessions = () => {
      this.setState({
        results: RRSessionStore.all()
      })
    }

    editResult = (date) => {
      browserHistory.push("/club/rrResults/" + date);
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
      this.rrsListener.remove();
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

export default RoundRobinResult;
