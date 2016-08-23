import React from 'react';
import PlayerList from './playerList';
import Divider from 'material-ui/Divider';

const PlayerGroup = (props) => {
  return (<div className="player-lists">
      <Divider style={{position: "relative"}}/>
      <PlayerList players={props.allPlayers}
                  handleToggle={props.handleToggle}
                  title="All Players"
                  selectable={true} 
                  addedPlayers={props.objAddedPlayers}
                  deletePlayer={props.deletePlayer}/>
      <Divider style={{position: "relative"}}/>    
      <PlayerList players={props.addedPlayers} 
                  handleToggle={props.handleToggle}
                  title="Selected Players"
                  selectable={false}
                  addedPlayers={props.objAddedPlayers}/>   
      <Divider style={{position: "relative"}}/>    
  </div>);
}


export default PlayerGroup;
