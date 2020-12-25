import React, { FC } from 'react';
import { Container, Hr, LayoutContent, LayoutFooter, LayoutHeader } from '@webteam/layout';
import GitInfo from 'react-git-info/macro';
import dayjs from "dayjs";

export const Page: FC<{}> = ({ children }) => {
  const {
    branch,
    tags,
    commit: { date, shortHash },
  } = GitInfo();
  return (
    <Container>
      <LayoutHeader>
        <h1 className="wt-h1">Panamera: a Porsche for your env params</h1>
      </LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
      <LayoutFooter>
        <Hr />
        <p className="wt-text-3">Build {dayjs(date).fromNow()} </p>
      </LayoutFooter>
    </Container>
  );
};
