import React, { FC, useState } from 'react';
import { AwsCredentials } from '../../core/use-aws-credentials-storage';
import { LinkButton } from '../link-button';
import { maskKey } from '../../common/helpers';
import AWS, { AWSError, Credentials } from 'aws-sdk';
import { useEffectOnce } from 'react-use';
import { ParameterWithPrefix, useAwsParamsStorage } from '../../core/use-aws-params-storage';
import dayjs from 'dayjs';
import { GetParametersByPathResult, Parameter } from 'aws-sdk/clients/ssm';
import { ErrorDiv } from '../error-div';
import Button from '@webteam/button';
import { ParametersTable } from './table';
import { Page } from '../page';

interface Prefix {
  tomcat: string;
  lservice: string;
  allapps: string;
}

const paramsPrefixes: Prefix[] = [
  {
    tomcat: '/jetprofile-dev1/',
    lservice: '/jetprofile/dev1/lservice',
    allapps: '/jetprofile/dev1/allapps',
  },
  {
    tomcat: '/jetprofile-dev2/',
    lservice: '/jetprofile/dev2/lservice',
    allapps: '/jetprofile/dev2/allapps',
  },
  {
    tomcat: '/jetprofile-dev3/',
    lservice: '/jetprofile/dev3/lservice',
    allapps: '/jetprofile/dev3/allapps',
  },
  {
    tomcat: '/jetprofile-dev4/',
    lservice: '/jetprofile/dev4/lservice',
    allapps: '/jetprofile/dev4/allapps',
  },
  {
    tomcat: '/jetprofile-dev5/',
    lservice: '/jetprofile/dev5/lservice',
    allapps: '/jetprofile/dev5/allapps',
  },
  {
    tomcat: '/jetprofile-audt/',
    lservice: '/jetprofile/audt/lservice',
    allapps: '/jetprofile/audt/allapps',
  },
  {
    tomcat: '/jetprofile-stgn/',
    lservice: '/jetprofile/stgn/blue/lservice',
    allapps: '/jetprofile/stgn/blue/allapps',
  },
  {
    tomcat: '/jetprofile-stgn/',
    lservice: '/jetprofile/stgn/green/lservice',
    allapps: '/jetprofile/stgn/green/allapps',
  },
];

export const ParamsTable: FC<{ credentials: AwsCredentials; removeCredentials: () => void }> = ({ credentials, removeCredentials }) => {
  const { accessKey, secretKey } = credentials;
  const [loading, setLoading] = useState<string>();
  const [errors, setErrors] = useState<AWSError[]>([]);
  const ssm = new AWS.SSM({ region: 'eu-west-1', credentials: new Credentials(accessKey, secretKey) });
  const [{ fetchedAt, parameters }, setParameters, removeParams] = useAwsParamsStorage();
  useEffectOnce(() => {});

  const refreshParams = async () => {
    const result: ParameterWithPrefix[] = [];
    const allPrefixes = new Set(paramsPrefixes.flatMap(({ tomcat, allapps, lservice }) => [tomcat, lservice, allapps]));
    setErrors([]);
    for (const prefix of Array.from(allPrefixes)) {
      console.log(prefix);
      await new Promise((resolve) => {
        let page = 1;
        const request = ssm.getParametersByPath({ Path: prefix, Recursive: true, WithDecryption: true });
        request.eachPage((err: AWSError, data: GetParametersByPathResult, doneCallback) => {
          setLoading(`prefix '${prefix}' page ${page} (total: ${result.length})`);
          if (err) setErrors((e) => [...e, err]);
          if (!doneCallback?.()) {
            if (data?.Parameters)
              result.push(
                ...data?.Parameters.map((e: Parameter) => {
                  (e as ParameterWithPrefix).prefix = prefix;
                  return e as ParameterWithPrefix;
                }),
              );
            page++;
          }
          if (data == null) resolve(undefined);
          return true;
        });
      });
    }
    setParameters(result);
    setLoading(undefined);
  };

  const onSignOut = () => {
    removeCredentials();
    removeParams();
  };

  return (
    <Page wide={parameters.length > 0}>
      <div className="wt-text-2">
        Using key: <strong>{maskKey(accessKey)}</strong> | Fetched <strong>{parameters?.length}</strong> parameters <strong>{fetchedAt ? dayjs(fetchedAt).fromNow() : ''}</strong> |{' '}
        <Button size="xs" mode="nude" onClick={refreshParams}>
          Refresh
        </Button>{' '}
        |{' '}
        <Button size="xs" mode="nude" onClick={onSignOut}>
          Sign out
        </Button>
      </div>
      <div className="wt-offset-top-12" />
      {errors.length > 0 && <ErrorDiv error={new Error(`Got ${errors.length} unexpected error while refreshing params`)} />}
      {loading === undefined && parameters?.length === 0 && (
        <p className="wt-text-2">
          Parameters table is empty, press <strong>Refresh</strong> above to fill it
        </p>
      )}
      {loading && <p className="wt-text-2">Loading {loading}...</p>}
      {!loading && parameters.length > 0 && <ParametersTable params={parameters} />}
    </Page>
  );
};
