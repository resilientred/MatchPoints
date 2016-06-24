import ApiUtils from "../utils/apiUtil";

export default {
  fetchRRSessions(id) {
    ApiUtils.apiService({
      url: "/api/club/" + id + "/sessions",
      success: "fetchedRRSessions"
    })
  },
  fetchSession(id) {
    ApiUtils.apiService({
      url: "/api/club/sessions/" + id,
      success: "fetchedRRSession"
    })
  },
  saveSession(data, _csrf, clubId){
    ApiUtils.apiCSRFService({
      url: "/api/club/" + clubId + "/session/new",
      method: "POST",
      data: data,
      success: "fetchedRRSession"
    }, _csrf)
  },

  deleteSession(id, clubId, _csrf){
    ApiUtils.apiCSRFService({
      url: "/api/club/" + clubId + "/sessions/" + id,
      method: "DELETE",
      success: "deletedRRSession"
    }, _csrf);
  },

  finalizeResult(id, clubId, _csrf){
    ApiUtils.apiCSRFService({
      url: "/api/club/" + clubId + "/sessions/" + id  + "/finalize",
      method: "PATCH",
      success: "fetchedRRSession"
    }, _csrf)
  }
}