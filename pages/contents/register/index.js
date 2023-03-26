import { Form, Input, Button } from 'antd-mobile'
import socket from '../../../models/socket';
import Router from 'next/router';

export default function Register() {
    const onFinish = (values) => {
        console.log(values);
        socket.emit('register', values, (res) => {
            if (res.response === '1') {
                console.log('注册成功');
                setTimeout(() => {
                    Router.push({pathname:'/contents/login'})
                }, 500);
            }
        });
    };

    return (
        <div>
            <Form requiredMarkStyle='asterisk' onFinish={onFinish} footer={
                <Button block type='submit' color='primary' size='large'>
                    注册
                </Button>
            }>
                <Form.Header>注册</Form.Header>
                <Form.Item name='email' label='邮箱' rules={[
                    {
                        type: 'email',
                        message: '邮箱格式不正确！',
                    },
                    {
                        required: true,
                        message: '请输入邮箱'
                    }]}>
                    <Input placeholder='请输入邮箱' />
                </Form.Item>
                <Form.Item name='password' label='密码' rules={[{
                    required: true,
                    message: '请输入密码'
                }]}>
                    <Input type={'password'} placeholder='请输入密码' />
                </Form.Item>
                <Form.Item name='passwordconfirm'  label='确认密码' rules={[
                    {
                        required: true,
                        message: '请再次输入密码',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('两次输入密码不一致'));
                        },
                    }),
                ]}>
                    <Input type={'password'} placeholder='请再次输入密码' />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="用户名"
                    help="别人将看到你的昵称是"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="手机号"
                    rules={[
                        {
                            required: true,
                            message: '请输入手机号！',
                        },
                    ]}
                >
                    <Input placeholder='请输入手机号' />
                </Form.Item>
                <Form.Item label='短信验证码' extra={<a>发送验证码</a>}>
                    <Input placeholder='请输入' />
                </Form.Item>
            </Form>
        </div>
    )
}