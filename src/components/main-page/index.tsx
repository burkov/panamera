import React, { FC, useState } from 'react';
import { useAwsCredentials } from '../../core/use-aws-credentials';
import { maskKey } from '../../common/helpers';
import { AWSError } from 'aws-sdk';
import { ParameterWithPrefix, useAwsParametersStorage } from '../../core/use-aws-parameters-storage';
import dayjs from 'dayjs';
import { ErrorDiv } from '../error-div';
import Button from '@webteam/button';
import { ParametersTable } from './table';
import { refreshParams } from '../../core/refresh-params';
import { Loading } from '../loading';

export const MainPage: FC = () => {
  const { credentials, removeCredentials } = useAwsCredentials();
  const { accessKey, secretKey } = credentials ?? { accessKey: '', secretKey: '' };
  const [loading, setLoading] = useState<JSX.Element>();
  const [errors, setErrors] = useState<AWSError[]>([]);
  const { value, setValue, removeValue } = useAwsParametersStorage();
  const { fetchedAt, parameters } = value ?? { fetchedAt: undefined, parameters: [] };

  const onRefreshClicked = () => {
    setErrors([]);
    refreshParams(
      accessKey,
      secretKey,
      parameters.length,
      (error: AWSError) => setErrors((errors) => [...errors, error]),
      (s: JSX.Element) => setLoading(s),
      (result: ParameterWithPrefix[]) => {
        setLoading(undefined);
        setValue({ fetchedAt: new Date(), parameters: result });
      },
    ).catch(console.error);
  };

  const onSignOut = () => {
    removeCredentials();
    removeValue();
  };

  return (
    <>
      <div className="wt-text-2">
        Using key: <strong>{maskKey(accessKey)}</strong> | Fetched <strong>{parameters?.length}</strong> parameters <strong>{fetchedAt ? dayjs(fetchedAt).fromNow() : ''}</strong> |{' '}
        <Button size="xs" mode="nude" onClick={onRefreshClicked} disabled={!!loading}>
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
      <Loading title={loading} />
      {!loading && parameters.length > 0 && <ParametersTable params={parameters} />}
    </>
  );
};
