import React from 'react';

import Players from "./players";
class NewRRSession extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NewRRSession';
        this.state = {
          
        }
    }
    
    render() {
        return <div>
          <Players />
        </div>;
    }
}

export default NewRRSession;
