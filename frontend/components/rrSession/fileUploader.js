import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { uploadFile } from "../../actions/clientActions";

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
  constructor(props) {
    super(props);
    this.state = {
      data_uri: null,
      filename: null,
      filetype: null,
      processing: false
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
   if (this.state.processing !== nextState.processing ||
    this.state.filename !== nextState.filename) {
    return true;
   }

   return false;
  }
  updateFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    this.setState({ processing: true });
    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type,
        processing: false
      });
    }
    reader.readAsDataURL(file);
  }
  uploadFile = (e) => {
    e.preventDefault();

    uploadFile({
      data_uri: this.state.data_uri,
      filename: this.state.filename,
      filetype: this.state.filetype
    });
  }
  render() {
    return (
      <form
        id="upload-form"
        encType="multipart/form-data"
        onSubmit={this.uploadFile}
      >
        <RaisedButton
          label="Choose a file (.csv or .json)"
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
        >
          <input type="submit" style={style} />
        </RaisedButton>
      </form>
    );
  }
}
