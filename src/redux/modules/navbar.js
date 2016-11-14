import { LOGOUT_LOAD } from "./auth";
import { OPEN_LOGIN } from "./splash";

const OPEN_NAV = "mp/navbar/OPEN_NAV";
const CLOSE_NAV = "mp/navbar/CLOSE_NAV";
const SET_TAB = "mp/navbar/SET_TAB";
const PRE_SET_TAB = "mp/navbar/PRE_SET_TAB";

const initialState = {
  opened: false,
  tab: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NAV:
      return {
        ...state,
        opened: true
      };
    case OPEN_LOGIN:
    case LOGOUT_LOAD:
      return {
        opened: false,
        tab: 0
      };
    case CLOSE_NAV:
      return {
        ...state,
        opened: false
      };
    case SET_TAB:
      return {
        ...state,
        tab: action.payload,
        opened: false
      };
    case PRE_SET_TAB:
      return {
        ...state,
        tab: action.payload
      };
    default:
      return state;
  }
};

export const open = () => {
  return {
    type: OPEN_NAV
  };
};

export const close = () => {
  return {
    type: CLOSE_NAV
  };
};

export const setTab = (tab) => {
  return {
    type: SET_TAB,
    payload: tab
  };
};

export const preSetTab = (path) => {
  let tab = 0;
  if (path === "/club/sessions/new" || path === "/club") {
    tab = 1;
  } else if (/^\/club\/sessions.*/.test(path)) {
    tab = 2;
  } else if (path === "/results") {
    tab = 3;
  }
  return {
    type: PRE_SET_TAB,
    payload: tab
  };
};