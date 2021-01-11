import React, { FC } from 'react';
import { ParameterWithPrefix } from '../../core/use-aws-parameters-storage';
import { truncate } from './table';
import styles from './params-table.module.css';
import cn from 'classnames';
import { Item, Menu, useContextMenu } from 'react-contexify';
import { TriggerEvent } from 'react-contexify/src/types/index';
import { CopyIcon } from '@webteam/icons';
import * as clipboardy from 'clipboardy';

const menuId = 'SingleValueCell';

export const SingleValueCell: FC<{ parameter: ParameterWithPrefix; colorClassMap: Map<string | undefined, string> }> = ({ parameter: { Value }, colorClassMap }) => {
  const { show } = useContextMenu({ id: menuId });

  function onContextMenu(event: TriggerEvent) {
    event.preventDefault();
    show(event, { props: { value: Value } });
  }

  return (
    <td onContextMenu={onContextMenu} className={cn(styles.valueCell, colorClassMap.get(Value))}>
      {truncate(24, Value!)}
    </td>
  );
};

export const SingleValueCellMenu: FC = () => {
  return (
    <Menu id={menuId} animation={false}>
      <Item onClick={({ props: { value } }) => clipboardy.write(value)} className="wt-text-3">
        <CopyIcon size="xs" className={styles.copyValueMenuIcon} /> Copy value
      </Item>
    </Menu>
  );
};
