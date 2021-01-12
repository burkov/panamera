import { Col, Row } from '@webteam/layout';
import React, { FC } from 'react';
import Logo from '../../images/panamera-logo.png';
import styles from './loading.module.css';

export const Loading: FC<{ title: JSX.Element | undefined }> = ({ title }) => {
  if (!title) return null;

  return (
    <Row justify="around" alignItems="center" direction={"column"} size="0">
      <Col span="inline">
        <div className={styles.logoContainer}>
          <img src={Logo} width={64} alt="Panamera logo" className={styles.logo} />
        </div>
      </Col>
      <Col span={"inline"}>
        <p className="wt-text-2">{title}</p>
      </Col>
    </Row>
  );
};
