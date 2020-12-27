import { useLocalStorage } from 'react-use';
import { Parameter } from 'aws-sdk/clients/ssm';

interface ParametersStorage {
  fetchedAt: Date | undefined;
  parameters: Parameter[];
}

export const useAwsParamsStorage = (): [ParametersStorage, (params: Parameter[]) => void, () => void] => {
  const [params, setParams, removeParams] = useLocalStorage<ParametersStorage>('aws-params', { parameters: [], fetchedAt: undefined });
  const setParamsAndDate = (newParams: Parameter[]) => {
    setParams({ fetchedAt: new Date(), parameters: newParams });
  };
  return [params!, setParamsAndDate, removeParams];
};
