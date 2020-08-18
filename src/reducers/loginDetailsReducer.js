import {LOGIN_REDUCER} from '../shared/actionConstants';
const initialState = {
  email: 'pragati.garud@joshsoftware.com',
  password: 'password',
  emailErrorText: '',
  passwordErrorText: '',
  userDetails: {},
  isLoading: false,
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
    case LOGIN_REDUCER.LOGIN_REQUEST: 
        return { ...state, isLoading: true };
    case LOGIN_REDUCER.SET_USER_DETAILS: 
        return {...state, userDetails: action.value, isLoading: false };
    case LOGIN_REDUCER.LOGIN_FAILED:
        return {...state, error: action.value, isLoading: false };
    default:
      return state;
  }
}

export default loginDetailsReducer;