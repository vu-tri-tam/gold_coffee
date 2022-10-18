import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPostLogin, login } from '../features/login/loginSlice';
import logo from '../assets/images/01a2512c664e0bbd79951529472361bc.jpg';
import CreateNotification from '../helper/notifications';

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        const { userName, passWord } = values
        const obj = {
            userName: userName,
            passWord: passWord
        }
        try {
            const { payload } = await dispatch(fetchPostLogin(obj))
            if (payload?.success) {
                CreateNotification.success('Thông báo', payload.message)
                let data = payload?.data;
                localStorage.setItem('user', payload.accessToken)
                dispatch(login(data[0]))
                if (data[0].decentralization !== false) {
                    navigate('/client')
                }
                navigate('/admin')

            }
        } catch (error) {
            console.log(error, 'error');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className="layout sm:h-screen sm:p-10">
            <Content
            >
                <div className="site-layout-content mx-auto  sm:justify-center sm:p-0 md:p-16 sm:w-full sm:h-full">
                    <div className='flex sm:flex-col sm:flex-none lg:flex-row md:flex-row md:justify-center md:flex-none md:h-96 sm:h-full'>
                        <div className=' md:w-96 md:h-auto sm:h-auto sm:hidden md:block '>
                            <img src={logo} className='w-auto sm:h-72 md:h-full object-cover' />
                        </div>
                        <div className='login-box sm:w-auto sm:h-auto md:w-96 bg-zinc-50 p-2 sm:m-auto md:m-0'>
                            <h3 className='hover:bg-blue-400 sm:text-center md:text-left'>Đăng nhập</h3>
                            <Form
                                name="basic"

                                wrapperCol={{
                                    span: 16,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Username"
                                    name="userName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="passWord"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{

                                        span: 16,
                                    }}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{


                                    }}
                                >
                                    <Button type='primary' htmlType="submit" className='w-full '>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>

                </div>
            </Content>

        </Layout>
    );
};

export default LoginPage;