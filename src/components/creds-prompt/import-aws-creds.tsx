import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import { LinkButton } from '../link-button';
import { ErrorDiv } from '../error-div';
import ini from 'ini';
import * as yup from 'yup';
import { AwsCredentials } from '../../core/use-aws-credentials';
import { List, ListItem } from '@webteam/list';
import { maskKey, tryCatch } from '../../common/helpers';

declare global {
  interface Window {
    showOpenFilePicker: any;
  }
}

type CredentialsFileEntry = {
  aws_access_key_id: string;
  aws_secret_access_key: string;
};

type NamedAwsCredentials = [string, AwsCredentials];

const readFile = async (): Promise<NamedAwsCredentials[]> => {
  const [credentialsFileHandler] = await window.showOpenFilePicker({
    multiple: false,
  });
  const credentialsFile: File = await credentialsFileHandler.getFile();
  if (credentialsFile.name !== 'credentials') throw new Error("File should be named 'credentials'");
  const result = ini.parse(await credentialsFile.text());
  const schema = yup.object().shape({
    aws_access_key_id: yup.string().required(),
    aws_secret_access_key: yup.string().required(),
  });
  return Object.entries(result)
    .filter(([, v]) => schema.isValidSync(v))
    .map(([entryName, { aws_access_key_id, aws_secret_access_key }]: [string, CredentialsFileEntry]) => [
      entryName,
      {
        accessKey: aws_access_key_id,
        secretKey: aws_secret_access_key,
      },
    ]);
};

export const ImportAwsCredentials: FC<{ onCredentialsSelected: (credentials: AwsCredentials) => void }> = ({ onCredentialsSelected }) => {
  const [error, setError] = useState<Error>();
  const [credentials, setCredentials] = useState<NamedAwsCredentials[]>();
  useEffect(() => {
    if (credentials && credentials.length === 1) onCredentialsSelected(credentials[0][1]);
  }, [credentials, onCredentialsSelected]);

  const onImportClick = async () => {
    setError(undefined);
    tryCatch(async () => setCredentials(await readFile()), setError);
  };

  if (credentials)
    return (
      <>
        <h4 className="wt-h4">Select profile to use:</h4>
        <div className="wt-offset-top-12" />
        <List size="xs">
          {credentials.map(([name, credentials]) => (
            <ListItem key={name} onClick={() => onCredentialsSelected(credentials)}>
              {name} ({maskKey(credentials.accessKey)})
            </ListItem>
          ))}
        </List>
      </>
    );
  return (
    <>
      <div className="wt-text-2">
        <LinkButton onClick={onImportClick}>Import</LinkButton> credentials from <strong>~/.aws/credentials</strong>
        <ErrorDiv className="wt-offset-top-12" error={error} />
      </div>
    </>
  );
};
