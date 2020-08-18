import { all } from "redux-saga/effects";
import { userSaga } from "./loginSaga";

//watcher saga
export function *rootSaga() {
    yield all([
        userSaga(),
    ]);
}