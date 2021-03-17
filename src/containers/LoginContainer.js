import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import LoginComponent from '../components/Login';
import login from '../apis/loginApi';

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState({});

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    //Initiated Login Api call
    login({ email, password })
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
  };

  if(userDetails.auth_token) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <LoginComponent
      email={email}
      password={password}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
