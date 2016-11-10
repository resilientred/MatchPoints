import { apiService, apiCSRFService } from "../utils/apiUtil";

export const fetchCurrentClub = () => {
  apiService({
    url: "/api/clubs",
    success: "loggedIn"
  });
};
export const resetPassword = (email) => {
  apiService({
    url: "/api/my/forgot",
    method: "PATCH",
    data: { email },
    success: "resetPassword"
  });
};
export const logIn = (user) => {
  apiCSRFService({
    method: "POST",
    url: "/session/new",
    data: { user },
    success: "loggedIn",
    error: "failedLogIn"
  });
};

export const signUp = (user) => {
  apiCSRFService({
    method: "POST",
    url: "/api/clubs/new",
    data: { user },
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
