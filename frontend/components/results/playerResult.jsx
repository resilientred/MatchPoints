import React, { Component } from 'react'
import Graph from "./graph"
import PlayerStore from "../../stores/playerStore"
import ClientActions from "../../actions/clientActions"

class PlayerQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    }
  }
  componentWillMount(){
    const playerId = this.props.params.playerId;

    this.qaListener = ClientActions.addListener(fetchedPlayerRecord);
    let player = PlayerStore.find(playerId);
    if (player){
      this.setState({ player })
    } else {
      ClientActions.fetchPlayerRecord(playerId);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.params.playerId === this.props.params.playerId){ 
      return false;
    } 
    return true;
  }
  
  componentWillReceiveProps(nextProps) {
    const playerId = nexProps.params.playerId;
    let player = PlayerStore.find(playerId);
    if (player){
      this.setState({ player })
    } else {
      ClientActions.fetchPlayerRecord(playerId);
    }
  }
  fetchedPlayerRecord = () => {
    this.setState({ player: PlayerStore.find(this.props.params.playerId) });
  }

  parseData(){
    return this.state.player.ratingHistory.map(history => history.newRating)
  }
  render() {
    if (!this.state.record) return <div>Loading</div>;

    return (
      <div>
        <Graph data={parseData()} />
      </div>
      );
  }
}

export default PlayerQuery