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
        return <tbody className="front-side">         
            {
              [...Array(this.props.sizeOfGroup)].map( (_, m) => {
                var curPlayer = this.props.joinedPlayers[this.props.playerIds[m + this.props.start]];
                return <tr key={"row" + m}>{[...Array(this.props.sizeOfGroup + 1)].map( (_, n) => {

                  if (n == 0) return <td key={"row" + m + ":" + n} className="cell">{m + 1}</td>;
                  if ((m + 1) === n) return <td key={"row" + m + ":" + n} className="greyed cell"></td>;

                  var againstPlayer = this.props.joinedPlayers[this.props.playerIds[n + this.props.start - 1]];
                  return <td key={"row" + m + ":" + n} className="cell">
                      <ul>
                        <li>{ curPlayer.name }</li>
                        <li>{ "Rating: " + curPlayer.rating }</li>
                        <li>vs.</li>
                        <li>{ againstPlayer.name }</li> 
                        <li>{ "Rating: " + againstPlayer.rating }</li>
                      </ul>
                      {
                        n > m ?
                        <div>
                          <input type="number" min="0" max="3" 
                                 key={"row" + m + ":" + n + "-1"} className="score" 
                                 onChange={this.props.updateResult.bind(this, m, n - 1, 0)} 
                                 value={this.props.result[m][n - 1][0]} />

                          <input type="number" min="0" max="3" 
                                 key={"row" + m + ":" + n + "-2"} className="score" 
                                 onChange={this.props.updateResult.bind(this, m, n - 1, 1)} 
                                 value={this.props.result[m][n - 1][1]} />
                        </div> :  <div>
                          <input type="number" disabled
                                 key={"row" + m + ":" + n + "-1"} className="score"                             
                                 value={this.props.result[n - 1][m][1]} />

                          <input type="number" min="0" max="3"  disabled
                                 key={"row" + m + ":" + n + "-2"} className="score" 
                                 value={this.props.result[n - 1][m][0]} />
                        </div> 
                      }

                    </td>
                  })}</tr>
              })
            }    
        </tbody>;
    }
}

export default RecordTableFront;
