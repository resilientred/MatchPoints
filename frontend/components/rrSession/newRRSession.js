import React, { PropTypes, Component } from "react";
import { browserHistory } from "react-router";
import { Tabs, Tab } from "material-ui/Tabs";
import CircularProgress from "material-ui/CircularProgress";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import SnackBar from "material-ui/Snackbar";
import moment from "moment";
import { deletePlayer, addPlayer, updatePlayer } from "../../actions/clientActions";
import { saveSession, temporarySession, destroyTempSession, fetchTempSession } from "../../actions/rrSessionActions";
import RRSessionStore from "../../stores/rrSessionStore";
import TempSessionStore from "../../stores/tempSessionStore";
import PDFStore from "../../stores/pdfStore";
import PlayerForm from "./playerForm";
import ClubStore from "../../stores/clubStore";
import Participants from "./playerList/participants";
import Grouping from "./groups/grouping";
import RestoreDialog from "./restoreDialog";
import UploadDialog from "./uploadDialog";

export default class NewRRSession extends Component {
  static propTypes = {
    club: PropTypes.shape({
      _id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.String
      ]),
      players: PropTypes.array
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      newPlayerModal: false,
      groupTabEnabled: false,
      editPlayerModal: {
        open: false,
        player: null
      },
      tab: 0,
      date: new Date(),
      numPlayers: 0,
      error: null,
      snackBarOpen: false,
      restoreDialogOpen: false,
      uploadDialogOpen: false,
      addedPlayers: {}
    };
  }
  componentWillMount() {
    this.cached = false;
    this.csListener = ClubStore.addListener(this.clubChanged);
    this.rrListener = RRSessionStore.addListener(this.rrResponseReceived);
    this.tslistener = TempSessionStore.addListener(this.tempSessionFetched);
  }
  componentDidMount() {
    fetchTempSession();
  }

  componentWillUnmount() {
    if (this.csListener) this.csListener.remove();
    if (this.rrListener) this.rrListener.remove();
    if (this.tslistener) this.tslistener.remove();
  }

  rrResponseReceived = () => {
    const error = RRSessionStore.getError();

    if (error) {
      this.setState({ error });
      setTimeout(() => {
        this.setState({ error: null });
      }, 2000);
    } else {
      browserHistory.push("/club/sessions");
    }
  }
  deletePlayer = (_id) => {
    delete this.state.addedPlayers[_id];
    deletePlayer(_id);

    const players = this.props.club.players;
    for (let i = 0; i < players.length; i++) {
      if (players[i]._id === _id) {
        players.splice(i, 1);
      }
    }
    this.setState({ addedPlayers: this.state.addedPlayers });
  }

  tempSessionFetched = () => {
    const session = TempSessionStore.findCachedSession();

    if (session) {
      this.session = session;
      this.handleOpen("dialogOpen");
    }
  }
  restoreSession = () => {
    this.selectedSchema = this.session.selectedSchema;
    this.schemata = this.session.schemata;
    this.pdfs = this.session.pdfs;
    this.max = this.session.max;
    this.min = this.session.min;
    this.cached = true;
    this.setState({
      tab: +this.session.tab,
      date: new Date(this.session.date),
      numPlayers: +this.session.numPlayers,
      addedPlayers: this.session.addedPlayers ? this.session.addedPlayers : {}
    });
    this.handleClose("dialogOpen");
  }
  openModal = () => {
    this.setState({ newPlayerModal: true });
  }
  openEditModal = (player) => {
    this.setState({
      editPlayerModal: {
        open: true,
        player: {
          _id: player._id,
          name: player.name,
          rating: player.rating
        }
      }
    });
  }
  closeModal = () => {
    this.setState({ newPlayerModal: false });
  }
  closeEditModal = () => {
    this.setState({
      editPlayerModal: {
        open: false,
        player: null
      }
    });
  }
  clubChanged = () => {
    this.setState({ club: ClubStore.getCurrentClub() });
  }
  handleOpen = (field) => {
    this.setState({ [field]: true });
  }
  handleClose = (field) => {
    this.setState({ [field]: false });
  }
  handleToggle = (_id, e) => {
    if (e.target.type !== "checkbox" && e.target.tagName !== "TD") return;
    const addedPlayers = Object.assign({}, this.state.addedPlayers);
    const selectedPlayer = this.props.club.players.find((player =>
      player._id === _id
    ));

    if (addedPlayers[_id]) {
      delete addedPlayers[_id];
    } else {
      addedPlayers[_id] = selectedPlayer;
    }
    this.setState({
      addedPlayers,
      numPlayers: ++this.state.numPlayers
    });
  }
  toggleTab = (tab) => {
    if (tab.target) return;

    this.setState({ tab });
  }

  convertPlayersToArr() {
    return Object.keys(this.state.addedPlayers).map((_id =>
      this.state.addedPlayers[_id]
    ));
  }

  saveSession = (schemata, selectedSchema, players) => {
    saveSession({
      date: this.state.date,
      numOfPlayers: this.state.numPlayers,
      players,
      selectedSchema,
      schemata,
    });
    destroyTempSession();
  }
  temporarilySaveSession = (min, max, schemata, selectedSchema, pdfs) => {
    this.handleOpen("snackBarOpen");
    temporarySession({
      ...this.state, min, max, selectedSchema, schemata, pdfs
    });
  }
  destroyTempSession = () => {
    this.session = null;
    PDFStore.clearPDF();
    destroyTempSession();
    this.handleClose("dialogOpen");
  }
  render() {
    let allPlayers = [];
    let addedPlayers = [];
    if (this.props.club) {
      allPlayers = this.props.club.players;
      addedPlayers = this.convertPlayersToArr().sort((a, b) => b.rating - a.rating);
    }
    const today = new Date();
    const minDate = today.setYear(today.getFullYear() - 1);
    const { numPlayers } = this.state;

    const playerContent = (<div>
      <RaisedButton
        onClick={this.openModal}
        label="New Player"
        secondary={Boolean(true)}
        style={{
          position: "absolute", right: 0
        }}
      />
      <RaisedButton
        onClick={() => this.handleOpen("uploadDialogOpen")}
        label="Upload Players"
        secondary={Boolean(true)}
        style={{
          position: "absolute", right: "150px"
        }}
      />
      <div className="date">
        <DatePicker
          floatingLabelText="Date of Session"
          hintText="Date" value={this.state.date}
          onChange={(e, date) => this.setState({ date })}
          minDate={minDate}
        />
      </div>
      <Participants
        objAddedPlayers={this.state.addedPlayers}
        addedPlayers={addedPlayers}
        deletePlayer={this.deletePlayer}
        allPlayers={allPlayers}
        handleToggle={this.handleToggle}
        openEditModal={this.openEditModal}
      />
    </div>);
    const groupContent = (<Grouping
      numPlayers={numPlayers}
      cached={this.cached}
      pdfs={this.pdfs}
      min={this.min}
      max={this.max}
      selectedGroup={this.selectedSchema}
      schemata={this.schemata}
      addedPlayers={addedPlayers}
      saveSession={this.saveSession}
      temporarilySaveSession={this.temporarilySaveSession}
      club={this.props.club}
      date={moment(this.state.date).format("YYYY-MM-DD")}
    />);

    return (<div className="tab-container">
      <Tabs
        tabItemContainerStyle={{ backgroundColor: "#673AB7" }}
        contentContainerStyle={{
          padding: "20px",
          border: "1px solid #E0E0E0",
          minHeight: "400px"
        }}
        value={this.state.tab}
        onChange={this.toggleTab}
      >
        <Tab label="Registration" value={0}>
          { playerContent }
        </Tab>
        <Tab label="Grouping" value={1}>
          { groupContent }
        </Tab>
      </Tabs>
      <SnackBar
        open={this.state.snackBarOpen}
        message="Session has been temporarily saved"
        autoHideDuration={8000}
        onRequestClose={() => this.handleClose("snackBarOpen")}
      />
      {
        this.state.restoreDialogOpen &&
          <RestoreDialog
            open={this.state.restoreDialogOpen}
            handleClose={this.handleClose}
            restoreSession={this.restoreSession}
            destroyTempSession={this.destroyTempSession}
          />
      }
      {
        this.state.uploadDialogOpen &&
          <UploadDialog
            open={this.state.uploadDialogOpen}
            handleClose={this.handleClose}
          />
      }
      {
        this.state.newPlayerModal &&
          (<div className="overlay">
            <PlayerForm
              title="Register Player"
              callback={addPlayer}
              modalOpen={this.state.newPlayerModal}
              closeModal={this.closeModal}
            />
          </div>)
      }
      {
        this.state.editPlayerModal.open &&
          (<div className="overlay">
            <PlayerForm
              title="Update Player"
              callback={updatePlayer}
              player={this.state.editPlayerModal.player}
              modalOpen={this.state.editPlayerModal.open}
              closeModal={this.closeEditModal}
            />
          </div>)
      }
      {
        !this.props.club &&
          (<div className="overlay">
            <div className="loading">
              <CircularProgress size={2} />
            </div>
          </div>)
      }
    </div>);
  }
}
