import { findSchemata } from "helpers";

const FOUND_SCHEMATA = "mp/session/FOUND_SCHEMATA";
const CHANGE_SCHEMA = "mp/session/CHANGE_SCHEMA";

const initialState = {
  selected: [],
  schemata: [[]]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FOUND_SCHEMATA:
      return {
        ...state,
        schemata: action.payload,
        selected: []
      };
    case CHANGE_SCHEMA:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};

export const updateSchemata = (numJoined, min, max) => {
  const range = [];
  for (let i = max; i >= min; i--) {
    range.push(i);
  }

  return {
    type: FOUND_SCHEMATA,
    payload: findSchemata(numJoined, range)
  };
};

export const changeSchema = (schema) => {
  return {
    type: CHANGE_SCHEMA,
    payload: schema
  };
};
