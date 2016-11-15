import axios from "axios";
import { getCSRF } from "helpers";

export const resetWithUsername = (username) => {
  const promise = axios({
    method: "POST",
    url: `/accounts/reset/request?username=${username}`,
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });
  return {
    types: ["NOT NEEDED", "NOT NEEDED", "NOT NEEDED"],
    promise
  };
};

export const resetWithEmail = (email) => {
  const promise = axios({
    method: "POST",
    url: `/accounts/reset/request?email=${email}`,
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });
  return {
    types: ["NOT NEEDED", "NOT NEEDED", "NOT NEEDED"],
    promise
  };
};

export const resetPassword = (token) => {
  const promise = axios({
    method: "POST",
    url: `/accounts/reset`,
    data: { token }
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });
  return {
    types: ["NOT NEEDED", "NOT NEEDED", "NOT NEEDED"],
    promise
  };
};