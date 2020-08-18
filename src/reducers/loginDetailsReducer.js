import {LOGIN_REDUCER} from '../shared/actionContants'
const initialState = {
  email: '',
  password: '',
  userDetails: {},
  emailErrorText: '',
  passwordErrorText: ''
};

const loginDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REDUCER.SET_EMAIL:
      return {...state, email: action.value };
    case LOGIN_REDUCER.SET_PASSWORD:
      return {...state, password: action.value};
    case LOGIN_REDUCER.SET_EMAIL_ERROR:
      return {...state, emailErrorText: action.value};
    case LOGIN_REDUCER.SET_PASSWORD_ERROR:
      return {...state, passwordErrorText: action.value};
    case LOGIN_REDUCER.SET_USER_DETAILS:
      return {...state, userDetails: action.value}
    default:
      return state
  }
}

export default loginDetailsReducer;