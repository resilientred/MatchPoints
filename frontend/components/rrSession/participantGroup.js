import React from 'react';
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn } from "material-ui/Table"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import IconButton from "material-ui/IconButton/IconButton"
import PdfIcon from 'react-icons/lib/md/picture-as-pdf'
import UpArrow from 'react-icons/lib/md/keyboard-arrow-up'
import DownArrow from 'react-icons/lib/md/keyboard-arrow-down'

const moveDownArrow = (moveDown, i, bool) => {
  return !moveDown || !bool ? "" :
    <TableRowColumn style={{position: "absolute", left: "0", zIndex: 10 }}>
      <IconButton iconClassName="material-icons" 
                  tooltip="Move one player down"
                  onClick={moveDown.bind(null, i)}>
        <DownArrow />
      </IconButton>
    </TableRowColumn>    
}

const moveUpArrow = (moveUp, i, bool) => {
  return !moveUp || !bool ? "" :
    <TableRowColumn style={{position: "absolute", left: "0", zIndex: 10 }}>
      <IconButton iconClassName="material-icons" 
                  tooltip="Move one player up"
                  onClick={moveUp.bind(null, i)}>
        <UpArrow />
      </IconButton>
    </TableRowColumn>    

}

const ParticipantGroup = (props) => {
  return (<div>
    <IconButton iconClassName="material-icons" 
      style={{position: "absolute", right: "0", top: "100px", zIndex: 10}}
        onClick={props.pdfDownload} 
        disabled={!props.pdfs}
        tooltip={!props.pdfs ? "You must generate first" : "Download pdf" }><PdfIcon  /></IconButton>
    <Table selectable={false}
            multiSelectable={false}
            fixedHeader={true}> 
     <TableHeader displaySelectAll={false} enableSelectAll={false}
                      adjustForCheckbox={false}>
       <TableRow>
          <TableHeaderColumn>Group {props.groupId + 1}</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Rating</TableHeaderColumn>
        </TableRow>
     </TableHeader>
     <TableBody displayRowCheckbox={false} showRowHover={true} style={{position: "relative"}}>
      {
        props.players.map( (player, i, a) => {
            return <TableRow className="table-row" key={player._id}>
                    <TableRowColumn>{i + 1}</TableRowColumn>
                    <TableRowColumn>{player.name}</TableRowColumn>
                    <TableRowColumn>{player.rating}</TableRowColumn>
                    { moveUpArrow(props.moveUp, props.groupId, i === 0)}
                    { moveDownArrow(props.moveDown, props.groupId, i === a.length - 1) }
                   </TableRow>;              
        })
      }
    </TableBody>
    </Table>
  </div>);
}

export default ParticipantGroup;
