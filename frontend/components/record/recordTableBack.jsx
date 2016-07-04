import React from 'react';

class RecordTableBack extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RecordTableBack';
    }
    static propTypes = {
      start: React.PropTypes.number, 
      sizeOfGroup: React.PropTypes.number,
      joinedPlayers: React.PropTypes.object,
      playerIds: React.PropTypes.array,
      scoreChange: React.PropTypes.array
    }
    render() {
        return <tbody className="back-side">         
            {
              !this.props.scoreChange ? "" :
              [...Array(this.props.sizeOfGroup)].map( (_, m) => {
                var curPlayer = this.props.joinedPlayers[this.props.playerIds[m + this.props.start]],
                    ratingChangeSum = 0;
                return <tr key={"row" + m}>{[...Array(this.props.sizeOfGroup + 4)].map( (_, n) => {
                  if (m === (n - 2)) return <td key={"row" + m + ":" + n} className="greyed cell"></td>;
                  switch(n) {
                    case 0:
                      var cellContent = m + 1;
                      break;
                    case 1:
                      var cellContent = curPlayer.name;
                      break;
                    case this.props.sizeOfGroup + 2:
                      var cellContent = ratingChangeSum;
                      break;
                    case this.props.sizeOfGroup + 3:
                      var cellContent = ratingChangeSum + curPlayer.rating;
                      break;
                  }
                  if (n === this.props.sizeOfGroup + 2 || n === 0 || n === 1){ 
                    return <td key={"row" + m + ":" + n} className="cell">{cellContent}</td>;
                  }

                  var againstPlayer = this.props.joinedPlayers[this.props.playerIds[n + this.props.start - 2]];
                  ratingChangeSum += this.props.scoreChange[m][n - 2];
                  return <td key={"row" + m + ":" + n} className="cell">
                      { this.props.scoreChange[m][n - 2] }
                    </td>
                  })}</tr>
              })
            }    
        </tbody>;
    }
}

export default RecordTableBack;
