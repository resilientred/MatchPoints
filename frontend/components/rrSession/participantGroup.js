import React from 'react';

const ParticipantGroup = (props) => {
  return (<div>
    <table> 
     <thead>
       <tr>
          <th>Group {props.groupId + 1}</th>
          <th>Name</th>
          <th>Rating</th>
        </tr>
     </thead>
     <tbody>
      {
        props.players.map( (player, i) => {
            return <tr className="table-row" key={player._id}>
                    <td>{i + 1}</td>
                    <td>{player.name}</td>
                    <td>{player.rating}</td>
                   </tr>;              
        })
      }
    </tbody>
    </table>
    <input type="number" 
           onChange={props.changeNumOfPlayers.bind(null, props.numPlayers)}
           value={props.numPlayers} />
  </div>);
}

export default ParticipantGroup;
