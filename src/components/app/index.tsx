import React, { FC } from 'react';
import '@webteam/typography';
import { useAwsCredentialsStorage } from '../../core/use-aws-credentials-storage';
import { CredentialsPage } from '../creds-prompt';
import { MainPage } from '../params-table';
import { Route, Switch, useHistory } from 'react-router-dom';
import { RouteWithCredentials } from '../redirect-if-missing';
import { PageTemplate } from '../page';

export const App: FC = () => {
  const [credentials, setCredentials, removeCredentials] = useAwsCredentialsStorage();
  const history = useHistory();
  return (
    <PageTemplate>
      <Switch>
        <Route path="/credentials">
          <CredentialsPage
            onCredentialsSelected={(credentials) => {
              setCredentials(credentials);
              history.replace('/');
            }}
          />
        </Route>
        <RouteWithCredentials credentials={credentials} redirectTo="/credentials" path="/" exact={true}>
          <MainPage credentials={credentials!} removeCredentials={removeCredentials} />
        </RouteWithCredentials>
      </Switch>
    </PageTemplate>
  );
};
