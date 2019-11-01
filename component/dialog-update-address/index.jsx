import { Component } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import Dialog from '../dialog';

class DialogUpdateAddress extends Component {
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

        const { form: { validateFields }, onSuccess, onCancel, editRecord } = this.props;
        validateFields((err, values) => {
            if (!err) {
                this.setState({ submit: true });
                MServer.post('/order/updateaddress', {
                    ...values,
                    id: editRecord.id,
                }).then(res => {
                    this.setState({ submit: false });
                    if (res.errcode == 0) {
                        message.success('修改成功');
                        onSuccess && onSuccess();
                        onCancel();
                    }
                });
            }
        });
    }

    render() {
        const { submit } = this.state;
        const { form: { getFieldDecorator }, editRecord } = this.props;

        return (
            <Modal title="修改收件人信息" {...this.props} onOk={this.handleSubmit} confirmLoading={submit}>
                <Form className="inline-form" onSubmit={this.handleSubmit}>
                    <Form.Item label="收件人">
                        {
                            getFieldDecorator('consignee', {
                                rules: [{
                                    required: true,
                                    message: '请输入收件人'
                                }],
                                initialValue: editRecord && editRecord.consignee
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="联系手机">
                        {
                            getFieldDecorator('mobile', {
                                rules: [{
                                    required: true,
                                    message: '请输入联系手机'
                                }],
                                initialValue: editRecord && editRecord.mobile
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="省">
                        {
                            getFieldDecorator('province', {
                                rules: [{
                                    required: true,
                                    message: '请输入省'
                                }],
                                initialValue: editRecord && editRecord.province
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="市">
                        {
                            getFieldDecorator('city', {
                                rules: [{
                                    required: true,
                                    message: '请输入市'
                                }],
                                initialValue: editRecord && editRecord.city
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="区">
                        {
                            getFieldDecorator('district', {
                                rules: [{
                                    required: true,
                                    message: '请输入区'
                                }],
                                initialValue: editRecord && editRecord.district
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="详细地址">
                        {
                            getFieldDecorator('address', {
                                rules: [{
                                    required: true,
                                    message: '请输入详细地址'
                                }],
                                initialValue: editRecord && editRecord.address
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item className="hide"><Button htmlType="submit">保存</Button></Form.Item>
                </Form>
            </Modal>
        );
    }
}

DialogUpdateAddress.propTypes = {
    form: PropTypes.object,
    onSuccess: PropTypes.func,
    onCancel: PropTypes.func,
    editRecord: PropTypes.object
};

export default Dialog(Form.create()(DialogUpdateAddress));