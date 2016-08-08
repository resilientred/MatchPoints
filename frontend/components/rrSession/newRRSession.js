import React from 'react';
import moment from "moment";
import 'moment-range'
import Modal from "react-modal";
import Calendar from "react-input-calendar";
import { browserHistory } from "react-router";

import { fetchPlayers } from '../../actions/clientActions';
import { saveSession } from "../../actions/rrSessionActions";

// import PlayerStore from '../../stores/playerStore';
import RRSessionStore from "../../stores/rrSessionStore";
import PlayerForm from './playerForm';
import NewPlayerStyle from "../../modalStyles/newPlayerModal";
import ClubStore from "../../stores/clubStore";
import Participants from "./participants";
import Grouping from "./grouping";


export default class NewRRSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayerModal: false,
      tab: 0,
      date: moment(),
      numPlayers: 0,
      error: null,
      hiddenPlayers: {},
      addedPlayers: {},
      selectedPlayer: {},
      selectedRemovePlayer: {}
    }
  }
  componentDidMount() {
    this.csListener = ClubStore.addListener(this._clubChanged);
    //future things to think about.. storing separate entry in player store
    //for querying purposes
    this.rrListener = RRSessionStore.addListener(this._rrResponseReceived);
    //possibly run a method that will save the page every a couple of minutes
    //and flash a notice
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
  openModal(name){
    this.setState({[name]: true});
  }
  closeModal(name){
    this.setState({[name]: false});
  }
  _clubChanged = () => {
    this.setState({ club: ClubStore.getCurrentClub(),
      newPlayerModal: false });
  }

  addPlayer = () => {
    var curPlayer = this.state.selectedPlayer,
        tempPlayers = Object.assign({}, this.state.addedPlayers);
    if (tempPlayers[curPlayer._id]) return;
    tempPlayers[curPlayer._id] = curPlayer;

    this.state.hiddenPlayers[curPlayer._id] = true;
    this.setState({ 
      addedPlayers: tempPlayers, 
      numPlayers: ++this.state.numPlayers
    });
  }

  removePlayer = () => {
    var curPlayer = this.state.selectedRemovePlayer;
    var tempPlayers = Object.assign({}, this.state.addedPlayers);
    delete tempPlayers[curPlayer._id];

    delete this.state.hiddenPlayers[curPlayer._id];
    this.setState({ 
      addedPLayers: tempPlayers,
      numPlayers: --this.state.numPlayers
    });
  }

  selectPlayer = (player, e) => {
    this.setState({
      selectedPlayer: player, 
      selectedPlayerTarget: e.target
    });
  }

  selectRemovePlayer = (player) => {
    this.setState({selectedRemovePlayer: player});
  }
  changeTab = (tab) => {
    this.setState({tab: tab});
  }
  handleChange = (field, moment) => {
    this.setState({[field]: moment});
  }
  convertPlayersToArr = () => {
    var self = this;
    return Object.keys(this.state.addedPlayers).map( (_id) => {
      return this.state.addedPlayers[_id];
    });
  }

  saveSession = (schemata, rangeOfPlayer, selectedSchema, e) => {
    e.preventDefault();
    var club_id = this.props.club._id;
    saveSession({
      date: this.state.date.toDate(),
      numOfPlayers: this.state.numPlayers,
      players: this.state.addedPlayers,
      selectedSchema: selectedSchema,
      schemata: schemata,
    }, club_id);
  }
  newPlayer = () => {
    return this.state.tab === 0 ? 
        <button className="new-player-modal" onClick={this.openModal.bind(this, "newPlayerModal")}>
          New Player
        </button> : "";
  }
  render(){
    if (!this.props.club){ 
      return <h3>Something went wrong...</h3>;
      }
    let allPlayers = this.props.club.players,
        addedPlayers = this.convertPlayersToArr().sort( (a, b)=>(b.rating - a.rating) ),
        groupingCallbacks = {
                selectPlayer: this.selectPlayer, 
                selectRemovePlayer: this.selectRemovePlayer, 
                addPlayer: this.addPlayer,
                removePlayer: this.removePlayer
              };
    let { modalIsOpen, tab, _, date, numPlayers, error, ...states} = this.state;
    let title, grouping;

    if (tab === 1){
      title = "Grouping";
      grouping =  <Grouping numPlayers={numPlayers} 
                          addedPlayers={addedPlayers} 
                          saveSession={this.saveSession}/>
    } else {
      title = "Participant Registration";
      grouping = <Participants {...states} allPlayers={allPlayers} {...groupingCallbacks} />    
    }

    return (
        <div className="player-container">
          <h1>{ error }</h1>
          <ul className="player-nav">
            <li>
              <a onClick={this.changeTab.bind(null, 0)} 
                 className={tab === 0 ? "active" : ""}>
                 Participants
              </a>
            </li>
            <li>
              <a onClick={this.changeTab.bind(null, 1)}
                className={tab === 1 ? "active" : ""}>
                Grouping
              </a>
            </li>
          </ul>
          <div className="date">Date: <Calendar
              format="YYYY/MM/DD"
              date={date}
              onChange={this.handleChange.bind(null, "date")}/></div>
          <h3>Organization: { this.props.club.clubName }</h3>
          <h3>{this.props.club.title}</h3>
          { this.newPlayer() }
          { grouping }
                
          <Modal isOpen={this.state.newPlayerModal} 
                  onRequestClose={this.closeModal.bind(this, "newPlayerModal")}
                  style={NewPlayerStyle}>
                  <PlayerForm closeModal={
                    this.closeModal.bind(this, "newPlayerModal")
                  }/>
          </Modal>
        </div>
    )
  }
}


export default NewRRSession;