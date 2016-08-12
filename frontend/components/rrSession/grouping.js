import React from 'react'
import ParticipantGroup from './participantGroup'
import { findSchemata } from "../../methods/findSchema"
import { generatePDF, fetchPDFLinks, downloadPDF } from "../../actions/clientActions"
import PDFStore from "../../stores/pdfStore"
import RaisedButton from "material-ui/RaisedButton"

class Grouping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          schemata: [[]],
          rangeOfPlayers: [6, 5, 4],
          selectedGroup: [],
          pdfs: null,
          generated: false
        }
    }   
    componentWillMount() {
      let pdfs = PDFStore.getPDF();
      this.pListener = PDFStore.addListener(this._fetchedPDF);
      this.setState({pdfs})
      if (!pdfs){
        fetchPDFLinks(this.props.club._id);
      }
    }
    componentWillUnmount() {
     this.pListener.remove(); 
    }
    _fetchedPDF = () => {
      this.setState({pdfs: PDFStore.getPDF()})
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.numPlayers === this.props.numPlayers){
        return false; //doubtful.. what if player changes
      } else {
        let schemata = findSchemata(nextProps.numPlayers, this.state.rangeOfPlayers)
        this.state.schemata = schemata.length ? schemata : [[]];
        this.state.selectedGroup = schemata.length ? schemata[0] : "";
        return true;
     }
    }
    schemata() {
      if (this.state.schemata.length){
        return <select value="" 
                       onChange={this.changeSchema}>Select the grouping schema:
          <option value=""></option>;
          {
            this.state.schemata.map( (schema, i)=>{
              return <option key={schema} value={schema}>{schema.join(", ")}</option>;
            })
          }
        </select>;
      } else {
        return <p>Nothing is available...<br />Try selecting more players..</p>;
      }
    }

    changeSchema = (e) => {
      this.totalPlayerAdded = 0;
      this.setState({ selectedGroup: e.target.value.split(",") }); 
    }
    generatePDF = () => {
      if (this.state.generated){
        alert("You may only generate once every 30secs")
        return;
      }
      if (!this.schemata[0].length){
        alert("There are no players yet :(.")
        return;
      }
      generatePDF(this.props.addedPlayers, this.state.selectedGroup, this.props.club, this.props.date);
      
      this.setState({generated: true});
      setTimeout(() => {
        this.setState({generated: false});
      }, 30000);
    }
    changeNumOfPlayers = (index, num, _) => {
      let selectedGroup = this.state.selectedGroup.slice();
      selectedGroup[index] = num;
      this.setState({ selectedGroup });
    }

    handleSave = () => {
      this.props.saveSession(this.state.schemata, 
                  this.state.rangeOfPlayer, 
                  this.state.selectedGroup)
    }
    render() {
      if (this.state.schemata[0].length === 0){
        //so the button should be disabled
        //with a tooltip telling the user that they need to select more players       
        return <h2>You must select more players...</h2>;
      }
      this.totalPlayerAdded = 0;
      let pdfs = this.state.pdfs;
      let generatedText = this.state.generated ? "You must wait 30secs" : "Create PDF"
      let createPDFButton = <button className="create-pdf"
                onClick={this.generatePDF}
                disabled={this.state.generated}>{generatedText}</button>
                
      return <div className="grouping">
        { this.totalPlayerAdded ? createPDFButton : ""}
        <RaisedButton  onClick={this.handleSave}
                secondary={true} label="Save"/>
        <div>
        { 
          !pdfs ? "" :
            Object.keys(pdfs).map((group, i) => {
              return <div key={i} onClick={() => window.open(`/api/pdfs/download/${pdfs[group]}`)}>{group}</div>;
            })
        }
        </div>
        { this.schemata() }
        { 
           this.state.selectedGroup.map((numPlayers, i) => {
              this.totalPlayerAdded += +numPlayers;
              return <ParticipantGroup key={i + "" + numPlayers} groupId={i}
                        numPlayers={numPlayers}
                        changeNumOfPlayers={() => this.changeNumOfPlayers(i)}
                        players={this.props.addedPlayers.slice(
                          this.totalPlayerAdded - numPlayers, this.totalPlayerAdded
                          )}
                      />;
           })
        }
      </div>;
    }
}

export default Grouping;
