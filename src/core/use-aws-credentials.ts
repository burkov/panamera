import { useLocalStorage } from './use-local-storage';

export interface AwsCredentials {
  accessKey: string;
  secretKey: string;
}

export const useAwsCredentials = () => {
  const { value, setValue, removeValue } = useLocalStorage<AwsCredentials>('aws-credentials');
  return { credentials: value, setCredentials: setValue, removeCredentials: removeValue };
};
