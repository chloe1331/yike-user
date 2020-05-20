import { Component } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import Dialog from '../dialog';

class DialogCreateSub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false
        };
        const handles = ['handleSubmit'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        const { form: { validateFields }, onSuccess, onCancel } = this.props;
        validateFields((err, values) => {
            if (!err) {
                this.setState({ submit: true });
                delete values.confirm_password;

                MServer.post('/user/createsub', values).then(res => {
                    this.setState({ submit: false });
                    if (res.errcode == 0) {
                        message.success('创建成功');
                        onSuccess && onSuccess();
                        onCancel();
                    }
                });
            }
        });
    }

    render() {
        const { submit } = this.state;
        const { form: { getFieldDecorator, getFieldValue }, user } = this.props;
        return (
            <Modal title="创建子账号" width={560} {...this.props} onOk={this.handleSubmit} confirmLoading={submit}>
                <Form className="inline-form" onSubmit={this.handleSubmit} style={{ backgroundColor: '#fff', border: 'none' }}>
                    <Form.Item label="账号">
                        {
                            getFieldDecorator('username', {
                                rules: [{
                                    required: true,
                                    message: '账号必填'
                                }]
                            })(
                                <Input addonBefore={`${user.username}:`} placeholder="输入账号" maxLength={10} />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="登录密码">
                        {
                            getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    validator: (rule, value, callback) => {
                                        const cpw = getFieldValue('confirm_password');
                                        if (!value) {
                                            callback('请输入密码');
                                        } else {
                                            if (cpw && cpw != value) {
                                                callback('两次密码输入不一致');
                                            } else {
                                                callback();
                                            }
                                        }
                                    }
                                }]
                            })(
                                <Input.Password placeholder="输入密码" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="确认密码">
                        {
                            getFieldDecorator('confirm_password', {
                                rules: [{
                                    required: true,
                                    validator: (rule, value, callback) => {
                                        const pw = getFieldValue('password');
                                        if (!value) {
                                            callback('请输入确认密码');
                                        } else {
                                            if (pw && pw != value) {
                                                callback('两次密码输入不一致');
                                            } else {
                                                callback();
                                            }
                                        }
                                    }
                                }]
                            })(
                                <Input.Password placeholder="二次输入密码" />
                            )
                        }
                    </Form.Item>
                    <Form.Item className="hide"><Button htmlType="submit">保存</Button></Form.Item>
                </Form>
            </Modal>
        );
    }
}

DialogCreateSub.propTypes = {
    form: PropTypes.object,
    onSuccess: PropTypes.func,
    onCancel: PropTypes.func,
    user: PropTypes.object
};

export default Dialog(Form.create()(DialogCreateSub));