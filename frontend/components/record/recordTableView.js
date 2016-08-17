import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"

const cellStyle = {paddingRight: 0, paddingLeft: "5px", width: "7px"};

const RecordTableDetail = (props) => {

  var { sizeOfGroup, start, joinedPlayers, playerIds, scoreChange, result } = props;

  return (<Table selectable={false} multiSelectable={false}>
            <TableHeader 
                  displaySelectAll={false} 
                  adjustForCheckbox={false}
                  enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn colSpan="9" tooltip="Super Header" style={{textAlign: 'center'}}>
                   { "Group " + props.groupNum }
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                { 
                    [...Array(sizeOfGroup + 5)].map((_, i) => {
                      let content, style = {};
                      switch (i) {
                        case 0:
                          content = "1";
                          style = cellStyle;
                          break
                        case 1:
                          content = "Name";
                          break;
                        case 2:
                          content = "Before";
                          break;
                        case sizeOfGroup + 3:
                          content = "Change";
                          break;
                        case sizeOfGroup + 4:
                          content = "After";
                          break;
                        default:
                          content = i - 2;
                          break;

                      }
                      return <TableHeaderColumn key={"head" + (i - 1)} style={style}>
                          { content }
                        </TableHeaderColumn>
                    })
                }
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>         
                {
                  [...Array(sizeOfGroup)].map( (_, m) => {
                    let curPlayer = joinedPlayers[playerIds[m + start]],
                        ratingChangeSum = 0;

                    return <TableRow key={"row" + m}>{[...Array(sizeOfGroup + 5)].map( (_, n) => {
                      if (n === 0) return <TableRowColumn key={"row" + m + ":" + n} style={{paddingRight: 0, paddingLeft: "5px", width: "7px"}}>{ m + 1}</TableRowColumn>
                      if (n === m + 3) return <TableRowColumn key={"row" + m + ":" + n}>0</TableRowColumn>
                      let cellContent, style;
                      switch(n) {
                        case 1:
                          style = {whiteSpace: "initial", width: "20%", paddingRight: "0"}
                          cellContent = curPlayer.name;
                          break;
                        case 2:
                          cellContent = curPlayer.rating;
                          break;
                        case sizeOfGroup + 3:
                          cellContent = ratingChangeSum;
                          break;
                        case sizeOfGroup + 4:
                          cellContent = ratingChangeSum + +curPlayer.rating;
                          break;
                      }
                      if (n === sizeOfGroup + 3 || n === sizeOfGroup + 4 || n === 1 || n === 2){ 
                        return <TableRowColumn key={"row" + m + ":" + n} style={style}>{cellContent}</TableRowColumn>;
                      }
                      
                      if (!scoreChange) {
                        return <TableRowColumn key={"row" + m + ":" + n}>0</TableRowColumn>
                      }
                      ratingChangeSum += +scoreChange[m][n - 3];
                      return <TableRowColumn key={"row" + m + ":" + n}>
                          { scoreChange[m][n - 3] }
                        </TableRowColumn>
                      })}</TableRow>
                  })
                }    
            </TableBody>
          </Table>);
      
}  

export default RecordTableDetail;
