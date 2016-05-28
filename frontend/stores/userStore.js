import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import UserConstants from "../constants/userConstants";

let _csrf = null;

let _setCSRF = (csrf) => {
  _csrf = csrf;
  UserStore.__emitChange();
}

const UserStore = new Store(AppDispatcher);

UserStore.getCSRF = () => {
    let token = _csrf;
    _csrf = null;
    return token;
  }
UserStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case UserConstants.FETCHED_CSFR:
      _setCSRF(payload.token);
      break;
  }
}


export default UserStore;