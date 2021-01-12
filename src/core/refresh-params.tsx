import { ParameterWithPrefix } from './use-aws-parameters-storage';
import { envPrefixes } from './env-prefixes';
import AWS, { AWSError, Credentials } from 'aws-sdk';
import { GetParametersByPathResult, Parameter } from 'aws-sdk/clients/ssm';

const progressLine = (prefix: string, page: number, total: number, prevTotal: number): JSX.Element => {
  const prefixAndTotal = (
    <>
      prefix: '{prefix}', total: <strong>{total}</strong>
    </>
  );
  if (prevTotal === 0) return <>Loading, {prefixAndTotal} </>;
  const percent = Math.ceil((total * 100) / prevTotal);

  return (
    <>
      <strong>{percent}%</strong>
      &nbsp;({prefixAndTotal}&nbsp;of&nbsp;<strong>{prevTotal}</strong>)
    </>
  );
};

export const refreshParams = async (
  accessKey: string,
  secretKey: string,
  prevTotal: number,
  onError: (e: AWSError) => void,
  onProgress: (s: JSX.Element) => void,
  onReady: (result: ParameterWithPrefix[]) => void,
) => {
  const ssm = new AWS.SSM({ region: 'eu-west-1', credentials: new Credentials(accessKey, secretKey) });

  const result: ParameterWithPrefix[] = [];
  const flatPrefixes = envPrefixes.flatMap(({ tomcat, allapps, lservice }) => [tomcat, lservice, allapps]);
  const allPrefixes = new Set(flatPrefixes);

  for (const prefix of Array.from(allPrefixes)) {
    await new Promise((resolve) => {
      let page = 1;
      const request = ssm.getParametersByPath({ Path: prefix, Recursive: true, WithDecryption: true });
      request.eachPage((err: AWSError, data: GetParametersByPathResult, doneCallback) => {
        onProgress(progressLine(prefix, page, result.length, prevTotal));
        if (err) onError(err);
        if (!doneCallback?.()) {
          if (data?.Parameters)
            result.push(
              ...data?.Parameters.map((e: Parameter) => {
                (e as ParameterWithPrefix).Prefix = prefix;
                return e as ParameterWithPrefix;
              }),
            );
          page++;
        }
        if (data == null) resolve(undefined);
        return true;
      });
    });
  }
  onReady(result);
};
