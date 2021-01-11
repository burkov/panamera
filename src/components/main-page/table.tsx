import React, { FC, useMemo, useState } from 'react';
import { ParameterWithPrefix } from '../../core/use-aws-parameters-storage';
import styles from './params-table.module.css';
import _ from 'lodash';
import { COLOR_SUCCESS, COLOR_WARNING } from '@webteam/colors';
import Input from '@webteam/input';
import { Col, Row } from '@webteam/layout';
import Fuse from 'fuse.js';
import Highlighter from 'react-highlight-words';

const prefixes = ['dev1', 'dev2', 'dev3', 'dev4', 'dev5', 'audt', 'stgn/blue', 'stgn/green'];

const truncate = (n: number, s: string): string => (s.length > n ? s.slice(0, n) + '...' : s);

const colorMap = [COLOR_SUCCESS, '#9cf55e', '#adee98', '#f5db8d', '#f3c05b', COLOR_WARNING, '#d3a301'];

export const PrefixRow: FC<{ paramsForName: ParameterWithPrefix[] }> = ({ paramsForName }) => {
  const isAllTheSame = new Set(paramsForName.map(({ Value }) => Value)).size === 1;
  if (isAllTheSame)
    return (
      <td colSpan={prefixes.length} className={styles.allTheSameRow}>
        {truncate(64, paramsForName[0].Value!)}
      </td>
    );
  const colors = new Map(_.reverse(_.sortBy(Object.entries(_.countBy(paramsForName, 'Value')), [(e) => e[1]])).map(([v], i) => [v, colorMap[i]]));
  return (
    <>
      {prefixes.map((prefix) => {
        const forGivenPrefix = paramsForName.filter((e) => e.Name!.includes(prefix));
        return (
          <td width={100} key={`${prefix}-value`} style={{ backgroundColor: forGivenPrefix.length === 0 ? '#ea6060' : colors.get(forGivenPrefix[0]?.Value ?? 'fixme') }}>
            <pre>
              {forGivenPrefix.length > 0
                ? forGivenPrefix
                    .map(({ Value, Prefix }, _, list) =>
                      list.length > 1
                        ? `${Prefix.slice(Prefix.lastIndexOf('/') + 1)
                            .replace('lservice', 'ls')
                            .replace('allapps', 'all')}: ${truncate(32, Value!)}`
                        : truncate(32, Value!),
                    )
                    .join('\n')
                : '<missing>'}
            </pre>
          </td>
        );
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
      <Row>
        <Col span={4}>
          <Input size="xs" placeholder="Search by param name" onChange={(e) => setSearch(e.target.value)} />
        </Col>
      </Row>
      <table className="wt-table wt-table_wide wt-table_size_xs wt-offset-top-12">
        <thead className="wt-text-3">
          <tr>
            <th>Name</th>
            {prefixes.map((prefix) => (
              <th key={prefix}>{prefix}</th>
            ))}
          </tr>
        </thead>
        <tbody className="wt-text-3">
          {fused.map(({ item: { name, paramsForName }, matches }) => {
            const searchWords = matches?.flatMap(({ indices }) => indices.map((tuple) => name.slice(tuple[0], tuple[1] + 1))) ?? [];
            return (
              <tr>
                <td width={400}>
                  <Highlighter searchWords={searchWords} textToHighlight={name} />
                </td>
                <PrefixRow paramsForName={paramsForName} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
