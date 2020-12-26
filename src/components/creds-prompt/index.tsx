import { Form, Formik } from 'formik';
import React, {FC, useCallback, useMemo} from 'react';
import { Page } from '../page';
import { AwsCredentials } from '../../core/use-aws-credentials-storage';
import * as yup from 'yup';
import { FormikInput, FormikSubmitButton } from '@webteam/formik-wrappers';
import { Col, Row } from '@webteam/layout';
import * as faker from 'faker';
import styles from './creds-prompt.module.css';

const initialValues: AwsCredentials = {
  accessKey: '',
  secretKey: '',
};

const validationSchema = yup.object().shape({
  accessKey: yup.string().required().min(20).label('Access key'),
  secretKey: yup.string().required().min(40).label('Secret key'),
});

export const CredentialsPrompt: FC = () => {
  const accessKeyPlaceholder = useMemo(() => `AKIA${faker.random.alpha({ count: 16, upcase: true })}`, []);
  const secretKeyPlaceholder = useMemo(() => faker.random.alphaNumeric(40), []);
  const onSubmit = useCallback((values: AwsCredentials) => {
    console.log(values)
    return Promise.resolve()
  }, []);
  return (
    <Page>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Row>
            <Col span={4}>
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
            </Col>
            <Col span="inline">
              <div className={styles.verticalLine} />
            </Col>
            <Col span="inline">
              <ul className="wt-ul">
                <li>Keys will be used for read-only operations</li>
                <li>Keys will be stored in browser local storage</li>
                <li>Keys will be used only from this webapp, they are not transferred anywhere</li>
                <li>You can remove them anytime you want later by clicking 'Sign out' link</li>
              </ul>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Page>
  );
};
