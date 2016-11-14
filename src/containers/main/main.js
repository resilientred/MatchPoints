import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SnackBar from "material-ui/Snackbar";
import CircularProgress from "material-ui/CircularProgress";
import { Navbar } from "containers";
import { clearError } from "redux/modules/main";

@connect(({ main: { loading, error } }) => ({ loading, error }), { clearError })
export default class Main extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      setTimeout(this.props.clearError, 8000);
    }
  }
  render() {
    return (<MuiThemeProvider>
      <div>
        <Navbar />
        { this.props.children }
        {
          this.props.loading &&
            (<div className="overlay">
              <div className="loading">
                <CircularProgress size={2} />
              </div>
            </div>)
        }
        <SnackBar
          open={!!this.props.error}
          onRequestClose={this.handleClose}
          message={this.props.error || ""}
          autoHideDuration={8000}
        />
      </div>
    </MuiThemeProvider>);
  }
}
