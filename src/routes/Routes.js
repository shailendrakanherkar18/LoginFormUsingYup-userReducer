import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginContainer from '../containers/LoginContainer';
import DashboardContainer from '../containers/DashboardContainer'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={LoginContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
      </Switch>
    </Router>
  );
}

export default Routes;