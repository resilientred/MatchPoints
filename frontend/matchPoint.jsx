import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from "./routes"
import React from "react"


document.addEventListener("DOMContentLoaded", () => {
    render(
      <Router history={hashHistory}>
        {routes}
      </Router>, document.getElementById("root")
    );
});
