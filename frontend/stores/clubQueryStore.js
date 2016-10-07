import { Store } from "flux/utils";
import Dispatcher from "../dispatcher/dispatcher";
import { FETCHED_CLUB_ROUNDROBINS } from "../constants/constants";

const ClubQueryStore = new Store(Dispatcher);

const _roundrobins = {};

const _setRoundrobins = roundrobins => {
  _roundrobins[roundrobins.clubId] = roundrobins.roundrobins;
};
ClubQueryStore.find = clubId => _roundrobins[clubId];
ClubQueryStore.findRoundrobin = (clubId, roundrobinId) => (
  _roundrobins[clubId].find(roundrobin => roundrobin._id === roundrobinId)
);
ClubQueryStore.all = () => _roundrobins;

ClubQueryStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FETCHED_CLUB_ROUNDROBINS:
      _setRoundrobins(payload.roundrobins);
      ClubQueryStore.__emitChange();
      break;
    default:
      break;
  }
};

export default ClubQueryStore;
