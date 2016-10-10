import React, { PropTypes } from "react";
import Divider from "material-ui/Divider";
import PlayerList from "./playerList";
import SelectedPlayerList from "./selectedPlayerList";

const style = { position: "relative" };

const PlayerGroup = props => (
  (<div className="player-lists">
    <Divider style={style} />
    <PlayerList
      players={props.allPlayers}
      handleToggle={props.handleToggle}
      title="All Players"
      addedPlayers={props.objAddedPlayers}
      deletePlayer={props.deletePlayer}
    />
    <Divider style={style} />
    <SelectedPlayerList
      players={props.addedPlayers}
      handleToggle={props.handleToggle}
      title="Selected Players"
      addedPlayers={props.objAddedPlayers}
    />
    <Divider style={style} />
  </div>)
);

PlayerGroup.propTypes = {
  allPlayers: PropTypes.array,
  handleToggle: PropTypes.func,
  objAddedPlayers: PropTypes.object,
  deletePlayer: PropTypes.func,
  addedPlayers: PropTypes.array
};

export default PlayerGroup;
