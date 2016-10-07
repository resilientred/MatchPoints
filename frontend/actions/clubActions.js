import { apiService, apiCSRFService } from "../utils/apiUtil";

export const fetchCurrentClub = () => {
  apiService({
    url: "/api/clubs",
    success: "loggedIn"
  });
};
export const logIn = (data) => {
  apiCSRFService({
    method: "POST",
    url: "/session/new",
    data: { user: data },
    success: "loggedIn",
    error: "failedLogIn"
  });
};

export const signUp = (data) => {
  apiCSRFService({
    method: "POST",
    url: "/api/clubs/new",
    data: { user: data },
    success: "loggedIn",
    error: "failedLogIn"
  });
};

export const logOut = () => {
  apiService({
    method: "DELETE",
    url: "/session",
    success: "loggedIn"
  });
};
