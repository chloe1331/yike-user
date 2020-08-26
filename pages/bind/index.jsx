import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import Link from 'next/link';
import { connect } from 'dva'; 
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import s from './style.less';

function Page({ form, router, onLogin, dispatch }) {
    const { getFieldDecorator, getFieldValue, setFields, validateFields } = form;
    const { shop_id } = router.query;
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        validateFields((err, values) => {
            if (!err) {
                MServer.post('/user/bind', {
                    ...values,
                    shop_id
                }).then(res => {
                    if (res.errcode == 0) {
                        router.push('/');
                        dispatch({
                            type: 'user/get'
                        }).then(() => {
                            onLogin && onLogin();
                        });
                    }
                });
            }
        });
    };

    return <div className={s.page}>
        <Form className={s.form} onSubmit={handleSubmit}>
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                        size="large"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{
                        required: true,
                        validator: (rule, value, callback) => {
                            const pw = getFieldValue('confirm_password');
                            if (!value) {
                                callback('请输入确认密码');
                            } else {
                                if (pw && pw != value) {
                                    callback('两次密码输入不一致');
                                } else {
                                    callback();
                                    setFields({
                                        confirm_password: {
                                            value: pw
                                        }
                                    });
                                }
                            }
                        }
                    }]
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="设置至少6位的密码"
                        size="large"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('confirm_password', {
                    rules: [{
                        validator: (rule, value, callback) => {
                            const cpw = getFieldValue('password');
                            if (!value) {
                                callback('请输入密码');
                            } else {
                                if (cpw && cpw != value) {
                                    callback('两次密码输入不一致');
                                } else {
                                    callback();
                                    setFields({
                                        password: {
                                            value: cpw
                                        }
                                    });
                                }
                            }
                        }
                    }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="再次输入以确认密码"
                        size="large"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                    绑定账号
                </Button>
                <p>我已有账号,<Link href={`/login?shop_id=${shop_id || ''}`}><a>立即登录</a></Link></p>
            </Form.Item>
        </Form>
    </div>;
}

Page.propTypes = {
    form: PropTypes.object,
    router: PropTypes.object,
    dispatch: PropTypes.func,
    onLogin: PropTypes.func
};

export default connect()(Form.create()(Page));