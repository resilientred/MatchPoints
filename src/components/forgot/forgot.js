import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { resetWithUsername, resetWithEmail } from "redux/modules/reset";

@connect(() => ({}), { resetWithEmail, resetWithUsername })
export default class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
      error: "",
      success: null
    };
  }

  handleSubmit = (e) => {
    const emailRegex = new RegExp(".+@.+..+", "i");
    let promise;
    if (!emailRegex.test(this.state.field)) {
      promise = this.props.resetWithUsername(this.state.field);
    } else {
      promise = this.props.resetWithEmail(this.state.field)
    }
    promise.then(() => {
      this.setState({
        field: "",
        error: "",
        success: "An email has been sent to your email with instructions to reset your password."
      });
    }).catch(() => {
      this.setState({ error: `No account matches ${this.state.field}` });
    });
  }
  render() {
    return (<div className="forms">
      <form onSubmit={this.handleSubmit}>
        {
          !this.state.success && <h3>Forgot Password</h3>
        }
        <h4>{this.state.success}</h4>
        <div className="form-error">{this.state.error}</div>
        {
          this.state.success &&
            (<RaisedButton
              label="Back to Main Page"
              backgroundColor="#EF6C00"
              labelColor="white"
              onClick={() => this.props.setPage(0)}
            />)
        }
        {
          !this.state.success &&
            (<div>
              <TextField
                type="text"
                hintText="Enter your username or email"
                floatingLabelText="Enter your username or email"
                value={this.state.field}
                fullWidth={true}
                onChange={e => this.setState({ field: e.target.value })}
              />
              <RaisedButton
                label="Reset Password"
                backgroundColor="#1565C0"
                labelColor="white"
                style={{ marginTop: "10px" }}
                onClick={this.handleSubmit}
              />
            </div>)
        }
      </form>
    </div>);
  }
}
