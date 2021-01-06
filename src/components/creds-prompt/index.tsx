import React, { FC, useEffect } from 'react';
import { Col, Row } from '@webteam/layout';
import styles from './creds-prompt.module.css';
import { ImportAwsCredentials } from './import-aws-creds';
import { AwsCredentials, useAwsCredentials } from '../../core/use-aws-credentials';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-use';

export const CredentialsPage: FC<{}> = () => {
  const { credentials, setCredentials } = useAwsCredentials();
  const history = useHistory();
  const location = useLocation();
  const returnTo = location?.state?.from ?? '/';
  const onCredentialsSelected = (value: AwsCredentials) => {
    setCredentials(value);
    history.push(returnTo);
  };
  useEffect(() => {
    if (credentials !== undefined) history.push(returnTo);
  }, [credentials, history, returnTo]);
  return (
    <Row>
      <Col span={4}>
        <ImportAwsCredentials onCredentialsSelected={onCredentialsSelected} />
        {/*<CredentialsManualInput />*/}
      </Col>
      <Col span="inline">
        <div className={styles.verticalLine} />
      </Col>
      <Col span="inline">
        <ul className="wt-ul">
          <li>Keys will be used for read-only operations</li>
          <li>Keys will be stored in browser local storage</li>
          <li>Keys will be used only from this webapp, they are not transferred anywhere</li>
          <li>You can remove them anytime you want later by clicking 'Sign out' link</li>
        </ul>
      </Col>
    </Row>
  );
};
