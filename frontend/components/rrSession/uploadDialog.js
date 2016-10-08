import React, { Component, PropTypes } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FileUploader from "./fileUploader";

export default class UploadDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.open !== nextProps.open) {
      return true;
    }

    return false;
  }
  handleClose = () => {
    this.props.handleClose("uploadDialogOpen");
  }
  render() {
    const actions = [
      <FlatButton
        label="Close"
        secondary={Boolean(true)}
        onTouchTap={this.handleClose}
      />
    ];

    return (<Dialog
      title="Upload Players"
      actions={actions}
      modal={false}
      open={this.props.open}
      onRequestClose={this.handleClose}
    >
      <FileUploader
        handleClose={this.handleClose}
      />
    </Dialog>);
  }
}
