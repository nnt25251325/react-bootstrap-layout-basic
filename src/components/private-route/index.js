import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  children: Children,
  ...rest
}) => {
  // const token = localStorage.getItem(LS_SESSION_TOKEN);
  const token = 'token';

  return (
    <Route
      {...rest}
      render={routeProps => {
        // const isAllowed = true;

        // if (!token) {
        //   window.location.href = `/login?nextUrl=${window.location.href}`;
        // }

        // if (!isAllowed) {
        //   return <Redirect to="/403" />;
        // }

        if (token && Component) {
          return <Component {...routeProps} />;
        }

        if (token && Children) {
          return <Children {...routeProps} />;
        }
      }}
    />
  );
};
