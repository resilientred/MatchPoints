import React from "react"
import App from "./app"
import { Route, IndexRoute } from 'react-router'
import Splash from "./components/splash"
import NavBar from './components/navBar'
import Club from "./components/club"
import NewRRSession from "./components/rrSession/newRRSession"
import RoundRobinSessions from "./components/record/roundrobinSessions"
import RoundRobinSession from "./components/record/roundrobinSession"
import PlayerResult from "./components/results/playerResult"
import ClubResult from "./components/results/clubResult"
import ResultQuery from "./components/results/resultQuery"
import ErrorPage from "./errorPage"
import LogInForm from "./components/user/logIn"
import SignUpForm from "./components/user/signUp"

const Routes = (
  <Route path="/" component={App}> 
    <IndexRoute component={Splash} />
    <Route path="login" component={LogInForm} />
    <Route path="signup" component={SignUpForm} />
    <Route path="club" component={Club} >
      <Route path="sessions" component={RoundRobinSessions} />
        <Route path="sessions/:id" component={RoundRobinSession} />
      <Route path="newSession" component={NewRRSession} >
      </Route>
    </Route>
    <Route path="results" component={ResultQuery}>
      <Route path=":clubId" component={ClubResult}>
        <Route path=":playerId" component={PlayerResult} />
      </Route>
    </Route>
    <Route path="*" component={ ErrorPage } />
  </Route>
)

export default Routes