import React, { FC } from 'react';
import { Page } from '../page';
import { AwsCredentials, useAwsCredentialsStorage } from '../../core/use-aws-credentials-storage';
import { LinkButton } from '../link-button';
import {maskKey} from "../../common/helpers";


export const ParamsTable: FC<{ credentials: AwsCredentials; removeCredentials: () => void }> = ({ credentials, removeCredentials }) => {
  const { accessKey, secretKey } = credentials;
  return (
    <Page>
      <div className="wt-text-2">
        Using key: {maskKey(accessKey)} | <LinkButton onClick={removeCredentials}>Sign out</LinkButton>
      </div>
    </Page>
  );
};
