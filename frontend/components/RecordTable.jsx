import React from 'react';

class RecordTable extends React.components {
	constructor(props){
		super(props);
	}
	render(){
    return <tr>
              <th>Group Id: {this.props.groupId}</th>
              <th>Name</th>
              <th>Rating</th>
              {
                Array.from
                    (
                     Array(this.props.numPlayers), 
                     ( (_, i) => <th>{i}</th> )
                    )
              }
          </tr>
	}
}

export default RecordTable;