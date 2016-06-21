import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import ClubConstants from "../constants/clubConstants";

let _csrf = null;
let _currentClub = null;

let _setCurrentClub = (club) => {
  _currentClub = club;
}

const ClubStore = new Store(AppDispatcher);


ClubStore.getCurrentClub = () => {
  return _currentClub;
}

ClubStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case ClubConstants.LOGGED_IN:
      _setCurrentClub(payload.club);
      ClubStore.__emitChange();
      break;
  }
}


export default ClubStore;