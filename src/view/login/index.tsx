import { Button, Card, Form, FormProps, Input } from 'antd'
import { uesLocalStorage } from '@/hooks'
import { useNavigate } from 'react-router-dom'
const LoginComp = () => {
  type FieldType = {
    username: string
    password: string
  }
  let { setStorageValue } = uesLocalStorage<FieldType>('react-userinfo')
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    await setStorageValue(values)
    navigate('/', {
      replace: true
    })
  }
  return (
    <div className="h-full flex items-center justify-center">
      <Card title="登录" bordered={false}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginComp
