import { useLocalStorage } from 'react-use';

export interface AwsCredentials {
  accessKey: string;
  secretKey: string;
}

export const useAwsCredentialsStorage = (): AwsCredentials | undefined => {
  const [credentials] = useLocalStorage<AwsCredentials>('aws-credentials');
  return credentials;
};
