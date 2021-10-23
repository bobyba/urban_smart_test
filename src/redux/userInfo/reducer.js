const init = {
  authStatus: false,
  login: '',
  password: '',
};

const userInfoReducer = (state = init, action) => {
  switch (action.type) {
    case 'SET_ACCESS':
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default userInfoReducer;
