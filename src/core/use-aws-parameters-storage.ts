import { Parameter } from 'aws-sdk/clients/ssm';
import { useLocalStorage } from './use-local-storage';

interface ParametersStorage {
  fetchedAt: Date | undefined;
  parameters: ParameterWithPrefix[];
}

export type ParameterWithPrefix = { Prefix: string } & Parameter;

export const useAwsParametersStorage = () => {
  return useLocalStorage<ParametersStorage>('aws-params');
};
