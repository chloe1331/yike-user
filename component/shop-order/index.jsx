import React, { useEffect, useState, Fragment } from 'react';
import { Form, Pagination, Select, Row, Col, Button, Popover, Empty, Icon } from 'antd';
import { useRouter } from 'next/router';

import { MServer } from 'public/utils';
import Avatar from '../avatar';

import s from './style.less';

export default function ShopOrder ({ onOrder }) {
    const router = useRouter();
    const pageSize = 10;
    const { shop_id } = router.query;
    const [shop, setShop] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState([]);
    const [submit, setSubmit] = useState();
    const [current, setCurrent] = useState(shop_id ? Number(shop_id) : void 0);

    const getShopList = () => {
        MServer.get('/shop/list', {
            is_all: 1
        }).then(res => {
            if (res.data.length) {
                setShop(res.data);
                setCurrent(res.data[0].id);
            }
        });
    };

    const getOrderList = () => {
        MServer.get('/shop/order/list', {
            shop_id: current,
            page,
            pagesize: pageSize,
        }).then(res => {
            if (res.total) {
                setOrder(res.data);
                setTotal(res.total);
            }
        });
    };

    useEffect(() => {
        if (current) {
            getOrderList();
        }
    }, [current, page]);

    useEffect(() => {
        getShopList();
    }, []);

    return <div className={s.card}>
        <Form layout='inline'>
            <Form.Item label='选择店铺'>
                <Select placeholder='选择店铺' style={{ width: 160 }} value={current}>
                    {
                        shop.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)
                    }
                </Select>
            </Form.Item>
        </Form>
        {order.length ? <Fragment>
            {
                order.map(item => <div className={s.order} key={item.id}>
                    <div className={s.head}>
                        <p style={{ marginBottom: 4 }}>订单号：{item.order_sn}</p>
                        <p className='text-secondary' style={{ marginBottom: 0 }}>
                            成交时间：{item.trade.confirm_time}
                            <Popover
                                placement='leftTop'
                                content={<div>
                                    <p style={{ marginBottom: 4 }}><a>收件人：</a>{item.trade.consignee}</p>
                                    <p style={{ marginBottom: 4 }}><a>电话：</a>{item.trade.mobile}</p>
                                    <p style={{ marginBottom: 4 }}><a>地址：</a>{item.trade.province} {item.trade.city} {item.trade.district} {item.trade.address}</p>
                                </div>}
                            >
                                <a style={{ float: 'right' }}><Icon type="user" /></a>
                            </Popover>
                        </p>
                    </div>
                    <div className={s.body}>
                        <Popover placement='leftBottom' content={<img style={{ width: 400 }} src={item.goods_img} />}>
                            <a><Avatar src={item.goods_img} title={item.goods_name} /></a>
                        </Popover>
                        <div className={s.sub}>规格信息：{item.goods_spec}</div>
                        <Row justify='space-between'>
                            <Col>
                                数量：{item.goods_count}
                            </Col>
                            <Col>
                                <Button
                                    type='primary'
                                    loading={item.id == submit}
                                    onClick={() => {
                                        setSubmit(item.id);
                                        onOrder && onOrder(item, (res) => {
                                            setSubmit(void 0);
                                            if (res) {
                                                if (page == 1) {
                                                    getOrderList()
                                                } else {
                                                    setPage(1);
                                                }
                                            }
                                        });
                                    }}
                                >下单</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className={s.footer}>客服备注：{item.trade.remark}</div>
                </div>)
            }
            <Pagination style={{ textAlign: 'center' }} size='small' page={page} total={total} pageSize={pageSize} onChange={val => setPage(val)} />
        </Fragment> : <Empty description='暂无订单列表' />}
    </div>;
}