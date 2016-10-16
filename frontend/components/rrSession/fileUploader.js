import React, { Component, PropTypes } from "react";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import { uploadFile } from "../../actions/clientActions";
import ClubStore from "../../stores/clubStore";

const style = {
  cursor: "pointer",
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: "100%",
  opacity: 0
};

export default class FileUploader extends Component {
  static propTypes = {
    handleClose: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      data_uri: null,
      filename: null,
      filetype: null,
      processing: false
    };
  }

  componentDidMount() {
    this.listener = ClubStore.addListener(this.clubChanged);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.processing !== nextState.processing ||
      this.state.filename !== nextState.filename) {
      return true;
    }

    return false;
  }
  componentWillUnmount() {
    this.listener.remove();
  }

  clubChanged = () => {
    this.setState({ processing: false });
    if (this.playerLen !== ClubStore.getCurrentClub().players.length) {
      this.props.handleClose();
    }
  }
  updateFile = (e) => {
    const file = e.target.files[0];
    if (/csv|json/.test(file.type)) {
      const reader = new FileReader();
      this.setState({ processing: true });
      reader.onload = (upload) => {
        this.setState({
          data_uri: upload.target.result,
          filename: file.name,
          filetype: file.type,
          processing: false
        });
      };
      reader.readAsDataURL(file);
    } else {
      this.setState({
        filename: `Unrecognized file type: .${file.type}`
      });
    }
  }
  uploadFile = (e) => {
    e.preventDefault();
    if (this.state.data_uri && this.state.filetype && this.state.filename) {
      this.setState({ processing: true });
      this.playerLen = ClubStore.getCurrentClub().players.length;
      uploadFile({
        data_uri: this.state.data_uri,
        filename: this.state.filename,
        filetype: this.state.filetype
      });
    }
  }
  loader() {
    return (this.state.processing && (<div className="overlay">
      <div className="loading">
        <CircularProgress size={2} />
      </div>
    </div>));
  }
  render() {
    const buttonLabel = this.state.filename ?
      `File:  ${this.state.filename}` :
      "Choose a file (.csv or .json)";
    return (
      <form
        id="upload-form"
        encType="multipart/form-data"
        onSubmit={this.uploadFile}
      >
        <RaisedButton
          style={{ midWidth: "150px", marginRight: "10px" }}
          label={buttonLabel}
          labelPosition="before"
          containerElement="label"
        >
          <input
            type="file"
            value={this.state.file}
            onChange={this.updateFile}
            style={style}
          />
        </RaisedButton>
        <RaisedButton
          label="Upload"
          labelPosition="before"
          containerElement="label"
          primary={Boolean(true)}
          disabled={!this.state.data_uri}
        >
          <input type="submit" style={style} />
        </RaisedButton>
        { this.loader() }
      </form>
    );
  }
}
