import React from 'react';
import { browserHistory } from "react-router";
import { fetchPlayers } from '../../actions/clientActions';
import { saveSession, temporarySession, destroyTempSession, fetchTempSession } from "../../actions/rrSessionActions";
import moment from "moment"
import RRSessionStore from "../../stores/rrSessionStore";
import TempSessionStore from "../../stores/tempSessionStore";
import PDFStore from "../../stores/pdfStore"
import PlayerForm from './playerForm';
import NewPlayerStyle from "../../modalStyles/newPlayerModal";
import ClubStore from "../../stores/clubStore";
import Participants from "./participants";
import Grouping from "./grouping";
import { Tabs, Tab } from "material-ui/Tabs"
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from "material-ui/RaisedButton"
import FlatButton from "material-ui/FlatButton"
import DatePicker from 'material-ui/DatePicker';
import SnackBar from "material-ui/SnackBar"
import Dialog from 'material-ui/Dialog';

export default class NewRRSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayerModal: false,
      groupTabEnabled: false,
      tab: "1",
      date: new Date(),
      numPlayers: 0,
      error: null,
      snackBarOpen: false,
      dialogOpen: false,
      addedPlayers: {}
    }
  }
  componentWillMount() {
    this.cached = false;
    this.csListener = ClubStore.addListener(this._clubChanged);
    this.rrListener = RRSessionStore.addListener(this._rrResponseReceived);
    this.tslistener = TempSessionStore.addListener(this._tempSessionFetched);
    fetchTempSession(this.props.club._id);
  }

  componentWillUnmount() {
    if (this.csListener) this.csListener.remove();
    if (this.rrListener) this.rrListener.remove();
  }

  _rrResponseReceived = () => {
    let error = RRSessionStore.getError();

    if (error){
      this.setState({ error });
      setTimeout(() => {
        this.setState({ error: null });
      }, 2000)
    } else {     
      browserHistory.push("/club/sessions");
    }
  }

  _tempSessionFetched = () => {
    let session = TempSessionStore.findCachedSession();

    if (session){
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
      tab: this.session.tab,
      date: new Date(this.session.date),
      numPlayers: +this.session.numPlayers,
      addedPlayers: this.session.addedPlayers ? this.session.addedPlayers : {}
    })
    this.handleClose("dialogOpen")
  }
  openModal = () =>{
    this.setState({newPlayerModal: true});
  }
  closeModal = () =>{
    this.setState({newPlayerModal: false});
  }
  _clubChanged = () => {
    this.setState({ club: ClubStore.getCurrentClub(),
      newPlayerModal: false });
  }
  handleOpen(field){
    this.setState({ [field]: true });
  }
  handleClose(field){
    this.setState({ [field]: false});
  }
  handleToggle = (_id) => {
    let addedPlayers = Object.assign({}, this.state.addedPlayers),
        selectedPlayer = this.props.club.players.find((player) => {
          return player._id === _id;
        });

    if (addedPlayers[_id]){
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
    this.setState({ tab });
  }

  convertPlayersToArr() {
    return Object.keys(this.state.addedPlayers).map( (_id) => {
      return this.state.addedPlayers[_id];
    });
  }

  saveSession = (schemata, selectedSchema, players) => {
    saveSession({
      date: this.state.date,
      numOfPlayers: this.state.numPlayers,
      players: players,
      selectedSchema: selectedSchema,
      schemata: schemata,
    }, this.props.club._id);
    destroyTempSession(this.props.club._id);
  }
  temporarilySaveSession = (min, max, schemata, selectedSchema, pdfs) => {
    this.handleOpen("snackBarOpen");
    temporarySession({
      ...this.state, min, max, selectedSchema, schemata, pdfs
    }, this.props.club._id);
  }
  destroyTempSession = () => {
    this.session = null;
    PDFStore.clearPDF();
    destroyTempSession(this.props.club._id);
    this.handleClose("dialogOpen");
  }
  render(){
    if (!this.props.club){ 
      return <CircularProgress size={2} />
      }
    let allPlayers = this.props.club.players,
        addedPlayers = this.convertPlayersToArr().sort( (a, b)=>(b.rating - a.rating) ),
        { tab, date, numPlayers, error } = this.state;
    
    const actions = [
      <FlatButton label="Discard"
                  secondary={true}
                  onTouchTap={this.destroyTempSession} />,
      <FlatButton label="Retrieve"
                  secondary={true}
                  onTouchTap={this.restoreSession} />
    ];
    let playerContent = (<div>
          <RaisedButton 
              onClick={this.openModal} 
              label="New Player" 
              secondary={true}
              style={{position: "absolute", right: 0}}/>
          <div className="date">
            <DatePicker floatingLabelText="Date of Session"
                hintText="Date" value={this.state.date}
                onChange={(e, date) => this.setState({date}) }/>
          </div>
          <Participants objAddedPlayers={this.state.addedPlayers} addedPlayers={addedPlayers} 
                                allPlayers={allPlayers} 
                                handleToggle={this.handleToggle}/> 
        </div>);
    let groupContent = (<Grouping numPlayers={numPlayers} 
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
                          date={moment(this.state.date).format("YYYY-MM-DD")}/>);

    return (
      <div className="tab-container">
         <Tabs tabItemContainerStyle={{backgroundColor: "#673AB7"}} contentContainerStyle={{  padding: "20px",
   border: "1px solid #E0E0E0" }} 
              value={this.state.tab} 
              onChange={this.toggleTab}
              initialSelectedIndex={1}>
          <Tab label="Registration" value="1">
            { playerContent }
            <PlayerForm modalOpen={this.state.newPlayerModal} 
                      closeModal={this.closeModal}/>
          </Tab>
          <Tab label="Grouping" value="2"> 
            { groupContent }
          </Tab>
        </Tabs>
        <SnackBar open={this.state.snackBarOpen}
                  message="Session has been temporarily saved"
                  autoHideDuration={8000}
                  onRequestClose={this.handleClose.bind(this, "snackBarOpen")} />
        <Dialog
          title="Session found"
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose.bind(this, "dialogOpen")}
        >
          Would you like to restore your previous session?
        </Dialog>
      </div>
    )
  }
}



export default NewRRSession;