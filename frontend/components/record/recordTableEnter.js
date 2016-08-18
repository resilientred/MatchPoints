import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import {Tabs, Tab} from 'material-ui/Tabs'
const style = {paddingLeft: "0"}
const RecordTableDetail = (props) => {

    var { sizeOfGroup, start, joinedPlayers, playerIds, scoreChange, result } = props;
    return (<Table selectable={false} multiSelectable={false} wrapperStyle={{minWidth: "650px" }}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                { 
                  [...Array(sizeOfGroup + 2)].map((_, i) => {
                    return <TableHeaderColumn key={"head" + (i - 1)} style={ i === 1 ? style : {}}>
                        {
                          i === 0 ?  "Group " + props.groupNum  :
                            i === 1 ? "Name" : "vs. " + (i - 1)
                        }
                      </TableHeaderColumn>
                  })
                }
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {
                  [...Array(sizeOfGroup)].map( (_, m) => {
                    let curPlayer = joinedPlayers[m + start];
                    return <TableRow key={"row" + m}>{[...Array(sizeOfGroup + 2)].map( (_, n) => {
                      let content, cellStyle, disabled = false;
                      (function(i, j){
                        switch(i){
                          case 0:
                            content = j + 1;
                            break;
                          case j + 2:
                            content = null;
                            disabled = true;
                            break;
                          case 1:
                            content = (<h3>
                                        { curPlayer.name }<br />
                                        { "Rating: " + curPlayer.rating }
                                      </h3>)
                            cellStyle = style
                            break;
                          default:
                            if ((i - 2) > j){
                              content = (<div className="score-div">
                                <SelectField
                                       style={{marginRight: "5px", width: "50%"}}
                                       key={"row" + j + ":" + i + "-1"} 
                                       onChange={props.updateResult.bind(null, j, i - 2, 0)} 
                                       value={result[j][i - 2][0]}>
                                  <MenuItem value={0} primaryText="0" />
                                  <MenuItem value={1} primaryText="1" />
                                  <MenuItem value={2} primaryText="2" />
                                  <MenuItem value={3} primaryText="3" disabled={result[j][i - 2][1] === 3}/>
                                </SelectField>
                                <SelectField
                                       style={{width: "50%"}}
                                       key={"row" + j + ":" + i + "-2"}
                                       onChange={props.updateResult.bind(null, j, i - 2, 1)} 
                                       value={result[j][i - 2][1]}>
                                  <MenuItem value={0} primaryText="0" />
                                  <MenuItem value={1} primaryText="1" />
                                  <MenuItem value={2} primaryText="2" />
                                  <MenuItem value={3} primaryText="3" disabled={result[j][i - 2][0] === 3}/>
                                </SelectField>
                              </div>)
                            } else {
                              content = (<div>
                                <SelectField 
                                       style={{marginRight: "5px", width: "50%"}}
                                       key={"row" + j + ":" + i + "-1"}                             
                                       value={result[i - 2][j][1]} 
                                       disabled>
                                        <MenuItem value={0} primaryText="0" />
                                        <MenuItem value={1} primaryText="1" />
                                        <MenuItem value={2} primaryText="2" />
                                        <MenuItem value={3} primaryText="3" />
                                       </SelectField>

                                <SelectField 
                                       style={{width: "50%"}}
                                       key={"row" + j + ":" + i + "-2"}
                                       value={result[i - 2][j][0]} 
                                       disabled>
                                        <MenuItem value={0} primaryText="0" />
                                        <MenuItem value={1} primaryText="1" />
                                        <MenuItem value={2} primaryText="2" />
                                        <MenuItem value={3} primaryText="3" />
                                       </SelectField>
                              </div>)
                            }
                            break;
                        }
                      })(n, m);

                      return <TableRowColumn style={cellStyle} key={"row" + m + ":" + n} disabled={disabled}>{content}</TableRowColumn>;

                      })
                  }</TableRow>
                })         
              }    
            </TableBody>
          </Table>); 
}
export default RecordTableDetail;
