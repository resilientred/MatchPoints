import axios from "axios";
import { getCSRF } from "helpers";
import { ADD_PLAYERS_SUCCESS } from "./newSession";

const LOAD = "mp/upload/LOAD";
const STOP_LOAD = "mp/upload/STOP_LOAD";
const FAIL = "mp/upload/FAIL";
const OPEN_UPLOAD_DIALOG = "mp/dialogs/OPEN_UPLOAD_DIALOG";
const CLOSE_UPLOAD_DIALOG = "mp/dialogs/CLOSE_UPLOAD_DIALOG";

const initialState = {
  dialogOpen: false,
  processing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        processing: true
      };
    case OPEN_UPLOAD_DIALOG:
      return {
        ...state,
        dialogOpen: true
      };
    case ADD_PLAYERS_SUCCESS:
    case CLOSE_UPLOAD_DIALOG:
      return {
        dialogOpen: false,
        processing: false
      };
    case STOP_LOAD:
      return {
        ...state,
        processing: false
      };
    default:
      return state;
  }
};

export const openUpload = () => {
  return {
    type: OPEN_UPLOAD_DIALOG
  };
};

export const closeUpload = () => {
  return {
    type: CLOSE_UPLOAD_DIALOG
  };
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
