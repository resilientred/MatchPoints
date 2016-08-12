import React from 'react';
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn } from "material-ui/Table"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import TextField from "material-ui/TextField"
const rangeOfPlayers = [4, 5, 6, 7];
//this should be passed down from the server

const ParticipantGroup = (props) => {
  return (<div>
    <Table selectable={false}
            multiSelectable={false}
            fixedHeader={true}> 
     <TableHeader displaySelectAll={false} enableSelectAll={false}>
       <TableRow>
          <TableHeaderColumn>Group {props.groupId + 1}</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Rating</TableHeaderColumn>
        </TableRow>
     </TableHeader>
     <TableBody displayRowCheckbox={false} showRowHover={true}>
      {
        props.players.map( (player, i) => {
            return <TableRow className="table-row" key={player._id}>
                    <TableRowColumn>{i + 1}</TableRowColumn>
                    <TableRowColumn>{player.name}</TableRowColumn>
                    <TableRowColumn>{player.rating}</TableRowColumn>
                   </TableRow>;              
        })
      }
    </TableBody>
    </Table>
    <SelectField value={props.numPlayers} onChange={() => props.changeNumOfPlayers(props.numPlayers)}>
      {
        rangeOfPlayers.map((i) => <MenuItem value={i} key={i}text={i} />)
      }
    </SelectField>
  </div>);
}

export default ParticipantGroup;
