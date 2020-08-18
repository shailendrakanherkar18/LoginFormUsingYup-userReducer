import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import {Redirect} from 'react-router-dom';
import LoginComponent from '../components/Login';
import { setEmail, setPassword, loginRequest, setError, resetError } from "../actions/loginActions";

const LoginContainer = () => {
  const dispatch = useDispatch()
  const { email, password, emailErrorText, passwordErrorText, userDetails } = useSelector(state => state.loginDetailsReducer)

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
    schema.isValid({email, password}).then(function (valid) {
      if (!valid) {
        schema.validate({email, password}, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            dispatch(setError(ele));
          });
        });
      } else {
        dispatch(loginRequest({email, password}));
        //Initiated Login Api call
        // login({email, password})
        //   .then(({data}) => {
        //     // success
        //     dispatch(setUserDetails(data));
        //     console.log('data: ', data);
        //   })
        //   .catch((error) => {
        //     // TODO show error to user
        //     console.log(error);
        //   });
      }
    });
  };

  const clearError = (type) => {
    dispatch(resetError(type));
  }

  if(userDetails.auth_token) {
    //redirect
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
      clearError={clearError}
    />
  );
};

export default LoginContainer;
