import { apiService } from "../utils/apiUtil";


export const fetchCurrentClub = () => {
  apiService({
    url: "/api/club",
    success: "loggedIn"
  })
}
export const logIn = (data) => {
  apiCSRFService({
    method: "POST"
    url: "/session/new",
    data: { user: data },
    success: "loggedIn",
    error: "failedLoggedIn"
  })
}
export const logOut = () => {
  apiService({
    method: "DELETE",
    url: "/session",
    success: "loggedIn"
  })
}

