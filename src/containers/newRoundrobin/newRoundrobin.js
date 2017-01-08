import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openEditModal, openNewModal, closeNewModal, closeEditModal } from 'redux/modules/modals';
import { fetchCurrentPlayers, addPlayer, updatePlayer } from 'redux/modules/players';
import { PlayerForm } from 'components';
import { TabContainer, UploadDialog } from 'containers';

@connect(({ newSession, modals }) => ({ session: newSession, modals }),
  {
    openNewModal,
    openEditModal,
    closeNewModal,
    closeEditModal,
    fetchCurrentPlayers,
    addPlayer,
    updatePlayer,
  })
export default class NewRRSession extends Component {
  componentWillMount() {
    if (!this.props.session.loaded && !this.props.session.loading) {
      this.props.fetchCurrentPlayers();
    }
  }
  render() {
    const { newPlayerModal, editPlayerModal } = this.props.modals;
    return (<div className="tab-container">
      <TabContainer />
      <UploadDialog />
      {
        newPlayerModal &&
          (<div className="overlay">
            <PlayerForm
              title="Register Player"
              callback={this.props.addPlayer}
              modalOpen={newPlayerModal}
              closeModal={this.props.closeNewModal}
            />
          </div>)
      }
      {
        editPlayerModal.open &&
          (<div className="overlay">
            <PlayerForm
              title="Update Player"
              callback={this.props.updatePlayer}
              player={editPlayerModal.player}
              modalOpen={editPlayerModal.open}
              closeModal={this.props.closeEditModal}
            />
          </div>)
      }
    </div>);
  }
}
