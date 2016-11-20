import axios from "axios";
import { getCSRF } from "helpers";
import { MESSAGE } from "redux/modules/main";

const CHANGE_ERROR = "mp/infoChange/CHANGE_ERROR";

const initialState = {
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ERROR:
      return {
        error: action.payload
      };
    default:
      return state;
  }
};

export const changePassword = (oldPassword, newPassword) => {
  const promise = axios({
    method: "PATCH",
    url: "/api/my?type=password",
    data: { data: { oldPassword, newPassword } },
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });

  return {
    types: ["NOT NEEDED", "NOT NEEDED", CHANGE_ERROR],
    promise
  };
};

export const changeInfo = (info) => {
  const promise = axios({
    method: "PATCH",
    url: "/api/my?type=info",
    data: {
      data: { info }
    },
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });

  return {
    types: ["NOT NEEDED", "NOT NEEDED", CHANGE_ERROR],
    promise
  };
};


export const resendEmail = () => {
  const promise = axios({
    url: "/api/my/accounts/resend",
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });
  return {
    types: ["NOT NEEDED", MESSAGE, MESSAGE],
    promise
  };
};
