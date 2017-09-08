import axios from 'axios';
import { getCSRF } from 'helpers';
import { LOAD, MESSAGE } from './main';

export const DELETE_PLAYER_SUCCESS = 'mp/players/DELETE_PLAYER_SUCCESS';
export const UPDATE_PLAYER_SUCCESS = 'mp/players/UPDATE_PLAYER_SUCCESS';
export const ADD_PLAYER_SUCCESS = 'mp/players/ADD_PLAYER_SUCCESS';
export const FETCH_PLAYERS_SUCCESS = 'mp/players/FETCH_PLAYERS_SUCCESS';
const FETCH_ACTIVE_PLAYERS_LOADING = 'mp/players/FETCH_ACTIVE_PLAYERS_LOADING';
const FETCH_ACTIVE_PLAYERS_SUCCESS = 'mp/players/FETCH_ACTIVE_PLAYERS_SUCCESS';
const FETCH_ACTIVE_PLAYERS_FAILURE = 'mp/players/FETCH_ACTIVE_PLAYERS_FAILURE';

export default function players(state = { activePlayers: [], err: null }, action) {
  switch (action.type) {
    case FETCH_ACTIVE_PLAYERS_FAILURE:
      return {
        ...state,
        err: action.err.error_description,
      };

    case FETCH_ACTIVE_PLAYERS_SUCCESS:
      return {
        ...state,
        activePlayers: action.payload.players,
      };

    default:
      return state;
  }
}

export const fetchCurrentPlayers = () => {
  return {
    types: [LOAD, FETCH_PLAYERS_SUCCESS, MESSAGE],
    promise: axios.get('/api/my/players'),
  };
};

export const fetchActivePlayers = () => {
  return {
    types: [
      FETCH_ACTIVE_PLAYERS_LOADING,
      FETCH_ACTIVE_PLAYERS_SUCCESS,
      FETCH_ACTIVE_PLAYERS_FAILURE,
    ],
    promise: axios.get('/api/my/players/active'),
  };
};

export const addPlayer = ({ name, rating }) => {
  const promise = axios({
    url: '/api/my/players/new',
    method: 'POST',
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
    data: {
      player: {
        name, rating,
      },
    },
  });
  return {
    types: [LOAD, ADD_PLAYER_SUCCESS, MESSAGE],
    promise,
  };
};

export const updatePlayer = ({ name, rating, id }) => {
  const promise = axios({
    url: `/api/my/players/${id}`,
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
    method: 'PATCH',
    data: {
      player: {
        _id: id, name, rating,
      },
    },
  });

  return {
    types: [LOAD, UPDATE_PLAYER_SUCCESS, MESSAGE],
    promise,
  };
};

export const deletePlayer = (id) => {
  const promise = axios({
    url: `/api/my/players/${id}`,
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
    method: 'DELETE',
  });

  return {
    types: [LOAD, DELETE_PLAYER_SUCCESS, MESSAGE],
    promise,
  };
};
