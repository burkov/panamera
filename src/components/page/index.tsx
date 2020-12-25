import React, { FC } from 'react';
import { Container, Hr, LayoutContent, LayoutFooter, LayoutHeader } from '@webteam/layout';
import GitInfo from 'react-git-info/macro';
import dayjs from 'dayjs';
import styles from './page.module.css';

export const Page: FC<{}> = ({ children }) => {
  const {
    branch,
    commit: { date, shortHash },
  } = GitInfo();
  return (
    <Container className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <LayoutHeader>
          <h1 className="wt-h1">Panamera: a Porsche for your env params</h1>
        </LayoutHeader>
        <LayoutContent className="wt-offset-top-24">{children}</LayoutContent>
      </div>
      <LayoutFooter className={styles.footer}>
        <Hr />
        <p className="wt-text-3">
          commit {shortHash} | <span className={styles.branch}>{branch}</span> | built {dayjs(date).fromNow()}
        </p>
      </LayoutFooter>
    </Container>
  );
};
