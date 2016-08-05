import React from "react"
import App from "./app"
import { Route, IndexRoute } from 'react-router'

import NavBar from './components/navBar'
import Splash from "./components/splash"
import Club from "./components/club"
import NewRRSession from "./components/rrSession/newRRSession"
import RoundRobinSessions from "./components/record/roundrobinSessions"
import RoundRobinSession from "./components/record/roundrobinSession"
import PlayerResult from "./components/results/playerResult"
import ErrorPage from "./errorPage"

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="club" component={Club} >
      <Route path="sessions" component={RoundRobinSessions} />
        <Route path="sessions/:id" component={RoundRobinSession} />
      <Route path="newSession" component={NewRRSession} >
      </Route>
    </Route>
    <Route path="players/:playerId" component={PlayerResult} />
    <Route path="*" component={ ErrorPage } />
  </Route>
)

export default Routes