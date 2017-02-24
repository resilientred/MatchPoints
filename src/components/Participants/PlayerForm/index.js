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
    if (this.state.name === '') {
      this.setState({
        errorText: {
          name: 'Name field cannot be empty.',
        },
      });
      return false;
    }
    if (this.state.rating === '0' || this.state.rating === '') {
      this.setState({
        errorText: {
          rating: 'Rating field cannot be empty.',
        },
      });
      return false;
    }

    return true;
  }
  updateRating = (e) => {
    const state = { rating: e.target.value };
    if (this.state.errorText.rating !== '') {
      if (e.target.value !== '0') {
        state.errorText = Object.assign(this.state.errorText, { rating: '' });
      }
    }
    this.setState(state);
  }
  updateName = (e) => {
    const state = { name: e.target.value };
    if (this.state.errorText.name !== '') {
      if (e.target.value !== '') {
        state.errorText = Object.assign(this.state.errorText, { name: '' });
      }
    }
    this.setState(state);
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
