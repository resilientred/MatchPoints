import React from 'react';
import ClientActions from '../actions/clientActions';
import PlayerStore from '../stores/playerStore';
import PlayerList from './playerList';
import PlayerForm from './playerForm';
import Modal from "react-modal";
import NewPlayerStyle from "../modalStyles/newPlayerModal";
export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayers: {},
      addedPlayers: {},
      selectedPlayer: {},
      selectedRemovePlayer: {},
      newPlayerModal: false
    }
  }
  componentDidMount(){
    ClientActions.fetchPlayers();
    PlayerStore.addListener(this._fetchedPlayers);
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

    this.setState({ addedPlayers: tempPlayers });
  }

  removePlayer = () => {
    let curPlayer = this.state.selectedRemovePlayer;
    let tempPlayers = this.state.addedPlayers;
    delete tempPlayers[curPlayer._id];

    this.setState({ addedPLayers: tempPlayers });
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

  render = () => {
    let allPlayers = this.state.allPlayers,
        addedPlayers = this.state.addedPlayers;
    return (
      <div className="player-container">
        <h3>Participant Registration</h3>
        <div>
          <PlayerList players={allPlayers}
                      selectPlayer={this.selectPlayer}
                      selectedPlayer={this.state.selectedPlayer}
                      title="All Players"/>
          <div className="buttons">
            { this.addButton() }
            { this.removeButton() }
          </div>
          <PlayerList players={addedPlayers} 
                      selectPlayer={this.selectRemovePlayer}
                      selectedPlayer={this.state.selectedRemovePlayer}
                      title="Selected Players"/>
        </div>
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


