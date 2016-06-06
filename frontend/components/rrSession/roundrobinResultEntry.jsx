import React from 'react';

class RoundRobinResultEntry extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RoundRobinResultEntry';
    }

    static propTypes = {
      _id: React.PropTypes.string.isRequired,
      date: React.PropTypes.dateTime.isRequired,
      deleteResult: React.PropTypes.func.isRequired,
      finalizeResult: React.PropTypes.func.isRequired,
      editResult: React.PropType.func.isRequired
    }

    //not sure if it is dateTime
    render() {
      let id = this.props._id,
          date = this.props.date;

      return <div>
          <div>{date}</div>
          <button onClick={this.props.editResult.bind(null, date)}>
            Edit Result
          </button>
          <button onClick={this.props.deleteResult.bind(null, id)}>
            Delete
          </button>
          <button onClick={this.props.finalizeResult.bind(null, id)}>
            Finalize
          </button>
        </div>;
    }
}

export default RoundRobinResultEntry;
