import { Card, Form, Row, Space, Typography } from 'antd';
import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/customInput';
import { PasswordInput } from '../../components/passwordInput';
import { CustomButton } from '../../components/customButton';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { useState } from 'react';
import { useRegisterMutation } from '../../app/services/auth';
import { User } from '@prisma/client';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import ErrorMessage from '../../components/errorMessage';

type RegisterData = Omit<User, 'id'> & { confirmPassword: string };

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [registerUser] = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();

      navigate('/');
    } catch (error) {
      const maybeError = isErrorWithMessage(error);

      if (maybeError) {
        setError(error.data.message);
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Sign up' style={{ width: '30rem' }}>
          <Form onFinish={register}>
            <CustomInput name='name' placeholder='Name' />
            <CustomInput name='email' placeholder='Email' type='email' />
            <PasswordInput name='password' placeholder='Password' />
            <PasswordInput
              name='confirmPassword'
              placeholder='Confirm Password'
            />
            <CustomButton type='primary' htmlType='submit'>
              Sign up
            </CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              have an account? <Link to={Paths.login}>Sign in</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
