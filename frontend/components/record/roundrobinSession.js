import React from 'react'
import { browserHistory } from "react-router"
import moment from 'moment'
import RRSessionStore from "../../stores/rrSessionStore"
import ClubStore from "../../stores/clubStore"
import { fetchRRSessions, updateResult, postResult } from "../../actions/rrSessionActions"
import RecordTable from "./RecordTable"
import AppBar from 'material-ui/AppBar'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class RoundRobinSession extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RoundRobinSession';
        this.state = {
          session: null,
          scoreChange: [],
          scoreUpdate: {},
          currentTab: 0,
          open: false,
          saved: false
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
      var scoreChange = this.state.scoreChange,
          scoreUpdate = Object.assign({}, this.state.scoreUpdate),
          scoreUpdateInGroup = scoreChangeInGroup[1];
      scoreChange[i] = scoreChangeInGroup[0];

      for (var playerId in scoreUpdateInGroup){
        scoreUpdate[playerId] = scoreUpdateInGroup[playerId];
      }
      this.setState({ scoreChange, scoreUpdate });
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
            this.props.club._id, this.state.scoreChange, 
            this.state.scoreUpdate, session._id, session.date
          )
        } else {
          postResult(
            this.props.club._id, this.state.scoreChange, 
            this.state.scoreUpdate, session._id, session.date
          )
        }
      }
    }
    handleClose = () => {
      this.setState({open: false});
    }
    handleDelete = () => {
      this.props.deleteSession(this.props.params.id);
    }
    handleBack = () => {
      history.back();
    }
    iconMenu () {
      return <IconMenu 
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              >
                <MenuItem primaryText="Update" onClick={() => this.setState({open: true})}/>
                <MenuItem primaryText="Save" onClick={this.saveSesion}/>
                <MenuItem primaryText="Delete" onClick={() => this.setState({open: true})}/>
              </IconMenu>
    }
    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Update"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleDelete}
        />,
      ];
        let { session, scoreChange } = this.state;
        if (!session) return <h1>Loading ...</h1>;
        let { selectedSchema, schemata, numOfPlayers, clubId, players, finalized } = session;

        var countedPlayers = 0;
        return <div className="session-container">
          <AppBar
            title={ "Date: " + moment(session.date).format("MMMM DD, YYYY") }
            iconElementLeft={<IconButton onClick={this.handleBack}><NavigationClose /></IconButton>}
            iconElementRight={this.iconMenu()}
          />
          <div className="session-container-body">
            {
              selectedSchema.map ( (sizeOfGroup, i) => {
                countedPlayers += sizeOfGroup;
                return (
                    <RecordTable key={i} groupNum={i + 1} 
                     start={countedPlayers - sizeOfGroup}
                     finalized={ finalized }
                     joinedPlayers={players} sizeOfGroup={+sizeOfGroup} 
                     updateScore={this.updateScore} 
                     scoreChange={scoreChange.length ? scoreChange[i] : []}
                     saveSession={this.saveSession} />
                )
                })
            }
          </div>
        <Dialog
          title="Delete Session"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete the session?
        </Dialog>
        </div>;
    }
}
export default RoundRobinSession;

