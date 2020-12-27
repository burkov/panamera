import React, { FC } from 'react';
import styles from './error-div.module.css';
import cn from 'classnames';

export const ErrorDiv: FC<React.HTMLAttributes<HTMLDivElement> & { error?: Error }> = ({ className, error }) => {
  if (!error) return null;
  return <div className={cn(styles.errorDiv, 'wt-text-2', className)}>Error: {error.message}</div>;
};
