import { Store } from "flux/utils";
import Dispatcher from "../dispatcher/dispatcher";
import { FETCHED_CLUB_ROUNDROBINS } from "../constants/constants";

const ClubQueryStore = new Store(Dispatcher);

const roundrobins = {};

const setRoundrobins = (rr) => {
  roundrobins[rr.clubId] = rr.roundrobins;
};
ClubQueryStore.find = clubId => roundrobins[clubId];
ClubQueryStore.findRoundrobin = (clubId, roundrobinId) => (
  roundrobins[clubId].find(roundrobin => roundrobin._id === roundrobinId)
);
ClubQueryStore.all = () => roundrobins;

ClubQueryStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FETCHED_CLUB_ROUNDROBINS:
      setRoundrobins(payload.roundrobins);
      ClubQueryStore.__emitChange();
      break;
    default:
      break;
  }
};

export default ClubQueryStore;
