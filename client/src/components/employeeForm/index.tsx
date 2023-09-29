import { Employee } from '@prisma/client';
import { Card, Form, Space } from 'antd';
import { CustomInput } from '../customInput';
import ErrorMessage from '../errorMessage';
import { CustomButton } from '../customButton';

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

const EmployeeForm = ({
  onFinish,
  title,
  btnText,
  error,
  employee,
}: Props<Employee>) => {
  return (
    <Card title={title} style={{ width: '30rem' }}>
      <Form name='employee-form' onFinish={onFinish} initialValues={employee}>
        <CustomInput type='text' name='firstName' placeholder='name' />
        <CustomInput type='text' name='lastName' placeholder='last name' />
        <CustomInput type='number' name='age' placeholder='age' />
        <CustomInput type='text' name='address' placeholder='address' />
        <Space>
          <ErrorMessage message={error} />
          <CustomButton htmlType='submit'>{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};
export default EmployeeForm;
