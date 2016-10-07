import React, { PropTypes } from "react";
import Divider from "material-ui/Divider";
import PlayerList from "./playerList";

const style = { position: "relative" };

const PlayerGroup = props => (
  (<div className="player-lists">
    <Divider style={style} />
    <PlayerList
      players={props.allPlayers}
      handleToggle={props.handleToggle}
      title="All Players"
      selectable={Boolean(true)}
      addedPlayers={props.objAddedPlayers}
      deletePlayer={props.deletePlayer}
    />
    <Divider style={style} />
    <PlayerList
      players={props.addedPlayers}
      handleToggle={props.handleToggle}
      title="Selected Players"
      selectable={false}
      addedPlayers={props.objAddedPlayers}
    />
    <Divider style={style} />
  </div>)
);

PlayerGroup.propTypes = {
  allPlayers: PropTypes.Array,
  handleToggle: PropTypes.function,
  objAddedPlayers: PropTypes.object,
  deletePlayer: PropTypes.function,
  addedPlayers: PropTypes.Array
};

export default PlayerGroup;
