import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from "./components/navBar"

const App = (props) => (
  <MuiThemeProvider>
  <div>
    <NavBar/>
    { props.children }
  </div>
  </MuiThemeProvider>
)

export default App