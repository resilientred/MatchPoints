import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import {Tabs, Tab} from 'material-ui/Tabs';
class RecordTableDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 0
    }
  }
  changeTab = (tab) => {
    this.setState({ tab });
  }
  render(){
    var { sizeOfGroup, start, joinedPlayers, playerIds, scoreChange, result } = this.props;

    return (<div className="group-table">
      <Tabs value={ this.state.tab }
            onChange={ this.changeTab }>
        <Tab label="Enter Result" value={0}>
          <Table selectable={false} multiSelectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                { 
                  [...Array(sizeOfGroup + 2)].map((_, i) => {
                    return <TableHeaderColumn key={"head" + (i - 1)}>
                        {
                          i === 0 ?  "Group " + this.props.groupNum  :
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
                    let curPlayer = joinedPlayers[playerIds[m + start]];
                    return <TableRow key={"row" + m}>{[...Array(sizeOfGroup + 2)].map( (_, n) => {
                      let content, disabled = false;
                      (function(i, j, props){
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
                                       disabled/>

                                <SelectField 
                                       style={{width: "50%"}}
                                       key={"row" + j + ":" + i + "-2"}
                                       value={result[i - 2][j][0]} 
                                       disabled/>
                              </div>)
                            }
                            break;
                        }
                      })(n, m, this.props);

                      return <TableRowColumn key={"row" + m + ":" + n} disabled={disabled}>{content}</TableRowColumn>;

                      })
                  }</TableRow>
                })         
              }    
            </TableBody>
          </Table>
        </Tab>
        <Tab label="View Result" value={1}>
          <Table selectable={false} multiSelectable={false}>
            <TableHeader 
                  displaySelectAll={false} 
                  adjustForCheckbox={false}>
              <TableRow>
                { 
                  !scoreChange || !scoreChange.length ? "" :
                    [...Array(sizeOfGroup + 5)].map((_, i) => {
                      let content;
                      switch (i) {
                        case 0:
                          content = "Group " + this.props.groupNum;
                          break;
                        case 1:
                          content = "Name";
                          break;
                        case 2:
                          content = "Rating Before";
                          break;
                        case sizeOfGroup + 3:
                          content = "Change";
                          break;
                        case sizeOfGroup + 4:
                          content = "Rating After";
                          break;
                        default:
                          content = i - 2;
                          break;

                      }
                      return <TableHeaderColumn key={"head" + (i - 1)}>
                          { content }
                        </TableHeaderColumn>
                    })
                }
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>         
                {
                  !scoreChange || !scoreChange.length ? "" :
                  [...Array(sizeOfGroup)].map( (_, m) => {
                    var curPlayer = joinedPlayers[playerIds[m + start]],
                        ratingChangeSum = 0;
                    return <TableRow key={"row" + m}>{[...Array(sizeOfGroup + 5)].map( (_, n) => {
                      if (m === (n - 3)) return <TableRowColumn key={"row" + m + ":" + n}>0</TableRowColumn>;
                      switch(n) {
                        case 0:
                          var cellContent = m + 1;
                          break;
                        case 1:
                          var cellContent = curPlayer.name;
                          break;
                        case 2:
                          var cellContent = curPlayer.rating;
                          break;
                        case sizeOfGroup + 3:
                          var cellContent = ratingChangeSum;
                          break;
                        case sizeOfGroup + 4:
                          var cellContent = ratingChangeSum + +curPlayer.rating;
                          break;
                      }
                      if (n === sizeOfGroup + 3 || n === sizeOfGroup + 4 || n === 0 || n === 1 || n === 2){ 
                        return <TableRowColumn key={"row" + m + ":" + n}>{cellContent}</TableRowColumn>;
                      }
                      ratingChangeSum += +scoreChange[m][n - 3];
                      return <TableRowColumn key={"row" + m + ":" + n}>
                          { scoreChange[m][n - 3] }
                        </TableRowColumn>
                      })}</TableRow>
                  })
                }    
            </TableBody>
          </Table>
        </Tab>
      </Tabs>
    </div>);
      
  }  
}
export default RecordTableDetail;
