import React, { FC } from 'react';
import { Page } from '../page';
import { Col, Row } from '@webteam/layout';
import styles from './creds-prompt.module.css';
import { ImportAwsCredentials } from './import-aws-creds';
import { AwsCredentials } from '../../core/use-aws-credentials-storage';

export const CredentialsPrompt: FC<{ onCredentialsSelected: (credentials: AwsCredentials) => void }> = ({ onCredentialsSelected }) => {
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
