import React from "react"
import NavBar from './components/navBar';
import Splash from "./components/splash";
import SignUp from "./components/clubs/signUp";
import LogIn from "./components/clubs/logIn";
import Club from "./components/club";
import NewRRSession from "./components/rrSession/newRRSession";
import RoundRobinSessions from "./components/record/roundrobinSessions";
import RoundRobinSession from "./components/record/roundrobinSession";
import ErrorPage from "./errorPage";

import App from "./app"
import { Route, IndexRoute } from 'react-router'
        // <Route path="players" component={Players} />

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="login" component={LogIn} />
    <Route path="signup" component={SignUp} />
    <Route path="club" component={Club} >
      <Route path="sessions" component={RoundRobinSessions} />
        <Route path="sessions/:id" component={RoundRobinSession} />
      <Route path="newSession" component={NewRRSession} >
      </Route>
    </Route>
    <Route path="*" component={ ErrorPage } />
  </Route>
)

export default Routes