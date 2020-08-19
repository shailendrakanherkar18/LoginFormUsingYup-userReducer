import { all, fork } from "redux-saga/effects";
import { userSaga } from "./loginSaga";

//watcher saga
export function *rootSaga() {
    yield all([
        fork(userSaga),
    ]);
}