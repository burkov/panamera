import React, { FC, useMemo } from 'react';
import { ParameterWithPrefix } from '../../core/use-aws-parameters-storage';
import styles from './params-table.module.css';
import _ from 'lodash';
import { COLOR_SUCCESS, COLOR_WARNING } from '@webteam/colors';

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
                    .map(({ Value, prefix }, _, list) =>
                      list.length > 1
                        ? `${prefix
                            .slice(prefix.lastIndexOf('/') + 1)
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
  const map = useMemo(() => {
    const ps = new Set<string>();
    const r = new Map<string, ParameterWithPrefix[]>();
    params.forEach((p) => {
      ps.add(p.prefix);
      const name = p.Name!.slice(p.prefix.length);
      const old = r.get(name) ?? [];
      r.set(name, [...old, p]);
    });
    return Array.from(r.entries()).sort();
  }, [params]);

  return (
    <table className="wt-table wt-table_wide wt-table_size_xs">
      <thead className="wt-text-3">
        <tr>
          <th>Name</th>
          {prefixes.map((prefix) => (
            <th key={prefix}>{prefix}</th>
          ))}
        </tr>
      </thead>
      <tbody className="wt-text-3">
        {map.map(([name, paramsForName]) => {
          return (
            <tr>
              <td width={400}>{name}</td>
              <PrefixRow paramsForName={paramsForName} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
