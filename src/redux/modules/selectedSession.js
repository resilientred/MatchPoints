import axios from 'axios';
import { LOAD, MESSAGE } from 'redux/modules/main';
import { DELETE_SESSION_SUCCESS } from 'redux/modules/sessions';

const FETCH_SESSION_SUCCESS = 'mp/selectedSession/FETCH_SESSION_SUCCESS';
const SELECT_SESSION = 'mp/selectedSession/SELECT_SESSION';
const UPDATE_SCORE = 'mp/selectedSession/UPDATE_SCORE';
const initialState = {
  loading: false,
  loaded: false,
  session: null,
  scoreChange: [],
  scoreUpdate: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SESSION_SUCCESS:
      return {
        loading: false,
        loaded: false,
        session: null,
        scoreChange: [],
        scoreUpdate: {},
      };
    case UPDATE_SCORE: {
      const { idx, scoreChangeInGroup } = action.payload;
      const scoreUpdate = Object.assign({}, state.scoreUpdate);
      const scoreUpdateInGroup = scoreChangeInGroup[1];

      Object.keys(scoreUpdateInGroup).forEach((playerId) => {
        if (scoreUpdateInGroup[playerId].change > 24) {
          scoreUpdate[playerId] = {
            ...scoreUpdateInGroup[playerId],
            change: 24 + ((scoreUpdateInGroup[playerId].change - 24) * 2),
          };
          console.log(scoreUpdate[playerId]);
        } else {
          scoreUpdate[playerId] = scoreUpdateInGroup[playerId];
        }
      });
      return {
        ...state,
        scoreChange: [
          ...state.scoreChange.slice(0, idx),
          scoreChangeInGroup[0],
          ...state.scoreChange.slice(idx + 1),
        ],
        scoreUpdate,
      };
    }
    case FETCH_SESSION_SUCCESS:
    case SELECT_SESSION: {
      const session = action.payload;
      if (!session.finalized) {
        const scoreChange = [...Array(session.selectedSchema.length)];
        const result = [...Array(session.sizeOfGroup)].map(() =>
          [...Array(session.sizeOfGroup)].map(() => [0, 0]));
        return {
          loaded: true,
          loading: false,
          scoreUpdate: {},
          session,
          result,
          scoreChange,
        };
      }
      return {
        loaded: true,
        loading: false,
        session,
        scoreChange: session.scoreChange,
        scoreUpdate: null,
      };
    }
    default:
      return state;
  }
};

export const isLoaded = (state, id) => {
  if (!state.selectedSession.loaded) {
    return false;
  }

  if (!state.selectedSession.session.id !== id) {
    return false;
  }

  return true;
};

export const setSession = (session) => {
  return {
    type: SELECT_SESSION,
    payload: session,
  };
};

export const fetchSession = (id) => {
  return {
    types: [LOAD, FETCH_SESSION_SUCCESS, MESSAGE],
    promise: axios.get(`/api/my/sessions/${id}`),
  };
};

export const updateScore = (scoreChangeInGroup, idx) => {
  return {
    type: UPDATE_SCORE,
    payload: {
      scoreChangeInGroup, idx,
    },
  };
};
