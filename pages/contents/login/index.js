import { Input, Button, Form, Checkbox } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline, UserOutline } from 'antd-mobile-icons'
import styles from './login.module.scss'
import { useState } from 'react'
import socket from '../../../models/socket'
import Router from 'next/router'

export default function Login() {
    const [visible, setVisible] = useState(false);
    const onFinish = (values) => {
        socket.emit('login', values, (res) => {
            if (res.response === '1') {
                console.log('登录成功');
                Router.push({pathname:'/contents/user',query:{username:res.username}})
            }
            if (res.response === '2') {
                alert('不存在该用户名！请重新填写');
            }
            if (res.response === '3') {
                alert('密码错误')
            }
        })

    };
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.box}>
                    <p className={styles.loginText}>账号登录</p>
                    <a href='/contents/register' className={styles.registerText}>没有账号？点击注册一个</a>
                </div>
            </header>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                footer={
                    <Button block type='submit' color='success' size='large'>
                        登录
                    </Button>
                }
            >
                <Form.Item label='用户名' name='username'>
                    <Input placeholder='请输入用户名' clearable />
                </Form.Item>
                <Form.Item
                    label='密码'
                    name='password'
                    extra={
                        <div className={styles.eye}>
                            {!visible ? (
                                <EyeInvisibleOutline onClick={() => setVisible(true)} />
                            ) : (
                                <EyeOutline onClick={() => setVisible(false)} />
                            )}
                        </div>
                    }
                >
                    <Input
                        placeholder='请输入密码'
                        clearable
                        type={visible ? 'text' : 'password'}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
            </Form>
        </div>
    )
}