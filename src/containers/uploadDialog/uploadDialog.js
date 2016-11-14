import React, { Component } from "react";
import { connect } from "react-redux";
import { closeUploadDialog } from "redux/modules/dialogs";
import { FileUploader } from "components";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

@connect(({ dialogs }) => ({ open: dialogs.uploadDialogOpen }),
  { close: closeUploadDialog })
export default class UploadDialog extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.open !== nextProps.open) {
      return true;
    }

    return false;
  }
  render() {
    const actions = [
      <FlatButton
        label="Close"
        secondary={Boolean(true)}
        onTouchTap={this.props.close}
      />
    ];

    return (<Dialog
      title="Upload Players"
      actions={actions}
      modal={false}
      open={this.props.open}
      onRequestClose={this.props.close}
    >
      <FileUploader />
    </Dialog>);
  }
}
