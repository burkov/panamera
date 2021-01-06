import React, { FC, useCallback, useMemo } from 'react';
import { CollapsiblePanel } from '../collapsible-panel';
import Button from '@webteam/button';
import { Col, Row } from '@webteam/layout';
import { FormikInput, FormikSubmitButton } from '@webteam/formik-wrappers';
import faker from 'faker';
import { AwsCredentials } from '../../core/use-aws-credentials';
import * as yup from 'yup';
import { Form, Formik } from 'formik';

const initialValues: AwsCredentials = {
  accessKey: '',
  secretKey: '',
};

const validationSchema = yup.object().shape({
  accessKey: yup.string().required().min(20).label('Access key'),
  secretKey: yup.string().required().min(40).label('Secret key'),
});

export const CredentialsManualInput: FC<{}> = ({}) => {
  const accessKeyPlaceholder = useMemo(() => `AKIA${faker.random.alpha({ count: 16, upcase: true })}`, []);
  const secretKeyPlaceholder = useMemo(() => faker.random.alphaNumeric(40), []);
  const onSubmit = useCallback((values: AwsCredentials) => {
    return Promise.resolve();
  }, []);
  return (
    <CollapsiblePanel
      trigger={
        <Button size="xs" mode="nude">
          Enter keys manually
        </Button>
      }
    >
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Row direction="column">
            <Col span="auto-fill">
              <FormikInput name="accessKey" size="s" placeholder={accessKeyPlaceholder} label={<>Access key</>} />
            </Col>
            <Col span="auto-fill" className="wt-offset-top-12">
              <FormikInput name="secretKey" size="s" placeholder={secretKeyPlaceholder} label={<>Secret key</>} />
            </Col>
            <Col span="inline" className="wt-offset-top-24">
              <Row direction="row-reverse">
                <Col span="inline">
                  <FormikSubmitButton name="submit" size="m">
                    Save & proceed to the app
                  </FormikSubmitButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Formik>
    </CollapsiblePanel>
  );
};
