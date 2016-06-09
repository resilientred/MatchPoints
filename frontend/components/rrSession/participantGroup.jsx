import React from 'react';

class ParticipantGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        groupId: React.PropTypes.number,
        players: React.PropTypes.array,
        numPlayers: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.number
          ]),
        changeNumOfPlayers: React.PropTypes.func
    }
    render() {
        return (<table> 
                 <thead>
                  <tr>
                    <th>Group {this.props.groupId + 1}</th>
                    <th>Name</th>
                    <th>Rating</th>
                  </tr>
                 </thead>
                 <tbody>
                  {
                    this.props.players.map( (player, i) => {
                        return <tr key={player._id}>
                                <td>{i + 1}</td>
                                <td>{player.name}</td>
                                <td>{player.rating}</td>
                               </tr>;              
                    })
                  }
                </tbody>
                <input type="number" 
                       onChange={this.props.changeNumOfPlayers.bind(null, this.props.numPlayers)}
                       value={this.props.numPlayers} />
                </table>
                );
    }
}

export default ParticipantGroup;
