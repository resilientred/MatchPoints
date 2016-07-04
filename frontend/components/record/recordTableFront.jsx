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
      playerIds: React.PropTypes.array
    }
    render() {
        return <div className="front-side">         
            {
              [...Array(this.props.sizeOfGroup)].map( (_, m) => {
                var curPlayer = this.props.joinedPlayers[this.props.playerIds[m + this.props.start]];
                return <div className="row" key={"row" + m}>{[...Array(this.props.sizeOfGroup + 2)].map( (_, n) => {

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
                                 value={this.props.result[m][n - 2][0]} />

                          <input type="number" min="0" max="3" 
                                 key={"row" + m + ":" + n + "-2"} className="score" 
                                 onChange={this.props.updateResult.bind(this, m, n - 2, 1)} 
                                 value={this.props.result[m][n - 2][1]} />
                        </div> :  <div>
                          <input type="number" disabled
                                 key={"row" + m + ":" + n + "-1"} className="score"                             
                                 value={this.props.result[n - 2][m][1]} />

                          <input type="number" min="0" max="3"  disabled
                                 key={"row" + m + ":" + n + "-2"} className="score" 
                                 value={this.props.result[n - 2][m][0]} />
                        </div> 
                      }

                    </div>
                  })}</div>
              })
            }    
        </div>;
    }
}

export default RecordTableFront;
