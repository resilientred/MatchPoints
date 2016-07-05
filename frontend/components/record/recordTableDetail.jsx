import React from 'react';

class RecordTableFront extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RecordTableFront';
    }


    static propTypes = {
      start: React.PropTypes.number, 
      sizeOfGroup: React.PropTypes.number,
      joinedPlayers: React.PropTypes.object,
      playerIds: React.PropTypes.array,
      scoreChange: React.PropTypes.array,
      result: React.PropTypes.array,
      updateResult: React.PropTypes.func
    }
    render() {
        var sizeOfGroup = this.props.sizeOfGroup,
            start = this.props.start,
            joinedPlayers = this.props.joinedPlayers,
            playerIds = this.props.playerIds,
            scoreChange = this.props.scoreChange,
            result = this.props.result;
        return <div>
        <div className="table-header">
          {
            [...Array(sizeOfGroup + 2)].map((_, i) => {
              return <div key={"head" + (i - 1)}>
                  {
                    i === 0 ?  "Group " + this.props.groupNum  :
                      i === 1 ? "Name" : "vs. " + (i - 1)
                  }
                </div>
            })
          }
        </div>
        <div className="front-side">         
            {
              [...Array(sizeOfGroup)].map( (_, m) => {
                var curPlayer = joinedPlayers[playerIds[m + start]];
                return <div className="row" key={"row" + m}>{[...Array(sizeOfGroup + 2)].map( (_, n) => {

                  if (n === 0) return <div key={"row" + m + ":" + n} className="cell">{m + 1}</div>;
                  if ((m) === n - 2) return <div key={"row" + m + ":" + n} className="greyed cell"></div>;
                  if (n === 1) return <div key={"row" + m + ":" + n} className="cell">
                      <ul>
                        <li>{ curPlayer.name }</li>
                        <li>{ "Rating: " + curPlayer.rating }</li>
                      </ul>
                      </div>
                  return <div key={"row" + m + ":" + n} className="cell">
                      {
                        (n - 2) > m ?
                        <div>
                          <input type="number" min="0" max="3" 
                                 key={"row" + m + ":" + n + "-1"} className="score" 
                                 onChange={this.props.updateResult.bind(this, m, n - 2, 0)} 
                                 value={result[m][n - 2][0]} />

                          <input type="number" min="0" max="3" 
                                 key={"row" + m + ":" + n + "-2"} className="score" 
                                 onChange={this.props.updateResult.bind(this, m, n - 2, 1)} 
                                 value={result[m][n - 2][1]} />
                        </div> :  <div>
                          <input type="number" disabled
                                 key={"row" + m + ":" + n + "-1"} className="score"                             
                                 value={result[n - 2][m][1]} />

                          <input type="number" min="0" max="3"  disabled
                                 key={"row" + m + ":" + n + "-2"} className="score" 
                                 value={result[n - 2][m][0]} />
                        </div> 
                      }

                    </div>
                  })}</div>
              })
            }    
        </div>
        <div className="table-header">
          { 
            !scoreChange || !scoreChange.length ? "" :
              [...Array(sizeOfGroup + 5)].map((_, i) => {
                return <div key={"head" + (i - 1)}>
                    {
                      i === 0 ?  "Group " + this.props.groupNum  :
                        i === 1 ? "Name" : 
                          i === 2 ? "Rating Before" : 
                            i === sizeOfGroup + 3 ? "Change" :
                              i === sizeOfGroup + 4 ? "Rating After" :
                                i - 2
                    }
                  </div>
              })
          }
        </div>
        <div className="back-side">         
            {
              !scoreChange || !scoreChange.length ? "" :
              [...Array(sizeOfGroup)].map( (_, m) => {
                var curPlayer = joinedPlayers[playerIds[m + start]],
                    ratingChangeSum = 0;
                return <div className="row" key={"row" + m}>{[...Array(sizeOfGroup + 5)].map( (_, n) => {
                  if (m === (n - 3)) return <div key={"row" + m + ":" + n} className="cell">0</div>;
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
                      var cellContent = ratingChangeSum + curPlayer.rating;
                      break;
                  }
                  if (n === sizeOfGroup + 3 || n === 0 || n === 1){ 
                    return <div key={"row" + m + ":" + n} className="cell">{cellContent}</div>;
                  }

                  var againstPlayer = joinedPlayers[playerIds[n + start - 3]];
                  ratingChangeSum += scoreChange[m][n - 3];
                  return <div key={"row" + m + ":" + n} className="cell">
                      { scoreChange[m][n - 3] }
                    </div>
                  })}</div>
              })
            }    
        </div>
      </div>;
    }
}

export default RecordTableFront;
