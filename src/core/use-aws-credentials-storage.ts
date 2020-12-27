import { useLocalStorage } from 'react-use';

export interface AwsCredentials {
  accessKey: string;
  secretKey: string;
}

export const useAwsCredentialsStorage = () => useLocalStorage<AwsCredentials>('aws-credentials');
