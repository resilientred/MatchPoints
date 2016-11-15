import axios from "axios";
import { getCSRF } from "helpers";
import { ERROR } from "redux/modules/main";

export const resendEmail = () => {
  const promise = axios({
      url: "/api/my/accounts/resend",
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": getCSRF()
      }
    });
  return {
    types: ["NOT NEEDED", "NOT NEEDED", ERROR],
    promise
  };
};