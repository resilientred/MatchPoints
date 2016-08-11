import React from 'react';
import PlayerList from './playerList';

const PlayerGroup = (props) => {
  return (<div className="participant-reg">
    <div>
      <div className="add">
        <PlayerList players={props.allPlayers}
                    handleToggle={props.handleToggle}
                    title="All Players"
                    selectable={true} />
      </div>
      <div className="remove">
        <PlayerList players={props.addedPlayers} 
                    handleToggle={props.handleToggle}
                    title="Selected Players"
                    selectable={false}/>   
      </div>
    </div>
  </div>);
}
        // (<button className="player-buttons"
        //         onClick={props.addPlayer}>Add</button>
        //                 <button className="player-buttons"
        //         onClick={props.removePlayer}>Remove</button>)

export default PlayerGroup;
