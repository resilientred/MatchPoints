import React from 'react';
import RRSessionStore from "../../stores/rrSessionStore";
import rrSessionActions from "../../actions/rrSessionActions";

class RoundRobinSession extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RoundRobinSession';
        this.state = {
          rrSession: RRSessionStore.find(this.props.params.date) || []
        }
    }

    componentDidMount() {
      this.rrsListener = RRSessionStore.addListener(this.setRRSession);
      if (!this.state.rrSession.length){
        rrSessionActions.fetchSsession(this.props.params.date);
      }
    }

    setRRSession = () =>{
      this.setState({
        rrSession: RRSessionStore.find(this.props.param.date)
      })
    }

    componentWillReceiveProps(nextProps) {
      RRSessionStore.fetchSsession(nextProps.params.date);
    }

    componentWillUnmount() {
      this.rrsListener.remove();
    }

    render() {
        return <div>RoundRobinSession</div>;
    }
}

export default RoundRobinSession;

