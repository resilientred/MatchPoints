import axios from "axios";
import { getCSRF } from "helpers";
import { MESSAGE } from "redux/modules/main";

export const USER_CHANGED = "mp/infoChange/USER_CHANGED";

// const initialState = {
//   error: null
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

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
    types: ["NOT NEEDED", "NOT_NEEDED", USER_CHANGED],
    promise
  };
};

export const changeInfo = (info, password) => {
  const promise = axios({
    method: "PATCH",
    url: "/api/my?type=info",
    data: {
      data: { password, info }
    },
    headers: {
      "X-CSRF-TOKEN": getCSRF()
    }
  });

  return {
    types: ["NOT NEEDED", "NOT_NEEDED", USER_CHANGED],
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
