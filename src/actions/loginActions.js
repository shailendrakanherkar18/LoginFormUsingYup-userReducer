import { LOGIN_REDUCER } from '../shared/actionConstants';
import login from '../apis/loginApi';

export const loginRequest = (data) => {
    return {
        type: LOGIN_REDUCER.LOGIN_REQUEST,
        value: data
    }
}

export const setUserDetails = user => {
    return {
        type: LOGIN_REDUCER.SET_USER_DETAILS, 
        value: user
    }
}

export const loginFailed = error => {
    return {
        type: LOGIN_REDUCER.LOGIN_FAILED,
        value: error
    }
}

export const loginAction = ({email, password}) => {
    return login({email, password});
}


