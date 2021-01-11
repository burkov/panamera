import React, { FC } from 'react';
import styles from './params-table.module.css'

export const MissingValueCell: FC = () => {
  return <td className={styles.missingValueCell}>{'<Value is missing>'}</td>
};
