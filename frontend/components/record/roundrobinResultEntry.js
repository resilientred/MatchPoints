import React from 'react'
import moment from 'moment'
const FaCalendar = require('react-icons/lib/fa/calendar');

const RoundRobinResultEntry = (props) => {
  var id = props.id,
      date = moment(props.date).format("YYYY-MM-DD"),
      clubId = props._clubId;
  return <div className="result-entry">
      <div><FaCalendar />{date}</div>
      <div className="result-entry-buttons">
        <button style={{backgroundColor: "#95b36b"}} onClick={props.editResult.bind(null, id, clubId)}>
          { props.finalized ? "Edit" : "View" }
        </button>
        <button style={{backgroundColor: "#b36b95"}} onClick={props.deleteResult.bind(null, id)}>
          Delete
        </button>
        <button style={{backgroundColor: "#6bb389"}}>
          View
        </button>

      </div>
    </div>;
}

export default RoundRobinResultEntry;