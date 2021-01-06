import React, { FC } from 'react';
import '@webteam/typography';
import { useAwsCredentials } from '../../core/use-aws-credentials';
import { CredentialsPage } from '../creds-prompt';
import { Route, Switch } from 'react-router-dom';
import { RouteWithCredentials } from '../route-with-credentials';
import { PageTemplate } from '../page';
import { MainPage } from '../main-page';

export const App: FC = () => {
  return (
    <PageTemplate>
      <Switch>
        <Route path="/credentials">
          <CredentialsPage />
        </Route>
        <RouteWithCredentials path="/" exact={true}>
          <MainPage />
        </RouteWithCredentials>
      </Switch>
    </PageTemplate>
  );
};
