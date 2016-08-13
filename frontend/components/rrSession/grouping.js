import React from 'react'
import ParticipantGroup from './participantGroup'
import { findSchemata } from "../../methods/findSchema"
import { generatePDF, fetchPDFLinks, downloadPDF } from "../../actions/clientActions"
import PDFStore from "../../stores/pdfStore"
import RaisedButton from "material-ui/RaisedButton"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const rangeOfPlayers = [3, 4, 5, 6, 7];

class Grouping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          schemata: [[]],
          max: 6, 
          min: 4,
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
      this.setState({ pdfs: PDFStore.getPDF() })
    }
    handleChange = (field, e, idx, value) => {
      this.setState(Object.defineProperty({}, field, {value: value}))
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.selectedGroup.toString() !== nextState.selectedGroup.toString()){
        return true;
      }
      if (nextProps.numPlayers !== this.props.numPlayers || this.state.min !== nextState.min || this.state.max !== nextState.max) {
        let range = [];
        for (let i = this.state.min; i <= this.state.max; i++){
          range.push(i);
        }
        
        let schemata = findSchemata(nextProps.numPlayers, range)
        this.state.schemata = schemata.length ? schemata : [[]];
        this.state.selectedGroup = schemata.length ? schemata[0] : "";
        return true;
      }
      return false; 
    }
    schemata() {
      let schemata = this.state.schemata;
      if (schemata.length){
        return <SelectField value={this.state.selectedGroup} 
                       onChange={this.changeSchema} 
                       floatingLabelText="Select a schema"
                       floatingLabelFixed={true}>
          {
            schemata.map( (schema, i)=>{
              return <MenuItem key={schema} value={schema} primaryText={schema.join(", ")}/>;
            })
          }
        </SelectField>;
      } else {
        return <p>Nothing is available...<br />Try selecting more players..</p>;
      }
    }
    numOfPlayers() {
      let { min, max } = this.state;
      return (<div>
        <SelectField value={min} 
                     floatingLabelFixed={true}
                     floatingLabelText="Min"
                     onChange={this.handleChange.bind(this, "min")}>
            {
              rangeOfPlayers.map((num) => (
                <MenuItem key={num} value={num} primaryText={num} disabled={num >= max}/>
              ))
            }
         </SelectField>
        <SelectField value={max}
                     floatingLabelFixed={true}
                     floatingLabelText="Max"
                     onChange={this.handleChange.bind(this, "max")}>
            {
              rangeOfPlayers.map((num) => (
                <MenuItem key={num} value={num} primaryText={num} disabled={num <= min }/>
              ))
            }
        </SelectField>
      </div>)
    }
    changeSchema = (e, _, selectedGroup) => {
      this.totalPlayerAdded = 0;
      this.setState({ selectedGroup }); 
    }
    generatePDF = () => {
      if (this.state.generated){
        alert("You may only generate once every 30secs")
        return;
      }
      if (!this.state.schemata[0].length){
        alert("There are no players yet :(.")
        return;
      }
      generatePDF(this.props.addedPlayers, this.state.selectedGroup, this.props.club, this.props.date);
      
      this.setState({generated: true});
      setTimeout(() => {
        this.setState({generated: false});
      }, 30000);
    }

    handleSave = () => {
      this.props.saveSession(this.state.schemata, 
                  this.state.rangeOfPlayer, 
                  this.state.selectedGroup)
    }
    download = (link) => {
      window.open(`/api/pdfs/download/${link}`)
    }
    render() {
      if (this.state.schemata[0].length === 0){
        return <h2>You must select more players...</h2>;
      } 
      this.totalPlayerAdded = 0;
      let pdfs = this.state.pdfs;
      let generatedText = this.state.generated ? "You must wait 30secs" : "Create PDF"

      return <div className="grouping">
        <IconMenu style={{position: "absolute", right: 0, top: "-20px"}}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Generate PDF" onClick={this.generatePDF} disabled={this.props.generated}/>
            <MenuItem primaryText="Save" onClick={this.handleSave}/>
        </IconMenu>
        { this.numOfPlayers() }
        { this.schemata() }
        { 
           this.state.selectedGroup.map((numPlayers, i) => {
              this.totalPlayerAdded += +numPlayers;
              return <ParticipantGroup key={i + "" + numPlayers} groupId={i}
                        pdfDownload={ !pdfs ? () => {} : this.download.bind(this, pdfs["group" + (i + 1)])}
                        pdfs={!!pdfs}
                        numPlayers={numPlayers}
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
