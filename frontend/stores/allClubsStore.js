import { Store } from "flux/utils"
import AppDispatcher from "../dispatcher/dispatcher"
import { FETCHED_ALL_CLUBS } from "../constants/constants"
const ClubStore = new Store(AppDispatcher);

let _allClubs = null;

const _setAllClubs = (clubs) => {
  _allClubs = clubs;
}

ClubStore.all = () => {
  return _allClubs;
}

ClubStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case FETCHED_ALL_CLUBS:
      _setAllClubs(payload.clubs);
      ClubStore.__emitChange();
      break;
  }
}

export default ClubStore;