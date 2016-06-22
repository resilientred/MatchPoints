import ApiUtils from "../utils/apiUtil";

export default {
  fetchRRSessions(id) {
    ApiUtils.apiService({
      url: "/api/club/" + id + "/rrSessions",
      success: "fetchedRRSessions"
    })
  },
  fetchSession(date) {
    
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

    }, _csrf)
  },

  finalizeResult(id, clubId, _csrf){
    ApiUtils.apiCSRFService({

    }, _csrf)
  }
}