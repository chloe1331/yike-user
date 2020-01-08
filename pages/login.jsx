import { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import style from 'public/theme/pages/login.less';

class Login extends Component {
    constructor(props) {
        super(props);
        const handles = ['handleSubmit'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        const { form: { validateFields }, router, dispatch, onLogin } = this.props;

        validateFields((err, values) => {
            if (!err) {
                MServer.post('/user/login', values).then(res => {
                    if (res.errcode == 0) {
                        localStorage.setItem('token', res.token);
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
    }

    render() {
        const { form: { getFieldDecorator } } = this.props;

        return (
            <div className={style.pageLogin}>
                <Form className={style.loginForm} onSubmit={this.handleSubmit}>
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
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                                size="large"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

Login.propTypes = {
    form: PropTypes.object,
    router: PropTypes.object,
    dispatch: PropTypes.func,
    onLogin: PropTypes.func
};

export default connect()(Form.create()(Login));