import React, { FC } from 'react';
import { Col, Hr, LayoutContent, LayoutFooter, LayoutHeader, Row } from '@webteam/layout';
import GitInfo from 'react-git-info/macro';
import dayjs from 'dayjs';
import styles from './page.module.css';
import Logo from '../../images/panamera-logo.png';

export const PageTemplate: FC = ({ children }) => {
  const {
    branch,
    commit: { date, shortHash, message },
  } = GitInfo();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <LayoutHeader>
          <Row size="s" alignItems="center">
            <Col span="inline">
              <img src={Logo} width={32} alt="Logo" className={styles.logo} />
            </Col>
            <Col span="inline">
              <h1 className="wt-h1">Panamera: parameters naming errors resolution assistant</h1>
            </Col>
          </Row>
        </LayoutHeader>
        <LayoutContent className="wt-offset-top-24">{children}</LayoutContent>
      </div>
      <LayoutFooter className={styles.footer}>
        <Hr />
        <p className="wt-text-3">
          {shortHash} | <span className={styles.branch}>{branch}</span> | built {dayjs(date).fromNow()} | {message}
        </p>
      </LayoutFooter>
    </div>
  );
};
