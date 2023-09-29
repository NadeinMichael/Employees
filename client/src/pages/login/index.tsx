import { useState } from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/customInput';
import { PasswordInput } from '../../components/passwordInput';
import { CustomButton } from '../../components/customButton';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { UserDate, useLoginMutation } from '../../app/services/auth';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import ErrorMessage from '../../components/errorMessage';

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResault] = useLoginMutation();
  const [error, setError] = useState('');

  const login = async (data: UserDate) => {
    try {
      await loginUser(data).unwrap();

      navigate('/');
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Sign in' style={{ width: '30rem' }}>
          <Form onFinish={login}>
            <CustomInput name='email' placeholder='Email' type='email' />
            <PasswordInput name='password' placeholder='Password' />
            <CustomButton type='primary' htmlType='submit'>
              Sign in
            </CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              no account? <Link to={Paths.register}>Sign up</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
