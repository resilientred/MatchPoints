import React from 'react';
import PlayerList from './playerList';

const PlayerGroup = (props) => {
  return (<div className="participant-reg">
    <div>
      <div className="add">
        <PlayerList players={props.allPlayers}
                    selectPlayer={props.selectPlayer}
                    selectedPlayer={props.selectedPlayer}
                    hiddenPlayers={props.hiddenPlayers}
                    title="All Players"/>
        <button className="player-buttons"
                onClick={props.addPlayer}>Add</button>
      </div>
      <div className="remove">
        <PlayerList players={props.addedPlayers} 
                    selectPlayer={props.selectRemovePlayer}
                    selectedPlayer={props.selectedRemovePlayer}
                    hiddenPlayers={{}}
                    title="Selected Players"/>
        <button className="player-buttons"
                onClick={props.removePlayer}>Remove</button>              
      </div>
    </div>
  </div>);
}

export default PlayerGroup;
