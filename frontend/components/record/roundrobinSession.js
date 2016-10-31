import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import moment from "moment";
import AppBar from "material-ui/AppBar";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import CircularProgress from "material-ui/CircularProgress";
import RRSessionStore from "../../stores/rrSessionStore";
import ClubStore from "../../stores/clubStore";
import { fetchRRSessions, postResult } from "../../actions/rrSessionActions";
import RecordTable from "./recordTable";

const setUpChangeArray = selectedSchema => [...Array(selectedSchema.length)];

class RoundRobinSession extends Component {
  static propTypes = {
    club: PropTypes.object,
    params: PropTypes.object,
    deleteSession: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.displayName = "RoundRobinSession";
    this.state = {
      session: null,
      scoreChange: [],
      scoreUpdate: {},
      currentTab: 0,
      open: false,
      saved: false,
      updating: false,
      loading: false
    };
  }
  componentWillMount() {
    this.rrsListener = RRSessionStore.addListener(this.setRRSession);

    if (this.props.club) {
      this.setRRSession();
    } else {
      this.csListener = ClubStore.addListener(this.setRRSession);
    }
  }

  componentWillReceiveProps(nextProps) {
    RRSessionStore.fetchSsession(nextProps.params.id);
  }
  componentWillUnmount() {
    if (this.rrsListener) this.rrsListener.remove();
    if (this.csListener) this.csListener.remove();
  }
  setRRSession = () => {
    const session = this.state.session || RRSessionStore.find(this.props.params.id);
    const newObj = { session };
    if (session) {
      const err = RRSessionStore.getError();
      if (this.state.updating && !err) {
        browserHistory.push("/club/sessions");
      } else if (err) {
        this.setState({ updating: false, loading: false });
      } else {
        const scoreChange = session.results &&
          session.results.length ?
            session.results :
              setUpChangeArray(session.selectedSchema);
        newObj.scoreChange = scoreChange;
        this.setState(newObj);
      }
    } else {
      fetchRRSessions(this.props.club._id);
    }
  }

  setTab = (currentTab) => {
    this.setState({ currentTab });
  }

  updateScore = (scoreChangeInGroup, i) => {
    const scoreChange = this.state.scoreChange;
    const scoreUpdate = Object.assign({}, this.state.scoreUpdate);
    const scoreUpdateInGroup = scoreChangeInGroup[1];
    scoreChange[i] = scoreChangeInGroup[0];

    Object.keys(scoreUpdateInGroup).forEach((playerId) => {
      scoreUpdate[playerId] = scoreUpdateInGroup[playerId];
    });
    this.setState({ scoreChange, scoreUpdate });
  }

  saveSession = () => {
    const session = this.state.session;
    if (!session) {
      browserHistory.push("/");
      return;
    }
    if (!session.finalized) {
      postResult(
        this.state.scoreChange, this.state.scoreUpdate,
        session._id, session.date
      );
      this.setState({ updating: true, loading: true });
    }
  }
  handleClose = () => {
    this.setState({ open: false });
  }
  handleDelete = () => {
    this.props.deleteSession(this.props.params.id);
  }
  handleBack = () => {
    history.back();
  }
  iconMenu() {
    return (<IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    >
      <MenuItem primaryText="Save" onClick={this.saveSession} />
      <MenuItem primaryText="Delete" onClick={() => this.setState({ open: true })} />
    </IconMenu>);
  }
  loading() {
    if (this.state.loading || !this.state.session) {
      return (<div className="overlay">
        <div className="loading">
          <CircularProgress size={2} />
        </div>
      </div>);
    }
    return "";
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={Boolean(true)}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Delete"
        primary={Boolean(true)}
        keyboardFocused={Boolean(true)}
        onTouchTap={this.handleDelete}
      />,
    ];
    const { session, scoreChange } = this.state;
    if (!session) return this.loading();
    const { selectedSchema, players, finalized } = session;

    let countedPlayers = 0;
    return (<div className="session-container">
      <AppBar
        title={`Date: ${moment(session.date).format("MMMM DD, YYYY")}`}
        iconElementLeft={<IconButton onClick={this.handleBack}><NavigationClose /></IconButton>}
        iconElementRight={this.iconMenu()}
      />
      <div className="session-container-body">
        {
          selectedSchema.map((sizeOfGroup, i) => {
            countedPlayers += +sizeOfGroup;
            return (<RecordTable
              key={i}
              groupNum={i + 1}
              start={countedPlayers - sizeOfGroup}
              finalized={finalized}
              joinedPlayers={players}
              sizeOfGroup={+sizeOfGroup}
              updateScore={this.updateScore}
              scoreChange={scoreChange.length ? scoreChange[i] : []}
            />);
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
      {this.loading()}
    </div>);
  }
}
export default RoundRobinSession;
