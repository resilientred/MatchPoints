import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from "./routes"
import React from "react"


document.addEventListener("DOMContentLoaded", () => {
    render(
      <Router history={browserHistory}>
        {routes}
      </Router>, document.getElementById("root")
    );
});
