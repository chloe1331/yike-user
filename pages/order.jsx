import { Component, createRef } from 'react';
import { Radio, Input, Button, Modal, message, DatePicker } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import PropType from 'prop-types';

import { MServer } from 'public/utils';
import { OrderList, DialogExportHistroy, Select } from 'component';
import locale from 'config/locale';

class Order extends Component {
    constructor(props) {
        super(props);
        this.tableRef = createRef();
        this.dialogExportRef = createRef();
        this.state = {
            paySubmit: false,
            logisLoading: false,
            subList: []
        };
        const handles = ['handleSearch', 'handleBatchPay', 'handleExport', 'handleChangeDate'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    componentDidMount() {
        const { user} = this.props;
        if (!user.sub || (user.sub && user.sub.role === 'manager')) {
            this.getSubList();
        }
    }

    getSubList() {
        MServer.get('/user/sublist', {
            is_all: 1
        }).then(res => {
            if (res.errcode == 0) {
                this.setState({
                    subList: res.data
                });
            }
        });
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

    handleChangeDate(date) {
        this.tableRef.current.reload({
            condition: {
                start_date: date[0] ? date[0].format('YYYY-MM-DD') : undefined,
                end_date: date[1] ? date[1].format('YYYY-MM-DD') : undefined,
            }
        });
    }

    handleSearch(type, value) {
        this.tableRef.current.reload({
            condition: {
                [type]: value
            }
        });
    }

    handleBatchPay() {
        const { user } = this.props;
        const isSub = !!user.sub;
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
                        content: <div>找到{res.data.length}个待付款订单{!isSub ? <span>，支付金额 <span className="text-warning">{amount}</span> 元</span> : null}</div>,
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
                                    message.success('批量付款成功');
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

    handleExport() {
        this.setState({
            logisLoading: true
        }, () => {
            MServer.post('/order/exportUserLogis').then(res => {
                if (res.errcode === 0) {
                    window.open(`${locale[process.env.NODE_ENV].url.api}${res.data.filepath}`);
                }
                this.setState({
                    logisLoading: false
                });
            });
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
        }, {
            value: 'waitsend',
            label: '待发货'
        }, {
            value: 'send',
            label: '已发货'
        }];
        const { paySubmit, logisLoading, subList } = this.state;
        const { user } = this.props;

        return (
            <div className="page-layout-center">
                <DialogExportHistroy ref={this.dialogExportRef} />
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
                    <Input.Search style={{ width: 160 }} onSearch={value => this.handleSearch('consignee', (value || '').trim())} placeholder="搜索姓名" />
                    <Input.Search style={{ width: 160, marginLeft: '15px' }} onSearch={value => this.handleSearch('mobile', (value || '').trim())} placeholder="搜索手机" />
                    <Input.Search style={{ marginLeft: '15px' }} onSearch={value => this.handleSearch('order_sn', value)} placeholder="搜索订单号" />
                    <Input.Search style={{ marginLeft: '15px' }} onSearch={value => this.handleSearch('express_sn', value)} placeholder="搜索运单号" />
                    <DatePicker.RangePicker 
                        style={{ width: 240, marginLeft: 15 }}
                        disabledDate={current => current && current && current > moment().endOf('day')}
                        onChange={this.handleChangeDate}
                        allowClear
                    />
                    {
                        !user.sub || (user.sub && user.sub.role === 'manager') ? 
                            <Select options={subList} style={{ marginLeft: 15, width: 180 }} fieldName={{ label: 'username', value: 'id' }} onChange={value => this.handleSearch('sub_id', value)} placeholder="选择子账号" allowClear /> : null
                    }
                    <div style={{ marginTop: '15px' }}>
                        <Button loading={paySubmit} type="primary" onClick={this.handleBatchPay}>批量付款</Button>
                        <Button style={{ marginLeft: '15px' }} onClick={this.handleExport} loading={logisLoading}>导出物流信息</Button>
                        <a
                            style={{ marginLeft: '15px' }}
                            onClick={() => {
                                if (this.dialogExportRef.current) this.dialogExportRef.current.open();
                            }}
                        >物流信息导出历史</a>
                    </div>
                </div>
                <OrderList
                    action="/order/userlist"
                    ref={this.tableRef}
                    user={user}
                />
            </div>
        );
    }
}

Order.propTypes = {
    user: PropType.object
};

export default connect(({ user }) => ({ user }))(Order);