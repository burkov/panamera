import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAwsCredentials } from '../../core/use-aws-credentials';

export const RouteWithCredentials: FC<RouteProps> = ({ children, ...rest }) => {
  const { credentials } = useAwsCredentials();
  return (
    <Route {...rest}>
      {({ location }) => {
        if (credentials === undefined) {
          return <Redirect to={{ pathname: '/credentials', state: { from: location } }} />;
        }
        return children;
      }}
    </Route>
  );
};
