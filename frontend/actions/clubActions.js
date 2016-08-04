import ApiUtil from "../utils/apiUtil";


export default {
  fetchCurrentClub() {
    ApiUtil.apiService({
      url: "/api/club",
      success: "loggedIn"
    })
  },
  logIn(club) {
    ApiUtil.apiCSRFService({
      method: "POST",
      url: "/session/new",
      data: club,
      success: "loggedIn"
    })
  },

  signUp(club) {
    ApiUtil.apiCSRFService({
      method: "POST",
      url: "/api/club/new",
      data: club,
      success: "loggedIn"
    })
  },

  logOut() {
    ApiUtil.apiService({
      method: "DELETE",
      url: "/session",
      success: "loggedIn"
    })
  }

}