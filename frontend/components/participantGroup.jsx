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
          ])
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
                </table>
                );
    }
}

export default ParticipantGroup;
