const SET_ACCESS = "SET_ACCESS";

/* ------------------------------- */

const setAuth = (data) => {
  return {
    type: SET_ACCESS,
    data,
  };
};

/* ------------------------------- */

export const setAuthThunk = (data) => async (dispatch) => {
  dispatch(setAuth(data));
};
