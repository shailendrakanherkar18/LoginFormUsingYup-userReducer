import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <LoginContainer />
          </Route>
          <Route path="/dashboard">
            <DashboardContainer />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes