import axios from 'axios';
import { getCSRF } from 'helpers';
import { LOAD } from 'redux/modules/main';

const LOAD_CHANGE = 'mp/reset/LOAD_CHANGE';
const CHANGE_SUCCESS = 'mp/reset/CHANGE_SUCCESS';
const CHANGE_ERROR = 'mp/reset/CHANGE_ERROR';
const SET_TOKEN = 'mp/reset/SET_TOKEN';
const SET_ERROR = 'mp/reset/SET_ERROR';
const initialState = {
  token: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SUCCESS:
      return {
        success: true,
      };
    case SET_TOKEN:
      return {
        token: action.payload,
      };
    case CHANGE_ERROR:
    case SET_ERROR:
      return {
        token: null,
        success: false,
      };
    default:
      return state;
  }
};

export const resetWithUsername = (username) => {
  const promise = axios({
    method: 'POST',
    url: `/accounts/reset/request?username=${username}`,
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
  });
  return {
    types: [LOAD, 'NOT NEEDED', 'NOT NEEDED'],
    promise,
  };
};

export const resetWithEmail = (email) => {
  const promise = axios({
    method: 'POST',
    url: `/accounts/reset/request?email=${email}`,
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
  });
  return {
    types: [LOAD, 'NOT NEEDED', 'NOT NEEDED'],
    promise,
  };
};

export const resetPassword = (token, newPassword) => {
  const promise = axios({
    method: 'POST',
    url: '/accounts/reset',
    data: { token, newPassword },
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
  });
  return {
    types: [LOAD_CHANGE, CHANGE_SUCCESS, CHANGE_ERROR],
    promise,
  };
};

export const changePassword = (data) => {
  const promise = axios({
    method: 'POST',
    url: '/api/my/account/password',
    data,
    headers: {
      'X-CSRF-TOKEN': getCSRF(),
    },
  });

  return {
    types: ['NOT NEEDED', 'NOT NEEDED', 'NOT NEEDED'],
    promise,
  };
};


export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
