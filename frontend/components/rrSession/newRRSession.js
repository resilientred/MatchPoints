import React from 'react';
import { browserHistory } from "react-router";

import { fetchPlayers } from '../../actions/clientActions';
import { saveSession, temporarySession } from "../../actions/rrSessionActions";
import moment from "moment"
import RRSessionStore from "../../stores/rrSessionStore";
import PlayerForm from './playerForm';
import NewPlayerStyle from "../../modalStyles/newPlayerModal";
import ClubStore from "../../stores/clubStore";
import Participants from "./participants";
import Grouping from "./grouping";
import { Tabs, Tab } from "material-ui/Tabs"
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from "material-ui/RaisedButton"
import DatePicker from 'material-ui/DatePicker';

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
      addedPlayers: {}
    }
  }
  componentDidMount() {
    this.csListener = ClubStore.addListener(this._clubChanged);
    this.rrListener = RRSessionStore.addListener(this._rrResponseReceived);
    //possibly run a method that will save the page every a couple of minutes
    //and flash a notice
    //maybe cache in redis?
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

  convertPlayersToArr = () => {
    return Object.keys(this.state.addedPlayers).map( (_id) => {
      return this.state.addedPlayers[_id];
    });
  }

  saveSession = (schemata, selectedSchema) => {
    saveSession({
      date: this.state.date,
      numOfPlayers: this.state.numPlayers,
      players: this.state.addedPlayers,
      selectedSchema: selectedSchema,
      schemata: schemata,
    }, this.props.club._id);
  }
  temporarilySaveSession = (schemata, selectedSchema) => {
    temporarySession({
      date: this.state.date,
      numOfPlayers: this.state.numPlayers,
      players: this.state.addedPlayers,
      selectedSchema: selectedSchema,
      schemata: schemata,
    }, this.props.club._id);
  }

  render(){
    if (!this.props.club){ 
      return <CircularProgress size={2} />
      }
    let allPlayers = this.props.club.players,
        addedPlayers = this.convertPlayersToArr().sort( (a, b)=>(b.rating - a.rating) ),
        { tab, date, numPlayers, error } = this.state;
  
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
                          addedPlayers={addedPlayers} 
                          saveSession={this.saveSession}
                          club={this.props.club}
                          date={moment(this.state.date).format("YYYY-MM-DD")}/>);

    return (
      <div className="tab-container">
         <Tabs tabItemContainerStyle={{backgroundColor: "#673AB7"}}contentContainerStyle={{  padding: "20px",
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
      </div>
    )
  }
}



export default NewRRSession;