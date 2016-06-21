import React from 'react';
import ClientActions from '../../actions/clientActions';
import UserActions from "../../actions/userActions";
import PlayerStore from '../../stores/playerStore';
import RRSessionActions from "../../actions/rrSessionActions";
import Calendar from "react-input-calendar";
import moment from "moment";
import 'moment-range'
import PlayerForm from './playerForm';
import Modal from "react-modal";
import NewPlayerStyle from "../../modalStyles/newPlayerModal";
import UserStore from "../../stores/userStore";
import CSRFStore from "../../stores/csrfStore";
import { browserHistory } from "react-router";
import Participants from "./participants";
import Grouping from "./grouping";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class NewRRSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayerModal: false,
      tab: 0,
      _csrf: null,
      date: moment(),
      numPlayers: 0,
      selectedPlayerTarget: null,
      selectedRemovePlayerTarget: null,
      allPlayers: {},
      addedPlayers: {},
      selectedPlayer: {},
      selectedRemovePlayer: {}
    }
    //should fetch all these from stores, so user can save their states
  }
  componentDidMount(){
    console.log(moment());
    this.psListener = PlayerStore.addListener(this._fetchedPlayers);
    ClientActions.fetchPlayers();
    this.csrfListener = CSRFStore.addListener(this._fetchedCSRF);
    UserActions.fetchCSRF();
    //possibly run a method that will save the page every a couple of minutes
    //and flash a notice
  }

  componentWillUnmount() {
    if (this.psListener) this.psListener.remove();
    if (this.usListener) this.usListener.remove();
  }

  _fetchedCSRF = () => {
    this.setState({ _csrf: CSRFStore.getCSRF() });
  }
  openModal(name){
    let modalObj = {};
    modalObj[name] = true;
    this.setState(modalObj);
  }

  closeModal(name){
    let modalObj = {};
    modalObj[name] = false;
    this.setState(modalObj);
  }

  _fetchedPlayers = () => {
    this.setState({allPlayers: PlayerStore.all()});
  }

  addPlayer = () => {
    let curPlayer = this.state.selectedPlayer;
    let tempPlayers = this.state.addedPlayers;
    if (tempPlayers[curPlayer._id]) return;

    tempPlayers[curPlayer._id] = curPlayer;
    this.setState({ 
      addedPlayers: this.state.addedPlayers, 
      numPlayers: ++this.state.numPlayers
    });
  }

  removePlayer = () => {
    let curPlayer = this.state.selectedRemovePlayer;
    let tempPlayers = this.state.addedPlayers;
    delete tempPlayers[curPlayer._id];

    this.setState({ 
      addedPLayers: tempPlayers,
      numPlayers: --this.state.numPlayers
    });
  }

  selectPlayer = (player) => {
    this.setState({selectedPlayer: player})
  }

  selectRemovePlayer = (player) => {
    this.setState({selectedRemovePlayer: player});
  }
  changeTab = (tab) => {
    this.setState({tab: tab});
  }
  handleChange = (field, moment) => {
    let obj = {};
    obj[field] = moment;
    this.setState(obj);
  }
  convertPlayersToArr = () => {
    let self = this;
    return Object.keys(this.state.addedPlayers).map( (_id) => {
      return this.state.addedPlayers[_id];
    });
  }

  saveSession = (schemata, selectedSchema, e) => {
    e.preventDefault();
    var admin = UserStore.getCurrentUser();
    
    if (!admin) browserHistory.push("/login");

    RRSessionActions.saveSession({
      date: this.state.date,
      numOfPlayers: this.state.numOfPlayers,
      addedPlayers: this.state.addedPlayers,
      selectedSchema: selectedSchema,
      schemata: schemata
    }, this.state._csrf, admin._id);

    //one way is to be able to adjust the counts of the players per group
    //which will automatically update the count of other group that has a deficit or overload
    //the other way is to just have a button that rotates the count
    //which is not viable (6544 but you want it to be 6454)
    //another way.. draggable! totally viable I think
    
    // simplest way.. the first way but not adjust the other groups' players
    //simply say not not enough player or something
  }
  newPlayer = () => {
    return this.state.tab === 0 ? <button onClick={this.openModal.bind(this, "newPlayerModal")}>New Player</button> :
         "";
  }
  render = () => {
    let allPlayers = this.state.allPlayers,
        addedPlayers = this.convertPlayersToArr().sort( (a, b)=>(b.rating - a.rating) ),
        groupingCallbacks = {
                selectPlayer: this.selectPlayer, 
                selectRemovePlayer: this.selectRemovePlayer, 
                addPlayer: this.addPlayer,
                removePlayer: this.removePlayer
              };
    let { modalIsOpen, tab, a, date, numPlayers, b, c, ...states} = this.state;

    return (
      <ReactCSSTransitionGroup transitionName="new-session" transitionAppear={true} 
                              transitionAppearTimeout={400}
                              transitionEnterTimeout={500}
                              transitionLeaveTimeout={500}>
        <div className="player-container">
          <ul className="player-nav">
            <li>
              <a onClick={this.changeTab.bind(null, 0)} 
                 className={this.state.tab === 0 ? "active" : ""}>
                 Participants
              </a>
            </li>
            <li>
              <a onClick={this.changeTab.bind(null, 1)}
                className={this.state.tab === 1 ? "active" : ""}>
                Grouping
              </a>
            </li>
          </ul>
          <div className="date">Date: <Calendar
              format="YYYY/MM/DD"
              date={this.state.date}
              onChange={this.handleChange.bind(null, "date")}/></div>
          <h3>Organization: To be inserted</h3>
          {
            tab === 1 ?
                <Grouping numPlayers={numPlayers} 
                          addedPlayers={addedPlayers} 
                          saveSession={this.saveSession}/>
                :
                <Participants {...states} {...groupingCallbacks} />         
          }
                
          {this.newPlayer()}
          <Modal isOpen={this.state.newPlayerModal} 
                  onRequestClose={this.closeModal.bind(this, "newPlayerModal")}
                  style={NewPlayerStyle}>
                  <PlayerForm closeModal={
                    this.closeModal.bind(this, "newPlayerModal")
                  }/>
          </Modal>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}


export default NewRRSession;