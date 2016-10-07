import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";

export default class FileUploader extends Component {
  constructor(props){
    super(props);
  }

  uploadFile = (e) => {
    var fd = new FormData();
    fd.append('file', this.refs.file.getDOMNode().files[0]);
  }
  render(){
    return (
      <form ref="upload-form" enctype="multipart/form-data" onSubmit={this.uploadFile}>
        <RaisedButton
          label="Choose a file (.csv or .json)"
        >
          <input ref="file" type="file" name="file" className="upload-file" />
        </RaisedButton>
        <RaisedButton
          label="Upload"
        >
          <input type="submit" />
        </RaisedButton>
      </form>
    );
  }
}
