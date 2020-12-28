import React, { FC } from 'react';
import { Container, Hr, LayoutContent, LayoutFooter, LayoutHeader } from '@webteam/layout';
import GitInfo from 'react-git-info/macro';
import dayjs from 'dayjs';
import styles from './page.module.css';

export const Page: FC<{ wide: boolean }> = ({ children, wide }) => {
  const {
    branch,
    commit: { date, shortHash, message },
  } = GitInfo();
  return !wide ? (
    <Container className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <LayoutHeader>
          <h1 className="wt-h1">Panamera: parameter naming errors resolution assistant</h1>
        </LayoutHeader>
        <LayoutContent className="wt-offset-top-24">{children}</LayoutContent>
      </div>
      <LayoutFooter className={styles.footer}>
        <Hr />
        <p className="wt-text-3">
          {shortHash} | <span className={styles.branch}>{branch}</span> | built {dayjs(date).fromNow()} | {message}
        </p>
      </LayoutFooter>
    </Container>
  ) : (
    <div className={styles.pageContainer + " " + styles.wideDiv} >
      <div className={styles.contentWrapper}>
        <LayoutHeader>
          <h1 className="wt-h1">Panamera: parameter naming errors resolution assistant</h1>
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
