import React from 'react';
import * as yup from 'yup';
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import LoginComponent from '../components/Login';
import login from '../apis/loginApi';
import { setEmail, setPassword, setError, setUserDetails } from '../actions/loginActions';

const LoginContainer = () => {

  const dispatch = useDispatch()
  const result = useSelector(state => state.loginDetailsReducer)
  const { email, password, passwordErrorText, emailErrorText, userDetails } = result;

  const loginDetails = {email, password}

  const onEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const onPasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
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
            dispatch(setError(`SET_${ele.path.toUpperCase()}_ERROR`, ele.message));
          });
        });
      } else {
        login(loginDetails)
          .then(({data}) => {
            dispatch(setUserDetails(data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  if(userDetails.auth_token) {
    return ( <Redirect to="/dashboard"/> )
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
