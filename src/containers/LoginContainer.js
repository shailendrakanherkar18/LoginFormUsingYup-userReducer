import React, {useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as yup from 'yup';
import {Redirect} from 'react-router-dom';
import LoginDetailsReducer from '../reducers/LoginDetailsReducer';
import LoginComponent from '../components/Login';
import login from '../apis/loginApi';

const LoginContainer = () => {
  const dispatch = useDispatch()
  const { userDetails } = useSelector(state => state)
  const initialState = {
    email: '',
    password: '',
    emailErrorText: '',
    passwordErrorText: ''
  };
  const [loginDetails, dispatchLoginDetails] = useReducer(
    LoginDetailsReducer,
    initialState
  );

  const {email, password, emailErrorText, passwordErrorText} = loginDetails
 //central state example
  const onEmailChange = (event) => {
    dispatchLoginDetails({ type: 'email', value: event.target.value });
  };

  const onPasswordChange = (event) => {
    dispatchLoginDetails({ type: 'password', value: event.target.value });
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
            dispatchLoginDetails({ type: `${ele.path}Error`, value: ele.message });
          });
        });
      } else {
        //Initiated Login Api call
        login(loginDetails)
          .then(({data}) => {
            // success
            dispatch({type: 'SET_USER_DETAILS', value: data})
            console.log('data: ', data);
          })
          .catch((error) => {
            // TODO show error to user
            console.log(error);
          });
      }
    });
  };

  console.log(userDetails, 'userDetails')

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
      dispatch={dispatch}
    />
  );
};

export default LoginContainer;
