import ApiUtils from "../utils/apiUtils";

export default {
  fetchRRSessions(id) {
    ApiUtils.apiService({
      url: "/api/club/" + id + "rrSessions",
      success: "fetchedRRSessions"
    })
  }
  saveSession(id, data){
    ApiUtils.apiCSRFService({
      url: "/api/club/" + id,
      data: data,
      success: "savedRRSessions"
    }, _csrf)
  }

  deleteSession(id, clubId, _csrf){
    ApiUtils.apiCSRFService({

    }, _csrf)
  }

  finalizeResult(id, clubId, _csrf){
    ApiUtils.apiCSRFService({

    }, _csrf)
  }
}