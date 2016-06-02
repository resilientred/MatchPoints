import React from 'react';
import ClientActions from '../actions/clientActions';
import PlayerStore from '../stores/playerStore';

import PlayerForm from './playerForm';
import Modal from "react-modal";
import NewPlayerStyle from "../modalStyles/newPlayerModal";
import UserStore from "../stores/userStore";
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
  componentDidMount(){
    ClientActions.fetchPlayers();
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
    //     let curPlayer = this.state.selectedRemovePlayer;
    // let tempPlayers = this.state.addedPlayers;
    // for (let i = 0; i < tempPlayers.length; i++){
    //   if (curPlayer._id === tempPlayers[i].id){
    //     tempPlayers.splice(i, 1);
    //     this.setState({ 
    //       addedPLayers: tempPlayers,
    //       numPlayers: --this.state.numPlayers
    //     });
    //     return;

        //is this a good choice? 
        //obj is so much faster..
    //   }
    // }
  }
  addButton = () => {
    return (
      <button className="playerButton"
          onClick={this.addPlayer}>Add</button>
      )
  }
  removeButton = () => {
    return (
      <button className="playerButton"
          onClick={this.removePlayer}>Remove</button>
          )
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
  render = () => {
    let allPlayers = this.state.allPlayers,
        addedPlayers = this.convertPlayersToArr().sort( (a, b)=>(b.rating - a.rating) ),
        groupingCallbacks = {
                selectPlayer: this.selectPlayer, 
                selectRemovePlayer: this.selectRemovePlayer, 
                addButton: this.addButton,
                removeButton: this.removeButton
              };



    let { modalIsOpen, tab, numPlayers, ...states} = this.state;

    return (
      <div className="player-container">
        <div>
          <ul className="player-nav">
            <li>
              <a onClick={this.changeTab.bind(null, 0)}>Participants</a>
            </li>
            <li>
              <a onClick={this.changeTab.bind(null, 1)}>Grouping</a>
            </li>
          </ul>
        </div>
       
        {
          tab === 1 ?
              <Grouping numPlayers={numPlayers} addedPlayers={addedPlayers}/>
              :
              <Participants {...states} {...groupingCallbacks} />         
        }

        <button onClick={this.openModal.bind(this, "newPlayerModal")}>New Player</button>
        <Modal isOpen={modalIsOpen} 
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


