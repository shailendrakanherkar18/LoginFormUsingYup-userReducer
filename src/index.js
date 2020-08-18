import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';

import projectsReducer from './reducers/projectsReducer';
import loginDetailsReducer from './reducers/loginDetailsReducer';
import Routes from './routes/routes';

const store = createStore(
  combineReducers({
    loginDetailsReducer, 
    projectsReducer
  })
);

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
