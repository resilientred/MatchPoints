import Dispatcher from "../dispatcher/dispatcher"
import { Store } from "flux/utils"
import { FETCHED_CLUB_DETAIL } from "../constants/constants"
const ClubQueryStore = new Store(Dispatcher);

let _clubs = {};

const _setClub = (club) => {
  _clubs[club._id] = club;
}
ClubQueryStore.findClub = (id) => {
  _clubs[id];
}

ClubQueryStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case FETCHED_CLUB_DETAIL:
      _setClub(payload.club);
      ClubQueryStore.__emitChange();
      break;
  }
}

export default ClubQueryStore;