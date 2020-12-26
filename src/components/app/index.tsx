import React, { FC } from 'react';
import '@webteam/typography';
import { useAwsCredentialsStorage } from '../../core/use-aws-credentials-storage';
import { CredentialsPrompt } from '../creds-prompt';
import { ParamsTable } from '../params-table';

export const App: FC = ({}) => {
  const credentials = useAwsCredentialsStorage();
  if (credentials === undefined) return <CredentialsPrompt />;
  return <ParamsTable />;
};
