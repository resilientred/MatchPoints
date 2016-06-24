import React from 'react';

class RecordTable extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
      var start = this.props.start,
          sizeOfGroup = this.props.sizeOfGroup;
    return <table>
            <thead>
            <tr>
              {[...Array(sizeOfGroup + 1)].map((_, i) => {
                  if (i == 0) return <th>Group Num: {this.props.groupNum}</th>;
                  return <th>vs. {i}</th>;
                })
              }

            </tr>
          </thead>
          <tbody>
            <tr>
              {
                [,...Array(sizeOfGroup)].map( (_, m) => {
                  [...Array(sizeOfGroup)].map( (_, n) => {
                    if (n == 0) return <td className="cell">m</td>;
                    if (m === n) return <td className="greyed cell">Greyed</td>;
                    return <td className="cell">
                        { joinedPlayers[m] + " vs. " + joinedPlayers[n] }
                      </td>
                    })
                })
              }
              </tr>
          </tbody>
          </table>
	}
}

export default RecordTable;