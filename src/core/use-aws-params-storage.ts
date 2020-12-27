import { useLocalStorage } from 'react-use';
import { Parameter } from 'aws-sdk/clients/ssm';

interface ParametersStorage {
  fetchedAt: Date | undefined;
  parameters: ParameterWithPrefix[];
}

export type ParameterWithPrefix = { prefix: string } & Parameter;

export const useAwsParamsStorage = (): [ParametersStorage, (params: ParameterWithPrefix[]) => void, () => void] => {
  const [params, setParams, removeParams] = useLocalStorage<ParametersStorage>('aws-params', { parameters: [], fetchedAt: undefined });
  const setParamsAndDate = (newParams: ParameterWithPrefix[]) => {
    setParams({ fetchedAt: new Date(), parameters: newParams });
  };
  return [params!, setParamsAndDate, removeParams];
};
