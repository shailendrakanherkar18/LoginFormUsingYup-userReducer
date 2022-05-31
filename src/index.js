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
import { userSaga } from "./sagas/loginSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    loginDetailsReducer,
    projectsReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga);

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

//Basic example
// function* generator() {
//   yield 2*3;
//   yield "Pragati";
// }

//Return statement
// funcion* generator() {
//   yield "Hi!";
//   return "Pragati";
//   yield "welcome";
// }

//Lazy evaluation of infinite data
// funcion* list() {
//   let num = 1;
//   while(true) {
//     yield num;
//     num++;
//   }
// }

//two way communication
// function* generator() {
//   const name = yield "Enter name";
//   console.log(name);
// }

//parameter passing
// function* generator(name) {
//   console.log(name);
//   const lName = yield "Enter last name";
//   yield name + lName;
// }

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
