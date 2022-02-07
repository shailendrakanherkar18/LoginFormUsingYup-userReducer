import login from '../apis/loginApi';
import { LOGIN_REDUCER } from '../shared/actionContants';

export const setEmail = email => {
    return {
      type: LOGIN_REDUCER.SET_EMAIL,
      value: email
    };
};

export const setPassword = password => {
    return {
      type: LOGIN_REDUCER.SET_PASSWORD,
      value: password
    };
};

export const setError = (type, msg) => {
    return {
      type,
      value: msg
    };
};

export const setUserDetails = (data) => {
  return {
    type: LOGIN_REDUCER.SET_USER_DETAILS,
    value: data
  };
};

// export const loginRequest = data => {
//   return login(data);
// };
