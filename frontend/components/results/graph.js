import React, { PropTypes } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Graph = (props =>
  <Sparklines
    data={props.data}
    style={{
      borderLeft: "1px solid #E0E0E0",
      borderBottom: "1px solid #E0E0E0",
      width: "50%",
      margin: "0 auto"
    }}
  >
    <SparklinesLine color="blue" style={{ fill: "grey" }} />
  </Sparklines>
);

Graph.propTypes = {
  data: PropTypes.array
};

export default Graph;
