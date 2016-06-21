import React from 'react';
import Form from '../../mixins/form';
import ClubActions from '../../actions/clubActions';
import CSRFStore from "../../stores/csrfStore";
import ClubStore from "../../stores/clubStore";
import { browserHistory } from "react-router";
class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
      username: React.PropTypes.string,
      password: React.PropTypes.string,
      _handleSubmit: React.PropTypes.func,
      _updateField: React.PropTypes.func,
      club: React.PropTypes.string,
    }

    componentDidMount() {
      this.cuListener = ClubStore.addListener(this.redirect);
    }

    redirect() {
      if (ClubStore.getCurrentClub()){
        browserHistory.push("/club");
      }
    }

    componentWillUnmount() {
      if (this.cuListener) this.cuListener.remove();
    }

    render() {
        return <div className="forms">
          <form onSubmit={this.props._handleSubmit.bind(null, ClubActions.signUp) }>
            <h3>Sign Up</h3>
            { this.props._csrf() }
            <div>
          		<label for="club">Club</label>
          		<input type="text" id="club" value={this.props.club}
                    onChange={this.props._updateField.bind(null, "club")}
                    required/>
             </div>
              <div>
                <label for="city">City</label>
                <input type="city" id="city" value={this.props.city}
                      onChange={this.props._updateField.bind(null, "city")}
                      required />
              </div>
              <div>
                <label for="stateName">State</label>
                <input type="stateName" id="stateName" value={this.props.stateName}
                  onChange={this.props._updateField.bind(null, "stateName")}
                  required />
              </div>
             <div>
              <label for="username">Username</label>
              <input type="text" id="username" value={this.props.username}
                    onChange={this.props._updateField.bind(null, "username")}
                    required/>
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" id="password" value={this.props.password}
                    onChange={this.props._updateField.bind(null, "password")}
                    required/>
            </div>
            <input type="submit" value="Sign Up"/>
        	</form>
        </div>;
    }
}
let initialState = {
          club: "",
          username: "",
          password: "",
          city: "",
          stateName: "",
          _csrf: ""
        };
        
SignUp = Form(SignUp, initialState, CSRFStore, ClubActions);
export default SignUp;
