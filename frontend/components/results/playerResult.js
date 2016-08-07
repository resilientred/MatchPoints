import React, { Component } from 'react'
import Graph from "./graph"
import PlayerStore from "../../stores/playerStore"
import { fetchPlayerRecord } from "../../actions/clientActions"

export default class PlayerResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: PlayerStore.find(this.props.params.playerId)
    }
  }
  componentWillMount(){
    this.qaListener = PlayerStore.addListener(this._fetchedPlayerRecord);
  }
  // _checkIfCachedPlayers(playerId){
  //   let player = PlayerStore.find(playerId);
  //   if (player){
  //     this.setState({ player })
  //   } else {
  //     fetchPlayerRecord(playerId);
  //   }
  // }
  
  // _fetchedPlayerRecord = () => {
  //   this.setState({ player: PlayerStore.find(this.props.params.playerId) });
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.params.playerId === this.props.params.playerId){ 
      return false;
    } 
    return true;
  }

  componentWillReceiveProps(nextProps) {
    let player = PlayerStore.find(nexProps.params.playerId);
    this.setState({ player })
  }


  parseData(){
    return this.state.player.ratingHistory.map(history => history.newRating)
  }

  render() {
    if (!this.state.player) return <div>Loading...</div>;
   
    return <div className="player-query">
      <div><Graph data={this.parseData()} /></div>
    </div>;
  }
}
