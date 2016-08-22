import React from 'react'
import ParticipantGroup from './participantGroup'
import { findSchemata } from "../../methods/findSchema"
import { generatePDF, downloadPDF } from "../../actions/clientActions"
import PDFStore from "../../stores/pdfStore"
import RaisedButton from "material-ui/RaisedButton"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SnackBar from 'material-ui/Snackbar';

const rangeOfPlayers = [3, 4, 5, 6, 7];

const objToString = (obj) => {
  return Object.keys(obj).reduce( (a, b) => { 
     a += b + obj[b]
  }, "")
}
class Grouping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          schemata: [[]],
          max: null,
          min: null,
          selectedGroup: [],
          pdfs: null,
          generated: false,
          stepIndex: 0, 
          open: false
        }
    }   
    componentWillMount() {
      this.pListener = PDFStore.addListener(this._fetchedPDF);

      this.int = setInterval(this.tempSave, 60000);
    }
    componentWillUnmount() {
     this.pListener.remove(); 
     clearInterval(this.int);
    }
    tempSave = () => {
      this.props.temporarilySaveSession(
        this.state.min,
        this.state.max,
        this.state.schemata, 
        this.state.selectedGroup, 
        this.state.pdfs
      );
    }
    handleOpen(){
      this.setState({open: true});
    }   
    handleClose = () => {
      this.setState({open: false});
    }
    _fetchedPDF = () => {
      let error = PDFStore.getError();
      if (error){
        this.error = error;
        handleOpen();
      } else {
        this.setState({ pdfs: PDFStore.getPDF() })
      }
    }
    handleChange = (field, e, idx, value) => {
      if (value) this.setState({[field]: value});
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.cached !== nextProps.cached){
        this.setState({ 
          schemata: nextProps.schemata ? 
            (typeof nextProps.schemata === "string" || 
              typeof nextProps.schemata === "number" ? 
                [+nextProps.schemata] : nextProps.schemata.map( arr => (arr.map( el => +el)))) : [[]], 
          selectedGroup: nextProps.selectedGroup ? nextProps.selectedGroup.map(el => +el) : [],
          pdfs: nextProps.pdfs === "" ? null : nextProps.pdfs,
          min: nextProps.min ? +nextProps.min : null,
          max: nextProps.max ? +nextProps.max : null
        });
      }
    } 
    shouldComponentUpdate(nextProps, nextState) {
      if ((!this.state.pdfs && nextState.pdfs) || 
            (nextState.pdfs && objToString(this.state.pdfs) !== objToString(nextState.pdfs))){
        return true;
      }
      if (this.state.selectedGroup && nextState.selectedGroup && 
            this.state.selectedGroup.toString() !== nextState.selectedGroup.toString()){
        return true;
      }
      if (this.state.schemata && nextState.schemata && 
            this.state.schemata.toString() !== nextState.schemata.toString()){
        return true;
      }
      let {min, max} = this.state;
      if (max !== nextState.max && !min) return true;

      if ((max !== nextState.max) || (max && (min !== nextState.min)) || (this.props.numPlayers !== nextProps.numPlayers && max && min)){
        let range = [];
        for (let i = max; i >= (min || nextState.min); i--){
          range.push(i);
        }
        process.nextTick(() => {
          let numPlayers = nextProps.numPlayers;
          let range2 = range.slice();
          let schemata = findSchemata(numPlayers, range2);
          console.log(schemata);
          this.setState({schemata: schemata.length ? schemata : [[]]});  
        })   
        return true;
      }

      return false; 
    }
    schemata() {
      let schemata = this.state.schemata;
      if (schemata.length){
        return <div>
          <SelectField value={this.state.selectedGroup.join(",")} 
                       onChange={this.changeSchema} 
                       floatingLabelText="Select a schema"
                       floatingLabelFixed={true}>
          {
            schemata ? 
                schemata.map( (schema, i)=>{
                  return <MenuItem key={schema} value={schema.join(",")} primaryText={schema.join(", ")}/>;
                })
              :
                <MenuItem key={"noth"} disabled={true} primaryText="No Available Schemas..."/>
          }
        </SelectField>
        </div>;
      } 
    }
    numOfPlayers() {
      let { min, max } = this.state;

      return (<div className="min-max">
        <SelectField value={max}
                     floatingLabelFixed={true}
                     floatingLabelText="Max Players"
                     onChange={this.handleChange.bind(this, "max")}>
            {
              rangeOfPlayers.map((num) => (
                <MenuItem key={num} value={num} primaryText={num} disabled={num < min }/>
              ))
            }
        </SelectField>
        <SelectField value={min} 
                     floatingLabelFixed={true}
                     floatingLabelText="Min Players"
                     onChange={this.handleChange.bind(this, "min")}>
            {
              rangeOfPlayers.map((num) => (
                <MenuItem key={num} value={num} primaryText={num} disabled={num > max}/>
              ))
            }
         </SelectField>
      </div>)
    }
    changeSchema = (e, _, selectedGroup) => {
      if (selectedGroup){
        this.totalPlayerAdded = 0;
        this.setState({ selectedGroup: selectedGroup.split(",").map(el => +el) }); 
      }
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
                  this.state.selectedGroup, this.props.addedPlayers)
    }
    download = (link) => {
      try {
        window.open(`/api/pdfs/download/${link}`)
      } catch(e) {
        debugger;
      }
    }
    moveUp = (group) => {
      if (group === 0) return;
      let selectedGroup = this.state.selectedGroup.slice();
      selectedGroup[group - 1] += 1;
      selectedGroup[group] -= 1;
      this.setState({ selectedGroup });
    }
    moveDown = (group) => {
      let selectedGroup = this.state.selectedGroup.slice();
      if (group === selectedGroup.length - 1) return;
      selectedGroup[group + 1] += 1;
      selectedGroup[group] -= 1;
      this.setState({ selectedGroup });
    }
    groupTables(){
      let pdfs = this.state.pdfs;
      return (<div> 
           {
            this.state.selectedGroup.map((numPlayers, i, arr) => {
              this.totalPlayerAdded += +numPlayers;
              return <ParticipantGroup key={i + "" + numPlayers} groupId={i}
                        pdfDownload={ !pdfs ? () => {} : this.download.bind(this, pdfs["group" + (i + 1)])}
                        pdfs={!!pdfs}
                        numPlayers={numPlayers}
                        players={this.props.addedPlayers.slice(
                          this.totalPlayerAdded - numPlayers, this.totalPlayerAdded
                          )}
                        moveUp={i === 0 ? null : this.moveUp}
                        moveDown={i === arr.length - 1 ? null : this.moveDown}
                      />;
             })
            }
        </div>);
    }
    render() {
      if (this.state.max && this.state.min){
        var schemata = this.schemata();
        if (this.state.selectedGroup){
          var groupTables = this.groupTables();            
        } 
      }

      this.totalPlayerAdded = 0;
      
      let generatedText = this.state.generated ? "You must wait 30secs" : "Create PDF"

      return <div className="grouping">
        <IconMenu style={{position: "absolute", right: 0, top: "-20px"}}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Generate PDF" onClick={this.generatePDF} disabled={this.props.generated || !this.state.selectedGroup.length}/>
            <MenuItem primaryText="Save" onClick={this.handleSave} disabled={!this.state.selectedGroup.length} />
        </IconMenu>
        { this.numOfPlayers() }
        { schemata }
        { groupTables }
        <SnackBar
          open={this.state.open}
          onRequestClose={this.handleClose}
          message={this.error || ""}
          autoHideDuration={3000}
        />
      </div>;
    }
}

export default Grouping;
