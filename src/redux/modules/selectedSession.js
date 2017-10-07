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
  scoreChange: {},
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
        results: {},
        scoreUpdate: {},
      };
    case UPDATE_SCORE: {
      const { idx, scoreChangeInGroup } = action.payload;
      const scoreUpdate = Object.assign({}, state.scoreUpdate);
      const scoreUpdateInGroup = scoreChangeInGroup[1];
      // scoreChange would be something different,
      // hopefully can be just a list of object { id: change }
      /*
        results { id<int>: { id1<int>: [3, 0], id2<int>: [0, 3] } }

        // get the player list with wins/losses
        // this is only when sort is clicked*
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
            record.losses + = losses;
          });

          return record;
        });
        // sort
        const sorted = playerRecords.sort((p1, p2) => {
          if (p1.wins > p2.wins) {
            return -1;
          } else if (p1.wins < p2.wins) {
            return 1;
          } else if (p1.losses < p2.losses) {
            return -1;
          } else {
            // also should see the match between them
            return 0;
          }
        });
      */
      Object.keys(scoreUpdateInGroup).forEach((playerId) => {
        if (scoreUpdateInGroup[playerId].change > 24) {
          scoreUpdate[playerId] = {
            ...scoreUpdateInGroup[playerId],
            change: 24 + ((scoreUpdateInGroup[playerId].change - 24) * 2),
          };
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
        debugger;
        const { players } = session;
        const scoreChange = {};
        for (const player of players) {
          scoreChange[player._id] = 0;
        }
        const result = {};
        session.selectedSchema.reduce((acc, numInGroup) => {
          const playersInGroup = players.slice(acc, acc + numInGroup);
          playersInGroup.forEach((player, i) => {
            result[player._id] = {};
            [...playersInGroup.slice(0, i), ...playersInGroup.slice(i + 1)].forEach((other) => {
              result[player._id][other._id] = [0, 0];
            });
          });
          return acc + numInGroup;
        }, 0);
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
