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
          scoreChange: null,
          currentTab: 0
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
        var session = this.state.session;
        var selectedSchema = session.selectedSchema,
            schemata = session.schemata,
            numOfPlayers = session.numOfPlayers,
            clubId = session._clubId,
            joinedPlayers = session.players;

        var countedPlayers = 0;
        return  <div>
          <div><li onClick={this.setTab.bind(null, 0)}>Score</li><li onClick={this.setTab.bind(null, 1)}>Rating Change</li></div>
          <h1>Session Date: { moment(session.date).format("YYYY/MM/DD") }</h1>
        { this.state.currentTab === 0 ?  
          <div>
          {
            selectedSchema.map ( (sizeOfGroup, i) => {
              countedPlayers += sizeOfGroup;
              return <RecordTable key={i} groupNum={i + 1} start={countedPlayers - sizeOfGroup}
                  joinedPlayers={joinedPlayers} sizeOfGroup={+sizeOfGroup} 
                  updateScore={this.updateScore} />
              })
          }
          </div> :
          <div>
            {
              this.state.scoreChange ? <div>4321</div> :
              <div>
                12345
              </div>
            }
          </div>
          }
    
        </div>;
    }
}
//TODO: have the side bar show what the current page is rather than having tabs
//Maybe imitate what the thing 
export default RoundRobinSession;

