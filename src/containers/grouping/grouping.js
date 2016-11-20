import React, { Component } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import FlatButton from "material-ui/FlatButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Dialog from "material-ui/Dialog";
import { NumOfPlayers, ParticipantGroup } from "components";
import { changeSchema, movePlayerUp, movePlayerDown } from "redux/modules/schemata";
import { stopLoad } from "redux/modules/main";
import { generatePDF, allowGenerate, clearPDF } from "redux/modules/pdf";
import { setMinAndMax, temporarySave, saveSession } from "redux/modules/newSession";
import moment from "moment";

@connect(
  ({ auth: { club }, newSession, pdf, schemata }) => ({ club, ...newSession, ...pdf, ...schemata }),
  {
    changeSchema,
    generatePDF,
    allowGenerate,
    setMinAndMax,
    clearPDF,
    stopLoad,
    saveSession,
    temporarySave,
    movePlayerUp,
    movePlayerDown
  }
)
export default class Grouping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      title: null,
      message: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.pdfs && nextProps.pdfs) {
      setTimeout(() => {
        this.props.allowGenerate();
      }, 30000);
    }
  }

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  }

  schemata() {
    const { schemata, selected } = this.props;
    const floatingStyle = {
      zIndex: selected.length ? "auto" : 999,
      color: selected.length ? "#E0E0E0" : "orange"
    };

    if (schemata.length) {
      return (<div>
        <SelectField
          value={selected.join(",")}
          onChange={this.changeSchema}
          floatingLabelStyle={floatingStyle}
          floatingLabelText="Select a schema"
          floatingLabelFixed={Boolean(true)}
          style={{ zIndex: selected.length ? "auto" : 999 }}
          errorText={selected.length ? "" : "Select an arrangement"}
          errorStyle={{ color: "orange" }}
        >
          {
            schemata ?
              schemata.map(schema => (
                <MenuItem
                  key={schema}
                  value={schema.join(",")}
                  primaryText={schema.join(", ")}
                />
              ))
              :
              <MenuItem key={"noth"} disabled={Boolean(true)} primaryText="No Available Schemas..." />
          }
        </SelectField>
      </div>);
    }
    return null;
  }

  changeSchema = (e, _, selectedGroup) => {
    if (selectedGroup) {
      this.totalPlayerAdded = 0;
      this.props.changeSchema(selectedGroup.split(",").map(el => +el));

      if (this.props.pdf) {
        this.props.clearPDF();
      }
    }
  }
  generatePDF = () => {
    if (this.props.generated) {
      this.setState({
        title: "Whooops..",
        message: "You may only generate once every 30secs.",
        dialogOpen: true
      });
      return;
    }
    if (this.props.schemata[0].length === 0) {
      this.setState({
        title: "Ooooops..",
        message: "There are no players yet :(.",
        dialogOpen: true
      });
      return;
    }
    this.props.generatePDF(
      this.props.sortedPlayers,
      this.props.selected,
      this.props.club,
      moment(this.props.date).format("YYYY-MM-DD"));
  }

  handleSave = () => {
    if (this.props.selected.length === 0) {
      this.setState({
        title: "Well....",
        message: "You have to have selected a schema before you can save.",
        dialogOpen: true
      });
    } else {
      this.props.saveSession({
        date: moment(this.props.date).format("YYYY-MM-DD"),
        numOfPlayers: this.props.numJoined,
        schemata: this.props.schemata,
        selectedSchema: this.props.selected,
        players: this.props.sortedPlayers
      }).then(() => {
        browserHistory.push("/club/sessions");
      });
    }
  }
  download = (link) => {
    try {
      window.open(`/api/pdfs/download/${link}`);
    } catch (e) {
      console.log(e);
    }
  }

  groupTables() {
    const pdfs = this.props.pdfs;
    let totalPlayerAdded = 0;
    return (<div>
      {
        this.props.selected.map((numPlayers, i, arr) => {
          totalPlayerAdded += +numPlayers;
          return (<ParticipantGroup
            key={`${i}${numPlayers}`} groupId={i}
            pdfDownload={!pdfs ? () => {} : this.download.bind(this, pdfs[`group${(i + 1)}`])}
            pdfLoaded={!!pdfs}
            numPlayers={numPlayers}
            players={this.props.sortedPlayers.slice(
              totalPlayerAdded - numPlayers, totalPlayerAdded
              )}
            moveUp={i === 0 ? null : this.props.moveUp}
            moveDown={i === arr.length - 1 ? null : this.props.moveDown}
          />);
        })
      }
    </div>);
  }
  dialog() {
    const actions = [
      <FlatButton
        label="Close"
        primary={Boolean(true)}
        onTouchTap={this.handleDialogClose}
      />
    ];
    return (<Dialog
      title={this.title}
      actions={actions}
      open={this.state.dialogOpen}
      modal={false}
      onRequestClose={this.handleDialogClose}
    >
      {this.content}
    </Dialog>);
  }
  render() {
    let schemata;
    let groupTables;

    if (this.props.max && this.props.min) {
      schemata = this.schemata();
      if (this.props.selected.length) {
        groupTables = this.groupTables();
      }
    }

    return (<div className="grouping">
      <IconMenu
        style={{
          position: "absolute",
          right: 0,
          top: "-20px",
          zIndex: "50"
        }}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        targetOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem
          primaryText="Generate PDF"
          onClick={this.generatePDF}
          disabled={this.props.generated || !this.props.selected.length}
        />
        <MenuItem
          primaryText="Save"
          onClick={this.handleSave}
          disabled={!this.props.selected.length}
        />
      </IconMenu>
      <NumOfPlayers
        setMinAndMax={this.props.setMinAndMax}
        min={this.props.min}
        max={this.props.max}
      />

      { schemata }
      { groupTables }
      { this.state.dialog && this.dialog() }
    </div>);
  }
}
