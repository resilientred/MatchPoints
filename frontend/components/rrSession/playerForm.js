import React, { PropTypes } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton/IconButton";
import Close from "react-icons/lib/md/close";
import { addPlayer } from "../../actions/clientActions";
import ClubStore from "../../stores/clubStore";

class PlayerForm extends React.Component {
  static propTypes = {
    modalOpen: PropTypes.bool,
    closeModal: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "0"
    };
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.modalOpen && this.props.modalOpen) {
      document.getElementById("name").focus();
    }
  }
  updateField(name, e) {
    this.setState({ [name]: e.target.value });
  }
  handleSubmit = () => {
    addPlayer(ClubStore.getCurrentClub()._id, this.state);
    this.setState({ name: "", rating: "0" });
    this.props.closeModal();
  }
  render() {
    return (<div
      className="player-form"
      style={{ display: this.props.modalOpen ? "block" : "none" }}
    >
      <form>
        <IconButton
          style={{ position: "absolute", right: "10px", top: "10px" }}
          iconClassName="material-icons"
          onClick={this.props.closeModal}
          tooltip="Close Form" touch={Boolean(true)}
        >
          <Close />
        </IconButton>
        <h3>Player Form</h3>
        <div>
          <TextField
            type="text"
            floatingLabelText="Name"
            id="name"
            hintText="Name"
            onChange={e => this.updateField("name", e)}
            value={this.state.name}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            floatingLabelText="Rating"
            hintText="Rating"
            onChange={e => this.updateField("rating", e)}
            value={this.state.rating} pattern="^\d{2,4}$"
            required
          />
        </div>
        <RaisedButton
          fullWidth={Boolean(true)}
          label="Register Player"
          style={{ marginTop: "20px" }}
          onTouchTap={this.handleSubmit}
        />
      </form>
    </div>);
  }
}

export default PlayerForm;
