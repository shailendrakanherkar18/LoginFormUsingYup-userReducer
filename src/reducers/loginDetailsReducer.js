const initialState = {
  email: '',
  password: '',
};

const loginDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'email':
      return {...state, email: action.value };
    case 'password':
      return {...state, password: action.value};
    case 'emailError':
      return {...state, emailErrorText: action.value};
    case 'passwordError':
      return {...state, passwordErrorText: action.value};
    default:
      throw new Error();
  }
}

export default loginDetailsReducer;