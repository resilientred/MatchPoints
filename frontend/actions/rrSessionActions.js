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
  updateSession(data, ratingUpdateList, _csrf, id){
    debugger;
    ApiUtils.apiCSRFService({
      url: "/api/club/sessions/" + id,
      method:"PATCH",
      data: {
        data: data,
        ratingUpdateList: ratingUpdateList
      },
      success: "fetchedRRSession"
    }, _csrf)
  },
  deleteSession(id, _csrf){
    ApiUtils.apiCSRFService({
      url: "/api/club/sessions/" + id,
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

//instead of fetching csrf everytime, I should get the csrf everytime before I fire a request
//I feel like this would reduce a lot of the redundancy
//but this might defeat the purpose of csrf, since people hacking would be
//or maybe not, since to be able to get to this request, rhey have to be on this page and click on the button
