import axios from "axios";
import { LOAD, ERROR } from "./main";
import { UPDATE_SESSION_SUCCESS } from "redux/modules/sessions";

const FETCH_ALL_SUCCESS = "mp/clubs/FETCH_ALL_SUCCESS";
const FETCH_SESSIONS_SUCCESS = "mp/clubs/FETCH_SESSIONS_SUCCESS";
const SET_CLUB = "mp/clubs/SET_CLUB";
const SET_DATE = "mp/clubs/SET_DATE";

const initialState = {
  loaded: false,
  clubs: [],
  selectedClub: null,
  roundrobins: {},
  selectedDate: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SESSION_SUCCESS:
      return {
        selectedClub: null,
        roundrobins: {},
        selectedDate: null
      };
    case FETCH_ALL_SUCCESS: {
      const clubs = {};
      const data = action.payload;

      data.forEach((club) => {
        clubs[club._id] = club;
      });
      return {
        ...state,
        loaded: true,
        clubs
      };
    }
    case FETCH_SESSIONS_SUCCESS: {
      const roundrobins = Object.assign({}, state.roundrobins);
      roundrobins[state.selectedClub._id] = action.payload;
      return {
        ...state,
        roundrobins
      };
    }
    case SET_CLUB: {
      const selectedClub = state.clubs[action.payload];
      return {
        ...state,
        selectedClub
      };
    }
    case SET_DATE: {
      const roundrobins = state.roundrobins[state.selectedClub._id];
      const selectedDate = roundrobins.find(rr => rr._id === action.payload);
      return {
        ...state,
        selectedDate
      };
    }
    default:
      return state;
  }
};

export const setClub = (id) => {
  return {
    type: SET_CLUB,
    payload: id
  };
};

export const setDate = (date) => {
  return {
    type: SET_DATE,
    payload: date
  };
};

export const fetchRoundrobins = (clubId) => {
  return {
    types: [LOAD, FETCH_SESSIONS_SUCCESS, ERROR],
    promise: axios.get(`/api/clubs/${clubId}/sessions`)
  };
};

export const fetchAllClubs = () => {
  return {
    types: [LOAD, FETCH_ALL_SUCCESS, ERROR],
    promise: axios.get("/api/clubs/all")
  };
};

export const hasLoaded = (state) => {
  return state.query.loaded;
};
