import { Component, createRef } from 'react';
import { Radio, Input } from 'antd';

import { OrderList } from 'component';

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.tableRef = createRef();
        const handles = ['handleSearch'];
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

    render() {
        const tabs = [{
            value: 'all',
            label: '全部订单'
        }, {
            value: 'audit',
            label: '待审核'
        }, {
            value: 'pending',
            label: '等待打印'
        }, {
            value: 'success',
            label: '已打印'
        }];

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
                </div>
                <OrderList
                    action="/order/userlist"
                    ref={this.tableRef}
                />
            </div>
        );
    }
}