import React, { FC, useMemo, useState } from 'react';
import { ParameterWithPrefix } from '../../core/use-aws-parameters-storage';
import styles from './params-table.module.css';
import _ from 'lodash';
import Input from '@webteam/input';
import { Col, Row } from '@webteam/layout';
import Fuse from 'fuse.js';
import Highlighter from 'react-highlight-words';
import cn from 'classnames';
import { MissingValueCell } from './missing-value-cell';
import { SingleValueCell } from './single-value-cell';
import { MultiValueCell } from './multi-value-cell';
import { SingleValueCellMenu } from './single-value-cell';
import 'react-contexify/dist/ReactContexify.css';

const prefixes = ['dev1', 'dev2', 'dev3', 'dev4', 'dev5', 'audt', 'stgn/blue', 'stgn/green'];

export const truncate = (n: number, s: string): string => (s.length > n ? s.slice(0, n) + '...' : s);

const colorClasses = [
  styles.consistent0,
  styles.consistent1,
  styles.consistent2,
  styles.consistent3,
  styles.consistent4,
  styles.consistent5,
  styles.consistent6,
  styles.consistent7,
  styles.consistent8,
];

export const PrefixRow: FC<{ paramsForName: ParameterWithPrefix[] }> = ({ paramsForName }) => {
  const colorClassByValue = new Map(Object.entries(_.countBy(paramsForName, 'Value')).map(([value], i) => [value, colorClasses[i]]));
  return (
    <>
      {prefixes.map((prefix) => {
        const forGivenPrefix = paramsForName.filter((e) => e.Name!.includes(prefix));
        const key = `${prefix}-value`;
        const isValueMissing = forGivenPrefix.length <= 0;
        const isSingleValue = forGivenPrefix.length === 1;

        if (isValueMissing) return <MissingValueCell key={key} />;
        if (isSingleValue) return <SingleValueCell key={key} parameter={forGivenPrefix[0]} colorClassMap={colorClassByValue} />;
        return <MultiValueCell key={key} parameters={forGivenPrefix} colorClassMap={colorClassByValue} />;
      })}
    </>
  );
};

export const ParametersTable: FC<{ params: ParameterWithPrefix[] }> = ({ params }) => {
  const [search, setSearch] = useState('');
  const sortedParams = useMemo(() => {
    const r = new Map<string, ParameterWithPrefix[]>();
    params.forEach((p) => {
      const name = p.Name!.slice(p.Prefix.length);
      const old = r.get(name) ?? [];
      r.set(name, [...old, p]);
    });
    return Array.from(r.entries())
      .sort()
      .map(([name, paramsForName]) => ({ name, paramsForName }));
  }, [params]);
  const fused: Fuse.FuseResult<any>[] = useMemo(() => {
    if (search.trim().length === 0) return sortedParams.map((item) => ({ item, matches: [], refIndex: -1 }));
    return new Fuse(sortedParams, {
      keys: ['name'],
      includeMatches: true,
      minMatchCharLength: 2,
      includeScore: true,
    })
      .search(search)
      .filter(({ score }) => (score ?? 0) < 0.5);
  }, [sortedParams, search]);

  return (
    <>
      <Row size='0'>
        <Col span={4}>
          <Input size="xs" placeholder="Search by param name" onChange={(e) => setSearch(e.target.value)} />
        </Col>
      </Row>
      <table className={cn('wt-table wt-table_wide wt-table_size_xs wt-offset-top-12', styles.paramsTable)}>
        <thead className="wt-text-3">
        <tr>
          <th className={styles.nameTh}>Name</th>
          {prefixes.map((prefix) => (
            <th key={prefix} className={styles.envTh}>{prefix}</th>
          ))}
        </tr>
        </thead>
        <tbody className="wt-text-3">
        {fused.map(({ item: { name, paramsForName }, matches }) => {
          const searchWords = matches?.flatMap(({ indices }) => indices.map((tuple) => name.slice(tuple[0], tuple[1] + 1))) ?? [];
          return (
            <tr key={`${name}-row`}>
              <td width={400}>
                <Highlighter searchWords={searchWords} textToHighlight={name} />
              </td>
              <PrefixRow paramsForName={paramsForName} />
            </tr>
          );
        })}
        </tbody>
      </table>
      <SingleValueCellMenu />
    </>
  );
};
