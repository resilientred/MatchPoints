import axios from 'axios';
import { LOAD, MESSAGE } from 'redux/modules/main';
import { DELETE_SESSION_SUCCESS } from 'redux/modules/sessions';

const FETCH_SESSION_SUCCESS = 'mp/selectedSession/FETCH_SESSION_SUCCESS';
const SELECT_SESSION = 'mp/selectedSession/SELECT_SESSION';
const UPDATE_SCORE = 'mp/selectedSession/UPDATE_SCORE';
const UPDATE_RESULT = 'mp/selectedSession/UPDATE_RESULT';
const initialState = {
  loading: false,
  loaded: false,
  session: null,
  sortedPlayerList: [],
  ratingChange: {},
  ratingChangeDetail: {},
  results: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SESSION_SUCCESS:
      return initialState;
    case UPDATE_SCORE: {
      const { idx, ratingChangeDetail, ratingChange, results } = action.payload;
      const playerRecords = Object.keys(results).map((playerId) => {
        const versusRecords = results[playerId];
        const record = {
          id: playerId,
          wins: 0,
          losses: 0,
        };
        Object.keys(versusRecords).forEach((otherPlayer) => {
          const [wins, losses] = versusRecords[otherPlayer];
          record.wins += wins;
          record.losses += losses;
        });

        return record;
      });

      const sortedPlayerList = playerRecords.sort((p1, p2) => {
        if (p1.wins > p2.wins) {
          return -1;
        } else if (p1.wins < p2.wins) {
          return 1;
        } else if (p1.losses < p2.losses) {
          return -1;
        } else {
          const [player1GameWon, player2GameWon] = state.results[p1.id][p2.id];
          return player1GameWon - player2GameWon;
        }
      });

      return {
        ...state,
        results: Object.assign({}, state.results, results),
        sortedPlayerList: [
          ...state.sortedPlayerList.slice(0, idx),
          sortedPlayerList,
          ...state.sortedPlayerList.slice(idx + 1),
        ],
        ratingChangeDetail: Object.assign({}, state.ratingChangeDetail, ratingChangeDetail),
        ratingChange: Object.assign({}, state.ratingChange, ratingChange),
      };
    }
    case FETCH_SESSION_SUCCESS:
    case SELECT_SESSION: {
      const session = action.payload;
      if (!session.finalized) {
        const { players } = session;
        const ratingChange = {};
        for (const player of players) {
          ratingChange[player._id] = 0;
        }
        const sortedPlayerList = [];
        const results = {};
        session.selectedSchema.reduce((acc, numInGroup) => {
          const playersInGroup = players.slice(acc, acc + numInGroup);
          sortedPlayerList.push(playersInGroup.map(p => ({
            id: p._id,
            wins: 0,
            losses: 0,
          })));
          playersInGroup.forEach((player, i) => {
            results[player._id] = {};
            [...playersInGroup.slice(0, i), ...playersInGroup.slice(i + 1)].forEach((other) => {
              results[player._id][other._id] = [0, 0];
            });
          });
          return acc + numInGroup;
        }, 0);
        return {
          ...state,
          loaded: true,
          loading: false,
          sortedPlayerList,
          session,
          results,
          ratingChange,
        };
      }
      return {
        ...state,
        loaded: true,
        loading: false,
        session,
        ratingChange: session.ratingChange,
      };
    }

    case UPDATE_RESULT:
      return {
        ...state,
        results: Object.assign({}, state.results, action.payload.results),
      };

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

export const updateScore = (ratingChangeDetail, ratingChange, results, idx) => {
  return {
    type: UPDATE_SCORE,
    payload: {
      ratingChangeDetail,
      ratingChange,
      results,
      idx,
    },
  };
};

export const updateResult = (results) => {
  return {
    type: UPDATE_RESULT,
    payload: {
      results
    },
  };
};
