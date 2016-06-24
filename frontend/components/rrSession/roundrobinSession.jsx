import React from 'react';
import RRSessionStore from "../../stores/rrSessionStore";
import rrSessionActions from "../../actions/rrSessionActions";
import moment from 'moment'

class RoundRobinSession extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RoundRobinSession';
        this.state = {
          session: RRSessionStore.find(this.props.params.id) || null
        }
    }

    componentDidMount() {
      this.rrsListener = RRSessionStore.addListener(this.setRRSession);
      if (!this.state.session){
        rrSessionActions.fetchSsession(this.props.params.date);
      }
    }

    setRRSession = () =>{
      this.setState({
        session: RRSessionStore.find(this.props.param.date)
      })
    }

    componentWillReceiveProps(nextProps) {
      RRSessionStore.fetchSsession(nextProps.params.id);
    }

    componentWillUnmount() {
      this.rrsListener.remove();
    }

    render() {
        var session = this.state.session;
        var selectedSchema = session.selectedSchema,
            schemata = session.schemata,
            numOfPlayers = session.numOfPlayers,
            clubId = session._clubId;

        return <div>
          Session Date: { moment(session.date).format("YYYY/MM/DD") }
        </div>;
    }
}

export default RoundRobinSession;

