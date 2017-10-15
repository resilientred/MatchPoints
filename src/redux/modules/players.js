import request from 'utils/request';
import ActionTypes from 'redux/actionTypes';
import { closeEditModal, closeNewModal } from './modals';
// import { MESSAGE } from './main';

const initialState = {
  loaded: false,
  loading: false,
  // player: null,
  error: null,
};

export default function Players(state = initialState, action) {
  // what are these for???
  switch (action.type) {
    case ActionTypes.ADD_PLAYER_REQUEST:
    case ActionTypes.UPDATE_PLAYER_REQUEST:
    case ActionTypes.DELETE_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.ADD_PLAYER_SUCCESS:
    case ActionTypes.UPDATE_PLAYER_SUCCESS:
    case ActionTypes.DELETE_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case ActionTypes.ADD_PLAYER_FAILURE:
    case ActionTypes.UPDATE_PLAYER_FAILURE:
    case ActionTypes.DELETE_PLAYER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

function fetchCurrentPlayersRequest() {
  return {
    type: ActionTypes.FETCH_CURRENT_PLAYERS_REQUEST,
  };
}

function fetchCurrentPlayersSuccess(players) {
  return {
    type: ActionTypes.FETCH_CURRENT_PLAYERS_SUCCESS,
    payload: { players },
  };
}

function fetchCurrentPlayersFailure(error) {
  return {
    type: ActionTypes.FETCH_CURRENT_PLAYERS_FAILURE,
    payload: { error },
  };
}

export function fetchCurrentPlayers() {
  return (dispatch) => {
    dispatch(fetchCurrentPlayersRequest());
    return request('/api/my/players').then(
      res => dispatch(fetchCurrentPlayersSuccess(res.players)),
      err => dispatch(fetchCurrentPlayersFailure(err))
    );
  };
}

function addPlayerRequest() {
  return {
    type: ActionTypes.ADD_PLAYER_REQUEST,
  };
}

function addPlayerSuccess(player) {
  return {
    type: ActionTypes.ADD_PLAYER_SUCCESS,
    payload: { player },
  };
}

function addPlayerFailure(error) {
  return {
    type: ActionTypes.ADD_PLAYER_FAILURE,
    payload: { error },
  };
}

export function addPlayer({ name, rating }) {
  return (dispatch) => {
    const player = { name, rating };
    dispatch(addPlayerRequest());
    return request('/api/my/players', {
      method: 'POST',
      body: JSON.stringify({ player }),
    }).then(
      res => {
        dispatch(closeNewModal());
        dispatch(addPlayerSuccess(res.player));
      },
      err => dispatch(addPlayerFailure(err))
    );
  };
}

function updatePlayerRequest() {
  return {
    type: ActionTypes.UPDATE_PLAYER_REQUEST,
  };
}

function updatePlayerSuccess(player) {
  return {
    type: ActionTypes.UPDATE_PLAYER_SUCCESS,
    payload: { player },
  };
}

function updatePlayerFailure(error) {
  return {
    type: ActionTypes.UPDATE_PLAYER_FAILURE,
    payload: { error },
  };
}

export function updatePlayer({ name, rating, id }) {
  return (dispatch) => {
    dispatch(updatePlayerRequest());
    const player = { name, rating, id };
    return request(`/api/my/players/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ player }),
    }).then(
      res => {
        dispatch(closeEditModal());
        dispatch(updatePlayerSuccess(res.player));
      },
      err => dispatch(updatePlayerFailure(err))
    );
  };
}

function deletePlayerRequest() {
  return {
    type: ActionTypes.DELETE_PLAYER_REQUEST,
  };
}

function deletePlayerSuccess(id) {
  return {
    type: ActionTypes.DELETE_PLAYER_SUCCESS,
    payload: { id },
  };
}

function deletePlayerFailure(error) {
  return {
    type: ActionTypes.DELETE_PLAYER_FAILURE,
    payload: { error },
  };
}

export function deletePlayer(id) {
  return (dispatch) => {
    dispatch(deletePlayerRequest());
    return request(`/api/my/players/${id}`, {
      method: 'DELETE',
    }).then(
      res => dispatch(deletePlayerSuccess(res.playerId)),
      err => dispatch(deletePlayerFailure(err))
    );
  };
}
