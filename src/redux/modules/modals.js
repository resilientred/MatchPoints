const OPEN_EDIT_MODAL = 'mp/modals/OPEN_EDIT_MODAL';
const OPEN_NEW_MODAL = 'mp/modals/OPEN_NEW_MODAL';
const CLOSE_EDIT_MODAL = 'mp/modals/CLOSE_EDIT_MODAL';
const CLOSE_NEW_MODAL = 'mp/modals/CLOSE_NEW_MODAL';

const initialState = {
  newPlayerModal: false,
  editPlayerModal: {
    open: false,
    player: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NEW_MODAL:
      return {
        ...state,
        newPlayerModal: true,
        editPlayerModal: {
          open: false,
          player: null,
        },
      };
    case OPEN_EDIT_MODAL: {
      const player = action.payload;
      return {
        ...state,
        newPlayerModal: false,
        editPlayerModal: {
          open: true,
          player: {
            _id: player._id,
            name: player.name,
            rating: player.rating,
          },
        },
      };
    }
    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        editPlayerModal: {
          open: false,
          player: null,
        },
      };
    case CLOSE_NEW_MODAL:
      return {
        ...state,
        newPlayerModal: false,
      };
    default:
      return state;
  }
};

export const openEditModal = (player) => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: player,
  };
};

export const openNewModal = () => {
  return {
    type: OPEN_NEW_MODAL,
  };
};
export const closeEditModal = () => {
  return {
    type: CLOSE_EDIT_MODAL,
  };
};

export const closeNewModal = () => {
  return {
    type: CLOSE_NEW_MODAL,
  };
};
