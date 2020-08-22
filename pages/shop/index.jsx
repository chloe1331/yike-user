import React, { Fragment, useRef } from 'react';
import moment from 'moment';
import { Button, Divider, message } from 'antd';
import Link from 'next/link';

import { MServer } from 'public/utils';
import Config from 'config/locale';
import { shopMap } from 'config/constant';
import { TableAction, Avatar } from 'component';

const envUrls = Config[process.env.NODE_ENV].url;

export default function Page() {
    const tableRef = useRef();
    const handleSync = (id) => {
        message.loading('同步中...', 0);
        MServer.get('/shop/order/sync', {
            shop_id: id
        }).then(() => {
            message.destroy();
            message.success('同步成功');
        });
    };

    return <div className="page-layout-center">
        <div className="form-condition">
            <Button type="primary" href={`${envUrls.api}/shop/auth?type=pdd&state=auth`}>添加拼多多店铺</Button>
        </div>
        <TableAction
            action="/shop/list"
            ref={tableRef}
            columns={[
                {
                    key: 'name',
                    dataIndex: 'name',
                    title: '店铺',
                    render: (text, record) => <Avatar src={record.logo} title={text} />
                },
                {
                    key: 'type',
                    dataIndex: 'type',
                    title: '类型',
                    render: text => shopMap[text].name
                },
                {
                    key: 'createdAt',
                    dataIndex: 'createdAt',
                    title: '接入时间',
                    width: 220,
                },
                {
                    key: 'updatedAt',
                    dataIndex: 'updatedAt',
                    title: '最近更新时间',
                    width: 220,
                },
                {
                    key: 'setting',
                    dataIndex: 'id',
                    title: '操作',
                    render: (id, record) => (<Fragment>
                        {moment(record.updatedAt).endOf('day').valueOf() < moment().endOf('day') ? <a
                            href={`${envUrls.api}/shop/auth?type=pdd&state=reload`}
                        >重新授权</a> : <Fragment>
                            <a onClick={() => handleSync(id)}>同步订单</a>
                            <Divider type='vertical' />
                            <Link href={`/?shop_id=${id}`}><a>去下单</a></Link>
                        </Fragment>}
                    </Fragment>)
                }
            ]}
        />
    </div>;
}