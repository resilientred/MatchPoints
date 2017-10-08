import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton/IconButton';
import Close from 'react-icons/lib/md/close';

class PlayerForm extends Component {
  constructor(props) {
    super(props);

    const def = {
      name: '',
      rating: '',
    };
    if (props.player) {
      def.id = props.player._id;
      def.name = props.player.name;
      def.rating = props.player.rating;
    }
    this.state = {
      ...def,
      errorText: {
        name: '',
        rating: '',
      },
    };
  }


  componentDidUpdate(prevProps) {
    if (!prevProps.modalOpen && this.props.modalOpen) {
      document.querySelector('#name input').focus();
    }
  }

  validateFields() {
    let isValid = true;
    const errorText = {};
    if (this.state.name === '') {
      errorText.name = 'Name field cannot be empty.';
      isValid = false;
    }
    if (this.state.rating === '0' || this.state.rating === '') {
      errorText.rating = 'Rating field cannot be empty.';
      isValid = false;
    }

    return isValid;
  }

  updateRating = (e) => {
    const { rating, ...errorText } = this.state.errorText;
    if (rating && e.target.value !== '0') {
      this.setState({ errorText });
    }
    this.setState({ rating: e.target.value });
  }

  updateName = (e) => {
    const { name, ...errorText } = this.state.errorText;
    if (name && e.target.value) {
      this.setState({ errorText });
    }
    this.setState({ name: e.target.value });
  }

  handleSubmit = () => {
    if (this.validateFields()) {
      this.props.callback(this.state).then(() => {
        this.setState({ name: '', rating: '' });
        this.props.closeModal();
      });
    }
  }
  render() {
    return (<div
      className="player-form"
      style={{ display: this.props.modalOpen ? 'block' : 'none' }}
    >
      <form>
        <IconButton
          style={{ position: 'absolute', right: '10px', top: '10px' }}
          iconClassName="material-icons"
          onClick={this.props.closeModal}
          tooltip="Close Form" touch={Boolean(true)}
        >
          <Close />
        </IconButton>
        <h3>Player Form</h3>
        <div>
          <TextField
            type="text"
            floatingLabelText="Name"
            id="name"
            hintText="Name"
            onChange={this.updateName}
            errorText={this.state.errorText.name}
            value={this.state.name}
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            floatingLabelText="Rating"
            hintText="Rating"
            onChange={this.updateRating}
            errorText={this.state.errorText.rating}
            value={this.state.rating} pattern="^\d{2,4}$"
            required
          />
        </div>
        <RaisedButton
          fullWidth={Boolean(true)}
          label={this.props.title}
          style={{ marginTop: '20px' }}
          onTouchTap={this.handleSubmit}
        />
      </form>
    </div>);
  }
}

export default PlayerForm;
