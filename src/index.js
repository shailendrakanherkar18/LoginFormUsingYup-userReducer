import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';

import projectsReducer from './reducers/projectsReducer';
import loginDetailsReducer from './reducers/loginDetailsReducer';
import Routes from './routes/routes';
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    loginDetailsReducer, 
    projectsReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
    {/* <Example /> */}
    {/* <UseReducerExample /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// import login from "./apis/loginApi";

// function* generator() {
//   yield 3+4;
//   yield 5*6;
// }

// const it = generator();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());



// function* loginRequest () {
//   try {
//     const response = yield login({
//       email: "pragati.garud@joshsoftware.com",
//       password: "password1",
//     });
//     console.log(response);
//   } catch(error) {
//     console.log(error);
//   }
// }

// const itr = loginRequest();
// const { value } = itr.next();
// value.then(res => {
//   itr.next(res);
// })
// value.catch(res => {
//   itr.throw(new Error("custom error"));
// })