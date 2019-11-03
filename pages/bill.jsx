import React, { Component } from 'react';

import { TableAction } from 'component';

export default class Bill extends Component {
    render() {
        return (
            <div className="page-layout-center">
                <TableAction 
                    action="/user/mybill"
                    columns={[
                        {
                            key: 'user_id',
                            dataIndex: 'user_id',
                            title: '用户ID'
                        },
                        {
                            key: 'type',
                            dataIndex: 'type',
                            title: '交易类型',
                            render: text => text == 0 ? '支出' : '收入'
                        },
                        {
                            key: 'amount',
                            dataIndex: 'amount',
                            title: '交易金额'
                        },
                        {
                            key: 'balance',
                            dataIndex: 'balance',
                            title: '账户余额'
                        },
                        {
                            key: 'remark',
                            dataIndex: 'remark',
                            title: '备注'
                        },
                        {
                            key: 'createdAt',
                            dataIndex: 'createdAt',
                            title: '交易时间'
                        }
                    ]}
                />
            </div>
        );
    }
}