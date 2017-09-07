import axios from 'axios';
import { getCSRF } from 'helpers';
import { LOAD } from 'redux/modules/main';
import { USER_CHANGED } from 'redux/modules/profile';

const LOAD_AUTH = 'mp/auth/LOAD_AUTH';
export const LOGOUT = 'mp/auth/LOGOUT';
export const LOAD_AUTH_SUCCESS = 'mp/auth/LOAD_AUTH_SUCCESS';
const LOAD_AUTH_ERROR = 'mp/auth/LOAD_AUTH_ERROR';
export const LOGOUT_LOAD = 'mp/auth/LOGOUT_LOAD';
const LOGOUT_SUCCESS = 'mp/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'mp/auth/LOGOUT_FAIL';
const ACTIVATE_CLUB = 'mp/auth/ACTIVATE_CLUB';
const CLEAR_ERROR = 'mp/auth/CLEAR_ERROR';

const initialState = {
  club: {},
  error: null,
  loading: false,
  loaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case ACTIVATE_CLUB:
      if (state.club._id) {
        return {
          ...state,
          club: {
            ...state.club,
            confirmed: true,
          },
        };
      }

      return state;
    case LOAD_AUTH:
      return {
        ...state,
        loading: true,
      };
    case LOAD_AUTH_SUCCESS:
      return {
        ...state,
        club: action.payload.club,
        loading: false,
        loaded: true,
      };
    case LOAD_AUTH_ERROR:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: typeof action.payload === 'object' ? 'Something went wrong' : action.payload,
      };
    case LOGOUT_LOAD:
      return {
        ...state,
        loaded: false,
        club: {},
      };
    case USER_CHANGED:
      return {
        ...state,
        club: action.payload,
      };
    default:
      return state;
  }
};


export const loadAuth = () => {
  const promise = axios.get('/api/clubs');

  return {
    types: [LOAD_AUTH, LOAD_AUTH_SUCCESS, LOAD_AUTH_ERROR],
    promise,
  };
};

export const isAuthLoaded = (state) => {
  return state.loaded;
};

export const logIn = (user) => {
  const promise = axios({
    method: 'POST',
    url: '/session/new',
    data: { user },
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
  });

  return {
    types: [LOAD_AUTH, LOAD_AUTH_SUCCESS, LOAD_AUTH_ERROR],
    promise,
  };
};

export const signUp = (user) => {
  const promise = axios({
    method: 'POST',
    url: '/api/clubs/new',
    data: { user },
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
  });

  return {
    types: [LOAD_AUTH, LOAD_AUTH_SUCCESS, LOAD_AUTH_ERROR],
    promise,
  };
};

export const logOut = () => {
  return {
    types: [LOGOUT_LOAD, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: axios.delete('/session'),
  };
};

export const activateClub = () => {
  return {
    types: [LOAD, ACTIVATE_CLUB, 'NOT NEEDED'],
    promise: new Promise((resolve) => {
      setTimeout(() => resolve({ data: '' }), 500);
    }),
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
