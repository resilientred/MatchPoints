import { ADD_PLAYERS_SUCCESS } from "./newSession";

const OPEN_UPLOAD_DIALOG = "mp/dialogs/OPEN_UPLOAD_DIALOG";
const CLOSE_UPLOAD_DIALOG = "mp/dialogs/CLOSE_UPLOAD_DIALOG";

const initialState = {
  uploadDialogOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_UPLOAD_DIALOG:
      return {
        restoreDialogOpen: false,
        uploadDialogOpen: true
      };
    case ADD_PLAYERS_SUCCESS:
    case CLOSE_UPLOAD_DIALOG:
      return {
        restoreDialogOpen: false,
        uploadDialogOpen: false
      };
    default:
      return state;
  }
};

export const openUploadDialog = () => {
  return {
    type: OPEN_UPLOAD_DIALOG
  };
};

export const closeUploadDialog = () => {
  return {
    type: CLOSE_UPLOAD_DIALOG
  };
};

