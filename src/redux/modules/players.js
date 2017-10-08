import axios from 'axios';
import { getCSRF } from 'helpers';
import { LOAD, MESSAGE } from './main';

export const DELETE_PLAYER_SUCCESS = 'mp/players/DELETE_PLAYER_SUCCESS';
export const UPDATE_PLAYER_SUCCESS = 'mp/players/UPDATE_PLAYER_SUCCESS';
export const ADD_PLAYER_SUCCESS = 'mp/players/ADD_PLAYER_SUCCESS';
export const FETCH_PLAYERS_SUCCESS = 'mp/players/FETCH_PLAYERS_SUCCESS';

const initialState = {
  loaded: false,
  player: null,
  err: null,
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER_SUCCESS:
    case UPDATE_PLAYER_SUCCESS:
    case DELETE_PLAYER_SUCCESS:
      return {
        ...state,
        loaded: false,
        player: action.payload,
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
