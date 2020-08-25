import React, { Fragment, useRef, useState } from 'react';
import moment from 'moment';
import { Button, Divider, message, Modal, Icon } from 'antd';
import Link from 'next/link';

import { MServer } from 'public/utils';
import Config from 'config/locale';
import { shopMap } from 'config/constant';
import { TableAction, Avatar, CustomIcon } from 'component';

import s from './style.less';

const envUrls = Config[process.env.NODE_ENV].url;

export default function Page() {
    const tableRef = useRef();
    const [showModal, setShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleSync = (id) => {
        setShowModal(true);
        MServer.get('/shop/order/sync', {
            shop_id: id
        }).then(() => {
            setIsSuccess(true);
            message.success('同步成功');
        });
    };

    return <div className="page-layout-center">
        <Modal
            visible={showModal}
            onCancel={() => {
                setShowModal(false);
            }}
            okText='知道了'
            width={360}
            footer={isSuccess ? void 0 : false}
            closable={false}
            maskClosable={false}
        >
            {
                isSuccess ? <div className={s.success}>
                    <div><CustomIcon type='icon-success' style={{ fontSize: 42 }} /></div>
                    <p>同步成功</p>
                </div> : <div>
                    <Icon type='loading' /> 同步中，请耐心等待...
                </div>
            }
        </Modal>
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
                    key: 'status',
                    dataIndex: 'refresh_token_expires_at',
                    title: '店铺状态',
                    width: 220,
                    render: text => Number(text) * 1000 < moment().valueOf() ? <span className='text-error'>授权到期</span> : <span className='text-success'>已授权</span>
                },
                {
                    key: 'createdAt',
                    dataIndex: 'createdAt',
                    title: '接入时间',
                    width: 220,
                },
                {
                    key: 'refresh_token_expires_at',
                    dataIndex: 'refresh_token_expires_at',
                    title: '授权到期时间',
                    width: 220,
                    render: text => moment(Number(text) * 1000).format('YYYY-MM-DD HH:mm:ss')
                },
                {
                    key: 'setting',
                    dataIndex: 'id',
                    title: '操作',
                    render: (id, record) => (<Fragment>
                        <a onClick={() => handleSync(id)}>同步订单</a>
                        <Divider type='vertical' />
                        <a href={`${envUrls.api}/shop/auth?type=pdd&state=reload`}>重新授权</a>
                        <Divider type='vertical' />
                        <Link href={`/?shop_id=${id}`}><a>去下单</a></Link>
                    </Fragment>)
                }
            ]}
        />
    </div>;
}