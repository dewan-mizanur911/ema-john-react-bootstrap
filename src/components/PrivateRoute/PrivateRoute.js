import React from 'react';
import { Redirect, Route } from 'react-router';
import useContextProvider from '../../hooks/useContextProvider';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContextProvider();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      ></Route>
    );
};

export default PrivateRoute;