import React from 'react'
import RRSessionStore from "../../stores/rrSessionStore"
import rrSessionActions from "../../actions/rrSessionActions"
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
        rrSessionActions.fetchSession(this.props.params.date);
      } else {
        this.setRRSession();
      }
    }
    updateScore = (scoreChangeInGroup, i) => {
      var scoreChange = this.state.scoreChange;
      scoreChange[i] = scoreChangeInGroup;
      this.setState({scoreChange: scoreChange});
    }
    setRRSession = () => {
      var curSession = this.state.session || RRSessionStore.find(this.props.params.id),
          schema = curSession.selectedSchema;
      this.setState({
        session: curSession,
        scoreChange: this.setUpChangeArray(schema)
      });
    }

    componentWillReceiveProps(nextProps) {
      RRSessionStore.fetchSsession(nextProps.params.id);
    }
    setTab = (tabNumber) => {
      this.setState({ currentTab: tabNumber})
    }
    componentWillUnmount() {
      this.rrsListener.remove();
    }

    setUpChangeArray(selectedSchema) {
      return [...Array(selectedSchema.length)];
    }
    render() {
        var { session, scoreChange } = this.state;

        var selectedSchema = session.selectedSchema,
            schemata = session.schemata,  
            numOfPlayers = session.numOfPlayers,
            clubId = session._clubId,
            joinedPlayers = session.players;

        var countedPlayers = 0;
        return <div>
          <h1>Session Date: { moment(session.date).format("YYYY/MM/DD") }</h1>
            {
              selectedSchema.map ( (sizeOfGroup, i) => {
                countedPlayers += sizeOfGroup;
                return (
                    <RecordTable key={i} groupNum={i + 1} start={countedPlayers - sizeOfGroup}
                      joinedPlayers={joinedPlayers} sizeOfGroup={+sizeOfGroup} 
                     updateScore={this.updateScore} scoreChange={scoreChange ? scoreChange[i] : null}/>
                )
                })
            }
        </div>;
    }
}
//TODO: have the side bar show what the current page is rather than having tabs
export default RoundRobinSession;

