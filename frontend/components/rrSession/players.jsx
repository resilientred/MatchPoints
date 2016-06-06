import React from 'react';
import ClientActions from '../../actions/clientActions';
import UserActions from "../../actions/userActions";
import PlayerStore from '../../stores/playerStore';
import RRSessionActions from "../../acitons/rrSessionActions";

import PlayerForm from './playerForm';
import Modal from "react-modal";
import NewPlayerStyle from "../../modalStyles/newPlayerModal";
import UserStore from "../../stores/userStore";
import { browserHistory } from "react-router";
import Participants from "./participants";
import Grouping from "./grouping";

export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayerModal: false,
      tab: 0,
      numPlayers: 0,
      allPlayers: {},
      addedPlayers: {},
      selectedPlayer: {},
      selectedRemovePlayer: {}
    }
    //should fetch all these from stores, so user can save their states
  }
  componentDidMount = () => {
    ClientActions.fetchPlayers();
    UserActions.fetchCurrentUser();
    this.psListener = PlayerStore.addListener(this._fetchedPlayers);
    this.usListener = UserStore.addListener(this.redirect);
    //possibly run a method that will save the page every a couple of minutes
    //and flash a notice
  }

  componentWillUnmount() {
    if (this.psListener) this.psListener.remove();
    if (this.usListener) this.usListener.remove();
  }

  redirect(){
    if (!UserStore.getCurrentUser()){
      browserHistory.push("/");
    } 
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


  sortPlayer = () => {
    //it might be better to have a heap.. since I might want to do promotions..
    this.setState({
      
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
  convertPlayersToArr = () => {
    let self = this;
    return Object.keys(this.state.addedPlayers).map( (_id) => {
      return this.state.addedPlayers[_id];
    });
  }
  saveSesion = (e) =>{
    e.preventDefault();
    RRSessionActions.saveSession({
      organization: this.state.currentUser._id,
      addedPlayers: this.state.addedPlayers,
      schema: this.state.schema
    });
    //also need the schema to be changeable...(5444 to 4544)
    //very complicated
    //one way is to be able to adjust the counts of the players per group
    //which will automatically update the count of other group that has a deficit or overload
    //the other way is to just have a button that rotates the count
    //which is not viable (6544 but you want it to be 6454)
    //another way.. draggable! totally viable I think
    
    // simplest way.. the first way but not adjust the other groups' players
    //simply say not not enough player or something

    //I don't know how players can be promotoed..
    //If I use a heap, I assume I can alter the priority..
    //i.e. when there are two values, I will look into the one that has priority first
    //or just have a function that switch players from a lower ranking group
    //to the last player in the group .. I think this is more efficient
    //there's no guarantee that I can adjust priority correctly
    //which may end up being more costly in time complexity

    //then there should be a tab on the top to view svaed session...
    //and then they have a choice to publish the results
    //results won't be shown until they finalize but they can still amend
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



    let { modalIsOpen, tab, numPlayers, ...states} = this.state;

    return (
      <div className="player-container">
        <div>
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
        </div>  
        <h3>Date: To be inserted</h3>
        <h3>Organization: To be inserted</h3>
        {
          tab === 1 ?
              <Grouping numPlayers={numPlayers} addedPlayers={addedPlayers}/>
              :
              <Participants {...states} {...groupingCallbacks} />         
        }
        <button onClick={this.saveSession}>Save</button>
        <button onClick={this.openModal.bind(this, "newPlayerModal")}>New Player</button>
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


