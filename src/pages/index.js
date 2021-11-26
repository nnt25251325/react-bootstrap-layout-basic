import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute } from '../components';

const Login = lazy(() => import('./login'));
const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Error403 = lazy(() => import('./error-403'));
const Error404 = lazy(() => import('./error-404'));

export default () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/403" component={Error403} />
      <Route path="/404" component={Error404} />
      <Redirect to="/404" />
    </Switch>
  );
};
