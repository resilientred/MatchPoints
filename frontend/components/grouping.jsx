import React from 'react';
import ParticipantGroup from './participantGroup';
class Grouping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          schemata: [],
          rangeOfPlayers: [6, 5, 4],
          selectedGroup: []
        }
    }

    static propTypes = {
      numPlayers: React.PropTypes.number,
      addedPlayers: React.PropTypes.array
    }

    static findSchemata(numPlayers, rangeOfPlayers = [6, 5, 4]){
      if (numPlayers < 0) return null;
      if (numPlayers === 0) return [[]];
      let possibilities = [],
          recursions = [];
      rangeOfPlayers.forEach((range, i)=>{
        recursions.push([range, Grouping.findSchemata(numPlayers - range, rangeOfPlayers.slice(i))]);
      })

      if (recursions.every(result => (result[1] === false))) return null;

      recursions.forEach((test) => {
        if (test[1]){
          possibilities = possibilities.concat(test[1].map( 
            result => [test[0]].concat(result)
          ));  
        }
      })

      return possibilities;
    }
    componentDidMount() {
      let schemata = Grouping.findSchemata(this.props.numPlayers, this.state.rangeOfPlayers);
      this.setState({ 
        schemata: schemata || [],
        selectedGroup: schemata.length ? schemata[0] : []
      })   
    }

    schemata() {
      if (this.state.schemata.length){
        return <select value={this.state.selectedGroup} 
                       onChange={this.changeSchema}>Select the grouping schema:
          {
            this.state.schemata.map( (schema, i)=>{
              return <option value={schema}>{schema.join(", ")}</option>;
            })
          }
        </select>;
      } else {
        return <h3>Nothing is available...try selecting more players..</h3>;
      }
    }
    changeSchema = (e) => {
      this.setState({selectedGroup: e.target.value}); 
    }
    render() {
      let totalPlayerAdded = 0,
          self = this;
      return <div className="grouping">
        {this.schemata()}
        { 
           this.state.selectedGroup.map( (numPlayers, i) => {
              totalPlayerAdded += numPlayers;
              return <ParticipantGroup key={i} groupId={i}
                        numPlayers={numPlayers}
                        players={self.props.addedPlayers.slice(totalPlayerAdded - numPlayers, totalPlayerAdded)}
                      />;
           })
        }

      </div>;
    }
}

export default Grouping;
