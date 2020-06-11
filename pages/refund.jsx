import { Component, createRef } from 'react';
import { Radio, Input, Modal, message, DatePicker } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import PropType from 'prop-types';

import { MServer } from 'public/utils';
import { OrderList, Select } from 'component';
import locale from 'config/locale';

class Order extends Component {
    constructor(props) {
        super(props);
        this.tableRef = createRef();
        this.state = {
            subList: []
        };
        const handles = ['handleSearch', 'handleChangeDate'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    componentDidMount() {
        const { user } = this.props;
        if (!user.sub) {
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
                condition: status == 'all' ? {
                    is_refund: 1,
                    refund_status: undefined
                } : {
                    refund_status: status
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

    render() {
        const tabs = [{
            value: 'all',
            label: '全部'
        }, {
            value: '10',
            label: '退款中'
        }, {
            value: '20',
            label: '退款成功'
        }, {
            value: '40',
            label: '退款失败'
        }];
        const { subList } = this.state;
        const { user } = this.props;

        return (
            <div className="page-layout-center">
                <Radio.Group
                    defaultValue="all"
                    onChange={e => {
                        const value = e.target.value;
                        this.handleChangeStatus(value);
                    }}
                    style={{ marginBottom: '20px' }}>
                    {
                        tabs.map(tab => (
                            <Radio.Button key={tab.value} value={tab.value}>{tab.label}</Radio.Button>
                        ))
                    }
                </Radio.Group>
                <div className="form-condition">
                    <Input.Search onSearch={value => this.handleSearch('order_sn', value)} placeholder="搜索订单号" />
                    <Input.Search style={{ marginLeft: '15px' }} onSearch={value => this.handleSearch('express_sn', value)} placeholder="搜索运单号" />
                    <DatePicker.RangePicker
                        style={{ width: 240, marginLeft: 15 }}
                        disabledDate={current => current && current && current > moment().endOf('day')}
                        onChange={this.handleChangeDate}
                        allowClear
                    />
                    {
                        !user.sub ?
                            <Select options={subList} style={{ marginLeft: 15, width: 180 }} fieldName={{ label: 'username', value: 'id' }} onChange={value => this.handleSearch('sub_id', value)} placeholder="选择子账号" allowClear /> : null
                    }
                </div>
                <OrderList
                    action="/order/userlist"
                    ref={this.tableRef}
                    user={user}
                    condition={{
                        is_refund: 1
                    }}
                />
            </div>
        );
    }
}

Order.propTypes = {
    user: PropType.object
};

export default connect(({ user }) => ({ user }))(Order);