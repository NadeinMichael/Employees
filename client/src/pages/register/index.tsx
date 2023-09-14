import { Card, Form, Row, Space, Typography } from 'antd';
import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/customInput';
import { PasswordInput } from '../../components/passwordInput';
import { CustomButton } from '../../components/customButton';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Register = () => {
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Sign up' style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
