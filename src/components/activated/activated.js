import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { browserHistory } from "react-router";

const Activated = (props) => {
  return (<div className="forms activated">
    <form onSubmit={(e) => e.preventDefault()}>
      <p>{props.message}</p>
      <RaisedButton
        label="Back to Main Page"
        backgroundColor="#EF6C00"
        labelColor="white"
        onClick={() => {
          browserHistory.push("/");
          props.setPage(0)
        }}
      />
    </form>
  </div>);
};

export default Activated;
