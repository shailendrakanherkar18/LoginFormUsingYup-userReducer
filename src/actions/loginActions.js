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

function *fetchData() {
    try {
      let response = yield fetch('https://jsonplaceholder.typicode.com/users');
      yield response.json();
    } catch (error) {
      console.log(error);
      
    }
  }
  
  let it = fetchData();
  let promise1 = it.next().value
  promise1.then((response) => {
    let promise2 = it.next(response).value
    promise2.then((data) => {
      // it.next(data);
      it.throw(new Error('Custom Error'))
    });
  });


