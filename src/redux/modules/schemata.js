import { findSchemata } from "helpers";

const FOUND_SCHEMATA = "mp/session/FOUND_SCHEMATA";
const CHANGE_SCHEMA = "mp/session/CHANGE_SCHEMA";
const MOVE_PLAYER_UP = "mp/session/MOVE_PLAYER_UP";
const MOVE_PLAYER_DOWN = "mp/session/MOVE_PLAYER_DOWN";
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
    case MOVE_PLAYER_UP:
      if (action.payload === 0) {
        return state;
      } else {
        const selected = [...state.selected];
        selected[action.payload + 1] += 1;
        selected[action.payload] -= 1;
        return {
          ...state,
          selected
        };
      }
    case MOVE_PLAYER_DOWN:
      if (action.payload === state.selected.length - 1) {
        return state;
      } else {
        const selected = [...state.selected];
        selected[action.payload - 1] += 1;
        selected[action.payload] -= 1;
        return {
          ...state,
          selected
        };
      }
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

export const movePlayerUp = (group) => {
  return {
    type: MOVE_PLAYER_UP,
    payload: group
  };
};

export const movePlayerDown = (group) => {
  return {
    type: MOVE_PLAYER_DOWN,
    payload: group
  };
};
