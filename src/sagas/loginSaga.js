import { call, put, takeLatest, all } from 'redux-saga/effects'
import { LOGIN_REDUCER } from '../shared/actionConstants';
import { setUserDetails, loginFailed } from "../actions/loginActions";
import login from '../apis/loginApi';

// worker saga
function *loginSaga(action) {
    try {
        const { data } = yield call(login, action.value);
        yield put(setUserDetails(data));  
    } catch(error) {
        yield put((loginFailed(error)));
    }
}

//watcher saga
export function *userSaga() {
    yield all([
        takeLatest(LOGIN_REDUCER.LOGIN_REQUEST, loginSaga)
    ]);
}