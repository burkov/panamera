import React, { FC } from 'react';
import { ParameterWithPrefix } from '../../core/use-aws-parameters-storage';
import { truncate } from './table';
import styles from './params-table.module.css';
import cn from 'classnames';
import { SingleValueCell } from './single-value-cell';

export const MultiValueCell: FC<{ parameters: ParameterWithPrefix[]; colorClassMap: Map<string | undefined, string> }> = ({ parameters, colorClassMap }) => {
  if (new Set(parameters.map(({ Value }) => Value)).size === 1) return <SingleValueCell parameter={parameters[0]} colorClassMap={colorClassMap} />;
  return (
    <td className={cn(styles.valueCell, colorClassMap.get(parameters[0].Value))}>
      {parameters.map(({ Value, Prefix }) => {
        const prefix = Prefix.slice(Prefix.lastIndexOf('/') + 1)
          .replace('lservice', 'ls')
          .replace('allapps', 'all');
        return (
          <p key={Value}>
            {prefix}: {truncate(12, Value ?? '')}
          </p>
        );
      })}
    </td>
  );
};
