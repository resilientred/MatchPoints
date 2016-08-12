import React from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

  // var el = document.getElementById("root");
  // Modal.setAppElement(el);  
const App = (props) => (
  <MuiThemeProvider>
    <div>
    { props.children }
  </div>
  </MuiThemeProvider>
)

export default App