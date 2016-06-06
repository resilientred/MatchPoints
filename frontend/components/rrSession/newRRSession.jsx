import React from 'react';
import DatePicker from "react-datepicker";
import Moment from "moment";

class NewRRSession extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NewRRSession';
        this.state = {
          date: moment()
        }
    }
    handleChange = (field, e) => {
      let obj = {};
      obj[field] = e.target.value;
      this.setState(obj)
    }
    render() {
        return <div>
          { this.props.children }
        </div>;
    }
}

export default NewRRSession;
