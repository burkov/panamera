import React, { FC } from 'react';
import cn from 'classnames';
import styles from './link-button.module.css';

export const LinkButton: FC<React.ButtonHTMLAttributes<any>> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={cn('wt-link', styles.linkButton)}>
      {children}
    </button>
  );
};
