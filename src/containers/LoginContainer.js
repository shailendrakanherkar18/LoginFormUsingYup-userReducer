import React, { useReducer } from 'react';
import * as yup from 'yup';

import loginDetailsReducer from '../reducers/loginDetailsReducer';
import LoginComponent from '../components/Login';
import login from '../apis/loginApi';

const LoginContainer = () => {
  const initialState = {
    email: '',
    password: '',
    emailErrorText: '',
    passwordErrorText: '',
  };
  const [loginDetails, dispatch] = useReducer(
    loginDetailsReducer,
    initialState
  );
  const { email, password, passwordErrorText, emailErrorText } = loginDetails;

  const onEmailChange = (event) => {
    dispatch({ type: 'email', value: event.target.value });
  };

  const onPasswordChange = (event) => {
    dispatch({ type: 'password', value: event.target.value });
  };

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const onSubmit = () => {
    schema.isValid(loginDetails).then(function (valid) {
      if (!valid) {
        schema.validate(loginDetails, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch({ type: `${ele.path}Error`, value: ele.message });
          });
        });
      } else {
        //Initiated Login Api call
        login(loginDetails)
          .then((response) => {
            // success
            // set state isLoggedIn as true
            console.log('response: ', response);
          })
          .catch((error) => {
            // TODO show error to user
            console.log(error);
          });
      }
    });
  };

  // if(isLoggedIn) {
  //   //redirect
  //   return ( <DashboardContainer /> )
  // }

  return (
    <LoginComponent
      email={email}
      password={password}
      passwordErrorText={passwordErrorText}
      emailErrorText={emailErrorText}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onSubmit={onSubmit}
      dispatch={dispatch}
    />
  );
};

export default LoginContainer;
