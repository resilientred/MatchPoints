import { LOAD_SESSIONS, LOAD_SESSIONS_ERROR, LOAD_SESSIONS_SUCCESS } from "redux/modules/sessions";

export const LOAD = "mp/main/LOAD";
export const STOP_LOAD = "mp/main/STOP_LOAD";
export const ERROR = "mp/main/ERROR";
const CLEAR_ERROR = "mp/main/CLEAR_ERROR";

const initialState = {
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SESSIONS_SUCCESS:
    case STOP_LOAD:
      return {
        ...state,
        loading: false
      };
    case LOAD_SESSIONS:
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SESSIONS_ERROR:
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export const stopLoad = () => {
  return {
    type: STOP_LOAD
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};

export const setError = (msg) => {
  return {
    type: ERROR,
    payload: msg
  };
}
