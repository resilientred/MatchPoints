import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import { FETCHED_ALL_CLUBS } from "../constants/constants";

const ClubStore = new Store(AppDispatcher);

let allClubs = null;

const setAllClubs = (clubs) => {
  allClubs = clubs;
};

ClubStore.all = () => allClubs;

ClubStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FETCHED_ALL_CLUBS:
      setAllClubs(payload.clubs);
      ClubStore.__emitChange();
      break;
    default:
      break;
  }
};

export default ClubStore;
