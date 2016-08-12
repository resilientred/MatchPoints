import React from "react"
import AppBar from "material-ui/AppBar"
import IconButton from "material-ui/IconButton"
import FlatButton from "material-ui/FlatButton"
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const PlayerNav = (props) => (
  <AppBar
    title="Player Registration"
    titleStyle={{cursor: "pointer"}}
    onTitleTouchTap={() => props.toggleTab(1)}
    iconElementLeft={<IconButton onClick={props.closeTab}><NavigationClose /></IconButton>}
    iconElementRight={!props.opened ? "" : <FlatButton label="New Player" onClick={props.openModal}/>}
  />
)

export default PlayerNav


