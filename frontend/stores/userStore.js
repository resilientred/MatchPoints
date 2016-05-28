import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import UserConstants from "../constants/userConstants";

let _csrf = null;

let _setCSRF = (csrf) => {
  _csrf = csrf.csrfToken;
}

const UserStore = new Store(AppDispatcher);

UserStore.getCSRF = () => {
    let token = _csrf;
    _csrf = null;
    return token;
  }
UserStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case UserConstants.FETCHED_CSRF:
      _setCSRF(payload.token);
      UserStore.__emitChange();
      break;
  }
}


export default UserStore;