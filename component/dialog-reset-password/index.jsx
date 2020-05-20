import { Component } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import Dialog from '../dialog';

class DialogResetPassword extends Component {
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

        const { form: { validateFields }, onSuccess, onCancel, resetId } = this.props;
        validateFields((err, values) => {
            if (!err) {
                this.setState({ submit: true });
                delete values.confirm_password;
                values.id = resetId;

                MServer.post('/user/resetsubpassword', values).then(res => {
                    this.setState({ submit: false });
                    if (res.errcode == 0) {
                        message.success('重置成功');
                        onSuccess && onSuccess();
                        onCancel();
                    }
                });
            }
        });
    }

    render() {
        const { submit } = this.state;
        const { form: { getFieldDecorator, getFieldValue } } = this.props;
        return (
            <Modal title="重置密码" {...this.props} onOk={this.handleSubmit} confirmLoading={submit}>
                <Form className="inline-form" onSubmit={this.handleSubmit}>
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

DialogResetPassword.propTypes = {
    form: PropTypes.object,
    onSuccess: PropTypes.func,
    onCancel: PropTypes.func,
    resetId: PropTypes.any
};

export default Dialog(Form.create()(DialogResetPassword));