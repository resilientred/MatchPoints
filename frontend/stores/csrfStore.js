import Dispatcher from "../dispatcher/dispatcher";
import { Store } from "flux/utils";

let _csrf = null;

let _setCSRF = (csrf) => {
  _csrf = csrf.csrfToken;
}
let CSRFStore = new Store(Dispatcher);

CSRFStore.getCSRF = () => {
    let token = _csrf;
    _csrf = null;
    return token;
}


CSRFStore.__onDispatch = (payload) => {
  switch(payload.actionType){
    case "FETCHED_CSRF":
      _setCSRF(payload.token);
      CSRFStore.__emitChange();
      break;
  }
}

export default CSRFStore;