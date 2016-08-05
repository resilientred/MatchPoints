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
  saveSession(data, clubId){
    ApiUtils.apiCSRFService({
      url: "/api/club/" + clubId + "/session/new",
      method: "POST",
      data: data,
      success: "fetchedRRSession"
    })
  },
  postResult(data, ratingUpdateList, id){
    ApiUtils.apiCSRFService({
      url: "/api/club/sessions/" + id,
      method:"POST",
      data: {
        data: data,
        ratingUpdateList: ratingUpdateList
      },
      success: "fetchedRRSession"
    })
  },
  updateResult(data, ratingUpdateList, id){
    ApiUtils.apiCSRFService({
      url: "/api/club/sessions/" + id,
      method:"PATCH",
      data: {
        data: data,
        ratingUpdateList: ratingUpdateList
      },
      success: "fetchedRRSession"
    })
  },
  deleteSession(id){
    ApiUtils.apiCSRFService({
      url: "/api/club/sessions/" + id,
      method: "DELETE",
      success: "deletedRRSession"
    });
  }
}
