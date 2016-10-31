import { apiService, apiCSRFService } from "../utils/apiUtil";


export const fetchRRSessions = (id) => {
  apiService({
    url: `/api/clubs/${id}/sessions`,
    success: "fetchedRRSessions"
  });
};
export const fetchSession = (id) => {
  apiService({
    url: `/api/clubs/sessions/${id}`,
    success: "fetchedRRSession"
  });
};
export const saveSession = (data) => {
  apiCSRFService({
    url: `/api/my/session/new`,
    method: "POST",
    data: { session: data },
    success: "savedSession"
  });
};
export const temporarySession = (data) => {
  apiCSRFService({
    url: `/api/my/temp`,
    method: "POST",
    data: { session: data },
    success: "log"
  });
};
export const fetchTempSession = () => {
  apiService({
    url: `/api/my/temp`,
    success: "receivedCachedSession"
  });
};
export const destroyTempSession = () => {
  apiCSRFService({
    url: `/api/my/temp`,
    method: "DELETE",
    success: "log"
  });
};
export const postResult = (data, ratingUpdateList, id) => {
  apiCSRFService({
    url: `/api/my/sessions/${id}`,
    method: "POST",
    data: {
      result: { data, ratingUpdateList }
    },
    success: "fetchedRRSession",
    error: "sessionError"
  });
};
export const updateResult = (data, ratingUpdateList, id, date) => {
  apiCSRFService({
    url: `/api/my/sessions/${id}`,
    method: "PATCH",
    data: {
      result: { date, data, ratingUpdateList }
    },
    success: "fetchedRRSession"
  });
};
export const deleteSession = (id) => {
  apiCSRFService({
    url: `/api/my/sessions/${id}`,
    method: "DELETE",
    success: "deletedRRSession"
  });
};
