import Dispatcher from "../dispatcher/dispatcher"
import { Store } from "flux/utils"
import { FETCHED_CLUB_ROUNDROBINS } from "../constants/constants"
const ClubQueryStore = new Store(Dispatcher);

let _roundrobins = {};

const _setRoundrobins = (roundrobins) => {
  //this should be updated or removed if a new session is posted..
  _roundrobins[roundrobins.clubId] = roundrobins.roundrobins;
}
ClubQueryStore.find = (clubId) => {
  return _roundrobins[clubId];
}
ClubQueryStore.findRoundrobin = (clubId, roundrobinId) => {
  return _roundrobins[clubId].find(roundrobin => roundrobin._id === roundrobinId)
}
ClubQueryStore.all = () => {
  return _roundrobins;
}
ClubQueryStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case FETCHED_CLUB_ROUNDROBINS:
      _setRoundrobins(payload.roundrobins);
      ClubQueryStore.__emitChange();
      break;
  }
}

export default ClubQueryStore;