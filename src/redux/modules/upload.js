import axios from "axios";
import { getCSRF } from "helpers";
import { ADD_PLAYERS_SUCCESS } from "./newSession";

const LOAD = "mp/upload/LOAD";
const STOP_LOAD = "mp/upload/STOP_LOAD";
const FAIL = "mp/upload/FAIL";

export default (state = { processing: false }, action) => {
  switch (action.type) {
    case LOAD:
      return {
        processing: true
      };
    case ADD_PLAYERS_SUCCESS:
    case STOP_LOAD:
      return {
        processing: false
      };
    default:
      return state;
  }
};

export const startLoading = () => {
  return { type: LOAD };
};

export const stopLoading = () => {
  return { type: STOP_LOAD };
};

export const upload = (data) => {
  const promise = axios({
    url: "/api/upload/players",
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    },
    data
  });

  return {
    types: [LOAD, ADD_PLAYERS_SUCCESS, FAIL],
    promise
  };
};
