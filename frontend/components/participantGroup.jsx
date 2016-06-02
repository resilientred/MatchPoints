import React from 'react';

class ParticipantGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
          {
            this.props.players.map( (player) => {
                return <li key={player._id}>{player.name}</li>;              
            })
          }
        </div>;
    }
}

export default ParticipantGroup;
