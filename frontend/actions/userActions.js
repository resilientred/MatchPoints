import ApiUtil from "../utils/apiUtil";


export default {
  fetchCSRF() {
    ApiUtil.apiService({
      url: "/form",
      success: "fetchedCSRF"
    })
  },
  logIn(user) {
    let _csrf = user._csrf;
    delete user._csrf;
    ApiUtil.apiCSRFService({
      method: "POST",
      url: "/session/new",
      data: user,
      success: "loggedIn"
    }, _csrf)
  },

  signUp(user) {
    let _csrf = user._csrf;
    delete user._csrf;
    ApiUtil.apiCSRFService({
      method: "POST",
      url: "/user/new",
      data: user,
      success: "loggedIn"
    }, _csrf)
  },

  logOut() {
    ApiUtil.apiService({
      method: "DELETE",
      url: "/session",
      success: "loggedIn"
    })
  }

}