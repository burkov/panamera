import React, { FC } from 'react';
import '@webteam/typography';
import { useAwsCredentialsStorage } from '../../core/use-aws-credentials-storage';
import { CredentialsPrompt } from '../creds-prompt';
import { ParamsTable } from '../params-table';
import { Route, Switch, useHistory } from 'react-router-dom';
import { RouteWithCredentials } from '../redirect-if-missing';

export const App: FC = () => {
  const [credentials, setCredentials, removeCredentials] = useAwsCredentialsStorage();
  const history = useHistory();
  return (
    <Switch>
      <Route path="/credentials">
        <CredentialsPrompt
          onCredentialsSelected={(credentials) => {
            setCredentials(credentials);
            history.replace('/');
          }}
        />
      </Route>
      <RouteWithCredentials credentials={credentials} redirectTo="/credentials" path="/" exact={true}>
        <ParamsTable credentials={credentials!} removeCredentials={removeCredentials} />
      </RouteWithCredentials>
    </Switch>
  );
};
