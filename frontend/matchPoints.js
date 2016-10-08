import { render } from "react-dom";
import { Router, browserHistory, RouterContext } from "react-router";
import routes from "./routes";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";

document.addEventListener("DOMContentLoaded", () => {
  injectTapEventPlugin();
  render(
    <Router
      history={browserHistory}
      render={props => <RouterContext {...props} />}
    >
      {routes}
    </Router>, document.getElementById("root")
  );
});
