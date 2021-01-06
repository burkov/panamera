import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AwsCredentials } from '../../core/use-aws-credentials-storage';

export const RouteWithCredentials: FC<{ credentials?: AwsCredentials; redirectTo: string } & RouteProps> = ({ credentials, redirectTo, children, ...rest }) => {
  return (
    <Route {...rest}>
      {({ location }) => {
        return credentials === undefined ? <Redirect to={{ pathname: redirectTo, state: { from: location } }} /> : children;
      }}
    </Route>
  );
};
