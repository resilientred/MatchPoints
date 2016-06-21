import ApiUtil from "../utils/apiUtil";


export default {
  fetchCSRF() {
    ApiUtil.apiService({
      url: "/form",
      success: "fetchedCSRF"
    })
  },
  fetchCurrentClub() {
    ApiUtil.apiService({
      url: "/api/club",
      success: "loggedIn"
    })
  },
  logIn(club) {
    let _csrf = club._csrf;
    delete club._csrf;
    ApiUtil.apiCSRFService({
      method: "POST",
      url: "/session/new",
      data: club,
      success: "loggedIn"
    }, _csrf)
  },

  signUp(club) {
    let _csrf = club._csrf;
    delete club._csrf;
    ApiUtil.apiCSRFService({
      method: "POST",
      url: "/api/club/new",
      data: club,
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