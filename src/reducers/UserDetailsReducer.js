const initialState = {
  userDetails: {}
};

const UserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DETAILS':
      return {...state, userDetails: action.value };
    default:
      return state;
  }
}

export default UserDetailsReducer;