import React from 'react'
import RRSessionStore from "../../stores/rrSessionStore"
import ClubStore from "../../stores/clubStore"
import { fetchRRSessions, updateResult, postResult }from "../../actions/rrSessionActions"
import moment from 'moment'
import RecordTable from "./RecordTable"
import { browserHistory } from "react-router"

class RoundRobinSession extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RoundRobinSession';
        this.state = {
          session: null,
          scoreChange: [],
          scoreUpdate: {},
          currentTab: 0
        }
    }
    componentWillMount() {
      this.rrsListener = RRSessionStore.addListener(this.setRRSession);

      if (this.props.club){
        this.setRRSession();
      } else {
        this.csListener = ClubStore.addListener(this.setRRSession);
      }
    }
    updateScore = (scoreChangeInGroup, i) => {
      var scoreChange = Object.assign({}, this.state.scoreChange),
          scoreUpdate = Object.assign({}, this.state.scoreUpdate),
          scoreUpdateInGroup = scoreChangeInGroup[1];
      scoreChange[i] = scoreChangeInGroup[0];

      for (var playerId in scoreUpdateInGroup){
        scoreUpdate[playerId] = scoreUpdateInGroup[playerId];
      }
      this.setState({ scoreChange, scoreUpdateInGroup });
    }

    setRRSession = () => {
      let newObj = {},
          session = this.state.session || RRSessionStore.find(this.props.params.id);
      newObj.session = session;
      if (session){
        let scoreChange = session.results && session.results.length ? session.results : this.setUpChangeArray(session.selectedSchema);
        newObj.scoreChange = scoreChange;
        this.setState(newObj);
      } else {
        fetchRRSessions(this.props.club._id);
      }

    }

    componentWillReceiveProps(nextProps) {
      RRSessionStore.fetchSsession(nextProps.params.id);
    }
    setTab = (currentTab) => {
      this.setState({ currentTab })
    }
    componentWillUnmount() {
      if (this.rrsListener) this.rrsListener.remove();
      if (this.csListener) this.csListener.remove();
    }

    setUpChangeArray(selectedSchema) {
      return [...Array(selectedSchema.length)];
    }

    saveSession = () => {
      var session = this.state.session;

      if (!session) {
        browserHistory.push("/");
      } else {
        if (session.finalized){
          updateResult(
            this.state.scoreChange, this.state.scoreUpdate,
            session._id, session.date
          )
        } else {
          postResult(
            this.state.scoreChange, this.state.scoreUpdate,
            session._id, session.date
          )
        }
      }
    }

    render() {
        let { session, scoreChange } = this.state;
        if (!session) return <h1>Loading ...</h1>;

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
                    <RecordTable key={i} groupNum={i + 1} 
                     start={countedPlayers - sizeOfGroup}
                     joinedPlayers={joinedPlayers} sizeOfGroup={+sizeOfGroup} 
                     updateScore={this.updateScore} 
                     scoreChange={scoreChange.length ? scoreChange[i] : []}
                     saveSession={this.saveSession} />
                )
                })
            }
        </div>;
    }
}
export default RoundRobinSession;

