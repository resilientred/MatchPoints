import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/dispatcher";
import UserConstants from "../constants/userConstants";

let _csrf = null;
let _currentUser = null;

let _setCurrentUser = (user) => {
  _currentUser = user;
}
const UserStore = new Store(AppDispatcher);


UserStore.getCurrentUser = () => {
  return _currentUser;
}

UserStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case UserConstants.LOGGED_IN:
      _setCurrentUser(payload.user);
      UserStore.__emitChange();
      break;
  }
}


export default UserStore;