import { apiService, apiCSRFService } from "../utils/apiUtil";


export const fetchRRSessions = (id) => {
  apiService({
    url: `/api/clubs/${id}/sessions`,
    success: "fetchedRRSessions"
  })
}
export const fetchSession = (id) => {
  apiService({
    url: "/api/clubs/sessions/" + id,
    success: "fetchedRRSession"
  })
}
export const saveSession = (data, clubId) => {
  apiCSRFService({
    url: "/api/clubs/" + clubId + "/session/new",
    method: "POST",
    data: { session: data },
    success: "fetchedRRSession"
  })
}
export const postResult = (data, ratingUpdateList, id) => {
  apiCSRFService({
    url: "/api/clubs/sessions/" + id,
    method:"POST",
    data: {
      data: data,
      ratingUpdateList: ratingUpdateList
    },
    success: "fetchedRRSession"
  })
}
export const updateResult = (data, ratingUpdateList, id) => {
  apiCSRFService({
    url: "/api/clubs/sessions/" + id,
    method:"PATCH",
    data: {
      data: data,
      ratingUpdateList: ratingUpdateList
    },
    success: "fetchedRRSession"
  })
}
export const deleteSession = (id) => {
  apiCSRFService({
    url: "/api/clubs/sessions/" + id,
    method: "DELETE",
    success: "deletedRRSession"
  });
}

