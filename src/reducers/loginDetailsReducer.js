const initialState = {
  email: '',
  password: '',
  emailErrorText: '',
  passwordErrorText: ''
};

const LoginDetailsReducer = (state = initialState, action) => {
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
      return state;
  }
}

export default LoginDetailsReducer;