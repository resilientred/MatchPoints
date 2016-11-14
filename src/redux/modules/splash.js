const SET_PAGE = "mp/splash/SET_PAGE";
export const OPEN_LOGIN = "mp/splash/OPEN_LOGIN";

export default (state = { page: 0 }, action) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return {
        page: 1
      };
    case SET_PAGE:
      return {
        page: action.payload
      };
    default:
      return state;
  }
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page
  };
};

export const openLogin = () => {
  return {
    type: OPEN_LOGIN
  };
};
