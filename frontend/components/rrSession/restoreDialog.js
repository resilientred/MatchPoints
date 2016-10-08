import React, { Component, PropTypes } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

export default class RestoreDialog extends Component {
  static propTypes = {
    destroyTempSession: PropTypes.func,
    restoreSession: PropTypes.func,
    open: PropTypes.bool,
    handleClose: PropTypes.func
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.open !== nextProps.open) {
      return true;
    }

    return false;
  }
  render() {
    const actions = [
      <FlatButton
        label="Discard"
        secondary={Boolean(true)}
        onTouchTap={this.props.destroyTempSession}
      />,
      <FlatButton
        label="Retrieve"
        secondary={Boolean(true)}
        onTouchTap={this.props.restoreSession}
      />
    ];

    return (<Dialog
      title="Session found"
      actions={actions}
      modal={false}
      open={this.props.open}
      onRequestClose={() => this.props.handleClose("dialogOpen")}
    >
      Would you like to restore your previous session?
    </Dialog>);
  }
}
