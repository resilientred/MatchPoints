import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./app";
import Splash from "./components/splash";
import Club from "./components/club";
import NewRRSession from "./components/rrSession/newRRSession";
import RoundRobinSessions from "./components/record/roundrobinSessions";
import RoundRobinSession from "./components/record/roundrobinSession";
import ResultQuery from "./components/results/resultQuery";
import ErrorPage from "./errorPage";

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="club" component={Club}>
      <IndexRoute component={NewRRSession} />
      <Route path="sessions" component={RoundRobinSessions} />
      <Route path="sessions/:id" component={RoundRobinSession} />
      <Route path="newSession" component={NewRRSession} />
    </Route>
    <Route path="results" component={ResultQuery} />
    <Route path="*" component={ErrorPage} />
  </Route>
);

export default Routes;
