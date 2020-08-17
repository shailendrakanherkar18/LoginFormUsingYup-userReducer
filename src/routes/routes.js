import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import DashboardContainer from "../containers/DashboardContainer";
import PrivateRoute from './PrivateRoute'
import { useSelector } from 'react-redux';

const Routes = () => {
  const { userDetails } = useSelector(state => state.LoginDetailsReducer)
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <LoginContainer />
          </Route>
          <PrivateRoute path="/dashboard" isLoggedIn={userDetails.auth_token}>
            <DashboardContainer />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

export default Routes