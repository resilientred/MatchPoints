import React from 'react';

class RecordTable extends React.Component {
	constructor(props){
		super(props);
	}

  static propTypes = {
    groupNum: React.PropTypes.number.isRequired,
    start: React.PropTypes.number.isRequired,
    joinedPlayers: React.PropTypes.object.isRequired,
    sizeOfGroup: React.PropTypes.number.isRequired
  }

	render(){
      var start = this.props.start,
          sizeOfGroup = this.props.sizeOfGroup,
          joinedPlayers = this.props.joinedPlayers,
          playerIds = Object.keys(joinedPlayers);
    return <table className="record-table">
            <thead>
            <tr>
              {[...Array(sizeOfGroup)].map((_, i) => {
                  if (i == 0) return <th key={"head" + i}>Group: {this.props.groupNum}</th>;
                  return <th key={"head" + i}>vs. {i}</th>;
                })
              }

            </tr>
          </thead>
          <tbody>
            
              {
                [...Array(sizeOfGroup)].map( (_, m) => {
                  var curPlayer = joinedPlayers[playerIds[m + start]];
                  return <tr>{[...Array(sizeOfGroup)].map( (_, n) => {
                    var againstPlayer = joinedPlayers[playerIds[n + start]];

                    if (n == 0) return <td key={"row" + m + ":" + n} className="cell">{m + 1}</td>;
                    if (m + 1 === n) return <td key={"row" + m + ":" + n} className="greyed cell"></td>;

                    return <td key={"row" + m + ":" + n} className="cell">
                        <ul>
                          <li>{ curPlayer.name }</li>
                          <li>{ curPlayer.rating }</li>
                          <li>vs.</li>
                          <li>{ againstPlayer.name }</li> 
                          <li>{ "Rating: "+ againstPlayer.rating }</li>
                        </ul>
                      </td>
                    })}</tr>
                })
              }
              
          </tbody>
          </table>
	}
}

export default RecordTable;