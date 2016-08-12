import React from "react"
import AppBar from "material-ui/AppBar"
import IconButton from "material-ui/IconButton"
import FlatButton from "material-ui/FlatButton"
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const GroupNav = (props) => (
  <AppBar
    title="Grouping"
    onTitleTouchTap={() => props.toggleTab(2)}
    titleStyle={{cursor: "pointer"}}
    iconElementLeft={<IconButton><NavigationClose onClick={props.closeTab}/></IconButton>}
    iconElementRight={!props.opened ? "" : <FlatButton label="Save" onClick={props.saveSession}/>}
  />
)

export default GroupNav


