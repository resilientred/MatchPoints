import React from 'react';
import RRSessionStore from "../../stores/rrSessionStore";
import rrSessionActions from "../../actions/rrSessionActions";
import moment from 'moment'
import RecordTable from "./RecordTable"

class RoundRobinSession extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RoundRobinSession';
        this.state = {
          session: RRSessionStore.find(this.props.params.id) || null,
          scoreChange: null
        }
    }

    componentDidMount() {
      this.rrsListener = RRSessionStore.addListener(this.setRRSession);
      if (!this.state.session){
        rrSessionActions.fetchSsession(this.props.params.date);
      }
    }
    updateScore = (scoreChange, i) => {
      debugger;
      this.setState({scoreChange: scoreChange});
    }
    setRRSession = () => {
      var curSession = RRSessionStore.find(this.props.param.date);
      var schema = curSession.selectedSchema;
      this.setState({
        session: RRSessionStore.find(this.props.param.date),
        scoreChange: this.setUpChangeArray(schema)
      });
    }

    componentWillReceiveProps(nextProps) {
      RRSessionStore.fetchSsession(nextProps.params.id);
    }

    componentWillUnmount() {
      this.rrsListener.remove();
    }

    setUpChangeArray(selectedSchema) {
      return selectedSchema.map( (sizeOfGroup, i) => {
          return [...Array(sizeOfGroup)].map((_) => 
            [...Array(sizeOfGroup)].map((_) => [0]))
        })
    }
    render() {
        var session = this.state.session;
        var selectedSchema = session.selectedSchema,
            schemata = session.schemata,
            numOfPlayers = session.numOfPlayers,
            clubId = session._clubId,
            joinedPlayers = session.players;

        var countedPlayers = 0;
        return <div>
          <h1>Session Date: { moment(session.date).format("YYYY/MM/DD") }</h1>
          <div>
          {
            selectedSchema.map ( (sizeOfGroup, i) => {
              countedPlayers += sizeOfGroup;
              return <RecordTable key={i} groupNum={i + 1} start={countedPlayers - sizeOfGroup}
                  joinedPlayers={joinedPlayers} sizeOfGroup={+sizeOfGroup} 
                  updateScore={this.updateScore} />
              })
          }
          </div>
        </div>;
    }
}
//TODO: have the side bar show what the current page is rather than having tabs
//Maybe imitate what the thing 
export default RoundRobinSession;

