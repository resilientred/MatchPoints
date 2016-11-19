import axios from "axios";
import { getCSRF } from "helpers";

const CHANGE_ERROR = "mp/infoChange/CHANGE_ERROR";

const initialState = {
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
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

};
