import { Component, createRef } from 'react';
import { Radio, Input, Button, Modal, message } from 'antd';

import { MServer } from 'public/utils';
import { OrderList } from 'component';

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.tableRef = createRef();
        this.state = {
            paySubmit: false,
        };
        const handles = ['handleSearch', 'handleBatchPay'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    handleChangeStatus(status) {
        if (this.tableRef.current) {
            this.tableRef.current.reload({
                page: 1,
                condition: {
                    status
                }
            });
        }
    }

    handleSearch(value) {
        this.tableRef.current.reload({
            condition: {
                order_sn: value
            }
        });
    }

    handleBatchPay() {
        this.setState({
            paySubmit: true
        });
        MServer.get('/order/getpay').then(res => {
            this.setState({
                paySubmit: false
            });
            if (res.errcode == 0) {
                if (res.data.length) {
                    const amount = res.data.reduce((pre, cur) => pre + cur.amount, 0);
                    Modal.confirm({
                        title: '您确认要付款吗？',
                        content: <div>找到{res.data.length}个待付款订单，支付金额 <span className="text-warning">{amount}</span> 元</div>,
                        onOk: () => {
                            this.setState({
                                paySubmit: true
                            });
                            MServer.post('/order/pay', {
                                id: res.data.map(item => item.id)
                            }).then(res => {
                                this.setState({
                                    paySubmit: false,
                                });
                                if (res.errcode == 0) {
                                    this.tableRef.current.reload();
                                }
                            });
                        }
                    });
                } else {
                    message.error('未找到待付款订单');
                }
            }
        });
    }

    render() {
        const tabs = [{
            value: 'all',
            label: '全部订单'
        }, {
            value: 'audit',
            label: '待审核'
        }, {
            value: 'waitpay',
            label: '待付款'
        }, {
            value: 'pending',
            label: '等待打印'
        }, {
            value: 'success',
            label: '已打印'
        }];
        const { paySubmit } = this.state;

        return (
            <div className="page-layout-center">
                <Radio.Group 
                    defaultValue="all" 
                    onChange={e => {
                        const value = e.target.value;
                        this.handleChangeStatus(value == 'all' ? null : value);
                    }} 
                    style={{ marginBottom: '20px' }}>
                    {
                        tabs.map(tab => (
                            <Radio.Button key={tab.value} value={tab.value}>{tab.label}</Radio.Button>
                        ))
                    }
                </Radio.Group>
                <div className="form-condition">
                    <Input.Search onSearch={this.handleSearch} placeholder="搜索订单号" />
                    <Button loading={paySubmit} style={{ marginLeft: '15px' }} type="primary" onClick={this.handleBatchPay}>批量付款</Button>
                </div>
                <OrderList
                    action="/order/userlist"
                    ref={this.tableRef}
                />
            </div>
        );
    }
}