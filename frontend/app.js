import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from "./components/navBar"
  // var el = document.getElementById("root");
  // Modal.setAppElement(el);  
const App = (props) => (
  <MuiThemeProvider>
  <div>
    <NavBar/>
    { props.children }
  </div>
  </MuiThemeProvider>
)

export default App