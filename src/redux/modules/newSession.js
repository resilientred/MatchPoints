import axios from "axios";
import { getCSRF } from "helpers";
import { ADD_PLAYER_SUCCESS, DELETE_PLAYER_SUCCESS, UPDATE_PLAYER_SUCCESS, FETCH_PLAYERS_SUCCESS } from "redux/modules/players";
import { UPDATE_SESSION_SUCCESS } from "redux/modules/sessions";
import { MESSAGE, LOAD } from "redux/modules/main";

export const LOAD_PLAYERS = "mp/session/LOAD_PLAYERS";
export const SET_MIN_AND_MAX = "mp/session/SET_MIN_AND_MAX";
export const PLAYERS_FAIL = "mp/session/FETCH_PLAYERS";
export const RESTORE_SESSION = "mp/session/RESTORE_SESSION";
export const ADD_PLAYERS_SUCCESS = "mp/session/ADD_PLAYERS_SUCCESS";
export const TOGGLE_REGISTER = "mp/session/REGISTER_PLAYER";
export const SAVE_SESSION_SUCCESS = "mp/session/SAVE_SESSION_SUCCESS";
const SET_DATE = "mp/rr/SET_DATE";

const initialState = {
  loading: false,
  loaded: false,
  allPlayers: {},
  addedPlayers: {},
  numJoined: 0,
  date: new Date(),
  pdfs: null,
  max: null,
  min: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MIN_AND_MAX:
      return {
        ...state,
        ...action.payload
      };
    case TOGGLE_REGISTER: {
      const addedPlayers = Object.assign({}, state.addedPlayers);
      let numJoined = state.numJoined;
      if (addedPlayers[action.payload]) {
        delete addedPlayers[action.payload];
        numJoined--;
      } else {
        addedPlayers[action.payload] = state.allPlayers[action.payload];
        numJoined++;
      }

      return {
        ...state,
        addedPlayers,
        numJoined
      };
    }
    case FETCH_PLAYERS_SUCCESS: {
      const allPlayers = {};
      action.payload.forEach((player) => {
        allPlayers[player._id] = player;
      });

      return {
        ...state,
        allPlayers,
        loading: false,
        loaded: true,
        players: action.payload,
      };
    }
    case DELETE_PLAYER_SUCCESS: {
      const allPlayers = Object.assign({}, state.allPlayers);
      delete allPlayers[action.payload];

      return {
        ...state,
        allPlayers
      };
    }
    case ADD_PLAYERS_SUCCESS: {
      const allPlayers = Object.assign({}, state.allPlayers);
      action.payload.forEach((player) => {
        allPlayers[player._id] = player;
      });
      return {
        ...state,
        allPlayers,
        loading: false
      };
    }
    case ADD_PLAYER_SUCCESS: {
      const allPlayers = Object.assign({}, state.allPlayers);
      allPlayers[action.payload._id] = action.payload;
      return {
        ...state,
        allPlayers,
        loading: false
      };
    }
    case UPDATE_PLAYER_SUCCESS: {
      const allPlayers = Object.assign({}, state.allPlayers);
      allPlayers[action.payload._id] = action.payload;

      return {
        ...state,
        allPlayers,
        loading: false
      };
    }
    case SET_DATE:
      return {
        ...state,
        date: action.payload
      };
    case LOAD_PLAYERS:
      return {
        ...state,
        loading: true
      };
    case UPDATE_SESSION_SUCCESS:
      //make sure the data in new session reflect the latest info
      return {
        ...state,
        loaded: false
      };
    case SAVE_SESSION_SUCCESS:
      return {
        loading: false,
        loaded: false,
        allPlayers: {},
        addedPlayers: {},
        numJoined: 0,
        date: new Date(),
        pdfs: null,
        max: null,
        min: null
      };
    default:
      return state;
  }
};

export const setMinAndMax = (min, max) => {
  return {
    type: SET_MIN_AND_MAX,
    payload: {
      min, max
    }
  };
};

export const setDate = (date) => {
  return {
    type: SET_DATE,
    payload: date
  };
};

export const toggleRegister = (id) => {
  return {
    type: TOGGLE_REGISTER,
    payload: id
  };
};

export const restoreSession = (data) => {
  return {
    type: RESTORE_SESSION,
    payload: data
  };
};

export const saveSession = (data) => {
  const promise = axios({
    url: "/api/my/session/new",
    method: "POST",
    data: { session: data },
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });

  return {
    types: [LOAD, SAVE_SESSION_SUCCESS, MESSAGE],
    promise
  };
};
