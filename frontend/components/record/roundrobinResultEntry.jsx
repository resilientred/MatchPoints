import React from 'react'
import moment from 'moment'
var FaCalendar = require('react-icons/lib/fa/calendar');

class RoundRobinResultEntry extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RoundRobinResultEntry';
    }

    static propTypes = {
      id: React.PropTypes.string.isRequired,
      date: React.PropTypes.string.isRequired,
      deleteResult: React.PropTypes.func.isRequired,
      editResult: React.PropTypes.func.isRequired,
      _clubId: React.PropTypes.string.isRequired,
      finalized: React.PropTypes.bool.isRequired
    }
    lastButton() {
      return (<button style={{backgroundColor: "#6bb389"}}>
      { "View" } 
      </button>);
    }
    render() {
      var id = this.props.id,
          date = moment(this.props.date).format("YYYY-MM-DD"),
          clubId = this.props._clubId;
      return <div className="result-entry">
          <div><FaCalendar />{date}</div>
          <div className="result-entry-buttons">
            <button style={{backgroundColor: "#95b36b"}}onClick={this.props.editResult.bind(null, id, clubId)}>
              Edit
            </button>
            <button style={{backgroundColor: "#b36b95"}}onClick={this.props.deleteResult.bind(null, id)}>
              Delete
            </button>


          </div>
        </div>;
    }
}

export default RoundRobinResultEntry;