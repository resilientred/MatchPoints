import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Modal from "react-modal";
import UserStore from "./stores/userStore";
import { NavBar, Splash, SignUp, LogIn, 
          Club, Players, NewRRSession, ErrorPage,
          RoundrobinResultList, RoundrobinSession } from './routes';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentUser: null};
  }
  componentWillMount() {
    let el = document.getElementById("root");
    Modal.setAppElement(el);    
  }

  componentDidMount(){
    this.cuListener = UserStore.addListener(this.setCurrentUser);
  }
  setCurrentUser = () => {
    let currentUser = UserStore.getCurrentUser();
    if (currentUser){
      this.setState({currentUser: currentUser});
    } else {
      if (this.state.currentUser) this.setState({currentUser: null});
      browserHistory.push("/");
    }
  }
  render() {
    return (<div>
      <NavBar {...this.state} />
      { this.props.children }
    </div>);
  }
}

let Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="login" component={LogIn} />
    <Route path="signup" component={SignUp} />
    <Route path="club" component={Club} >
      <Route path="rrResults" component={RoundrobinResultList} >
        <Route path=":date" component={RoundrobinSession} />
       </Route> 
      <Route path="newRRSession" component={NewRRSession} >
        <Route path="players" component={Players} />
      </Route>
    </Route>
    <Route path="*" component={ ErrorPage } />
  </Route>
)


document.addEventListener("DOMContentLoaded", ()=>{
    ReactDOM.render(
      <Router history={browserHistory}>
        {Routes}
      </Router>,
      document.getElementById("root")
    );
});
