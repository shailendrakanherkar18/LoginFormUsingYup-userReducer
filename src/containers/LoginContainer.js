import React from 'react';
import * as yup from 'yup';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LoginComponent from '../components/Login';
import login from '../apis/loginApi';
import { LOGIN_REDUCER } from '../shared/actionContants';

const LoginContainer = () => {

  const dispatch = useDispatch()
  const result = useSelector(state => state.loginDetailsReducer)
  const { email, password, passwordErrorText, emailErrorText, userDetails } = result;
  const loginDetails = {email, password}

  const onEmailChange = (event) => {
    dispatch({ type: LOGIN_REDUCER.SET_EMAIL, value: event.target.value });
  };

  const onPasswordChange = (event) => {
    dispatch({ type: LOGIN_REDUCER.SET_PASSWORD, value: event.target.value });
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
            dispatch({ type: `SET_${ele.path.toUpperCase()}_ERROR`, value: ele.message });
            // SET_EMAIL_ERROR and SET_PASSWORD_ERROR
          });
        });
      } else {
        //Initiated Login Api call
        login(loginDetails)
          .then(({data}) => {
            // success
            // set state isLoggedIn as true
            dispatch({type: LOGIN_REDUCER.SET_USER_DETAILS, value: data})
            console.log('response: ', data);
          })
          .catch((error) => {
            // TODO show error to user
            console.log(error);
          });
      }
    });
  };

  if(userDetails.auth_token) {
    return <Redirect to="/dashboard"/>
  }

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
