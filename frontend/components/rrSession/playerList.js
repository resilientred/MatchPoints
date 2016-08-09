import React from 'react';

const PlayerList = ({players, ...props}) => {
   let players = props.players, playerLists = [];

  for (let _id in players){
    let hideClassName = props.hiddenPlayers[_id] ? " hidden-name" : "";

    if (players.hasOwnProperty(_id)){
      let cur_player = players[_id];
      playerLists.push(<li key={_id} 
                      onClick={props.selectPlayer.bind(null, cur_player)}
                      className={ (_id === props.selectedPlayer._id ? 
                                  "selected" : "not-selected") + hideClassName}>
                        <div>{cur_player.name}</div>
                        <div>{cur_player.rating}</div>
                  </li>);
    }
  }
  return (
    <div className="player-list">
      <div className="list-title">{props.title}</div>
      <ul>{playerLists}</ul>
    </div>
  );
}

export default PlayerList;