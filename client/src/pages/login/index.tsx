import { Card, Form, Row, Space, Typography } from 'antd';
import { Layout } from '../../components/layout';
import { CustomInput } from '../../components/customInput';
import { PasswordInput } from '../../components/passwordInput';
import { CustomButton } from '../../components/customButton';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Login = () => {
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Sign in' style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
