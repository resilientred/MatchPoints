import React from "react";
import Divider from "material-ui/Divider";
import { PlayerList, SelectedPlayerList } from "components";

const style = { position: "relative" };

const Participants = (props) => {
  return (<div className="player-lists">
    <Divider style={style} />
    <PlayerList
      players={props.allPlayers}
      title="All Players"
      addedPlayers={props.addedPlayers}
      toggleRegister={props.toggleRegister}
    />
    <Divider style={style} />
    <SelectedPlayerList
      players={props.sortedPlayers}
      title="Selected Players"
      addedPlayers={props.addedPlayers}
      toggleRegister={props.toggleRegister}
    />
    <Divider style={style} />
  </div>);
};

export default Participants;
