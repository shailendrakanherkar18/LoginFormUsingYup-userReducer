import React, { useState } from 'react';
import * as yup from 'yup';
import {Redirect} from 'react-router-dom';
import LoginComponent from '../components/Login';
import login from '../apis/loginApi';

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const loginDetails = { email, password };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const onSubmit = () => {
    schema.isValid(loginDetails).then(function (valid) {
      if (!valid) {
        schema.validate(loginDetails, { abortEarly: false }).catch((err) => {
          console.log(err);
          err.inner.forEach(ele => {
            if(ele.path === "email") {
              setEmailErrorText(ele.message);
            } else {
              setPasswordErrorText(ele.message);
            }
          });
        });
      } else {
        //Initiated Login Api call
        login(loginDetails)
          .then(({data}) => {
            // success
            // set state isLoggedIn as true
            setUserDetails(data);
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

  console.log(emailErrorText);
  

  return (
    <LoginComponent
      email={email}
      password={password}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      emailErrorText={emailErrorText}
      passwordErrorText={passwordErrorText}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
