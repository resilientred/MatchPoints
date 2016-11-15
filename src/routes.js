import React from "react";
import { Route, IndexRoute } from "react-router";
import { Main, Splash, Club, NewRoundrobin, Sessions, Session, Query, Reset } from "containers";
import { isAuthLoaded, loadAuth } from "redux/modules/auth";
import ErrorPage from "./errorPage";

export default ({ getState, dispatch }) => {
  const requireNotLoggedin = (nextState, replace, callback) => {
    const checkAuth = () => {
      const { club } = getState().auth;
      if (club._id) {
        replace("/club");
      }
      callback();
    };

    if (isAuthLoaded(getState().auth)) {
      checkAuth();
    } else {
      dispatch(loadAuth()).then(checkAuth);
    }
  };

  const requireLoggedIn = (nextState, replace, callback) => {
    const checkAuth = () => {
      const { club } = getState().auth;
      if (!club._id) {
        replace("/");
      }
      callback();
    };

    if (isAuthLoaded(getState().auth)) {
      checkAuth();
    } else {
      dispatch(loadAuth()).then(checkAuth);
    }
  };

  return (
    <Route path="/" component={Main}>
      <Route onEnter={requireNotLoggedin}>
        <IndexRoute component={Splash} />
      </Route>

      <Route onEnter={requireLoggedIn}>
        <Route path="club" component={Club}>
          <IndexRoute component={NewRoundrobin} />
          <Route path="sessions" component={Sessions} />
          <Route path="sessions/new" component={NewRoundrobin} />
          <Route path="sessions/:id" component={Session} />
        </Route>
      </Route>
      <Route path="results" component={Query} />
      <Route path="reset" component={Splash} />
      <Route path="*" component={ErrorPage} />
    </Route>
  );
};
