import { Component, createRef, useState } from 'react';
import Link from 'next/link';
import ClipboardJS from 'clipboard';
import { Pagination, Spin, Empty, Button, Popconfirm, message, Modal } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import DialogImagePreview from '../dialog-image-preview';
import DialogUpdateAddress from '../dialog-update-address';
import Select from '../select';
import style from './style.less';

function ImageHover({ src, onClick }) {
    const [ show, setShow ] = useState(false);

    return <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={onClick} className={style.tableImage}>
        <img src={`${src}?imageView2/0/w/200`} />
        {show ? <span>点击查看</span> : null}
    </div>;
}

ImageHover.propTypes = {
    src: PropTypes.string,
    onClick: PropTypes.func
};

export default class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list || [],
            pager: {
                current: 1,
                pageSize: 10,
                total: 0
            },
            editRecord: null,
            loading: true,
            image: null,
            expressList: []
        };
        this.imagePreviewRef = createRef();
        this.updateAddressRef = createRef();
        this.condition = props.condition || {};
    }

    componentDidMount() {
        if (!this.props.list) this.getList();
        this.getExpress();
    }

    getSnapshotBeforeUpdate(prevProps) {
        if (this.props.list != prevProps.list && this.props.list != this.state.list) {
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) this.setState({
            list: this.props.list,
            loading: false
        });
    }

    getList(page = this.state.pager.current) {
        const { pager, loading } = this.state;
        const { action } = this.props;
        pager.current = page;

        if (!loading) this.setState({
            loading: true,
            pager
        });

        MServer.get(action || '/order/list', {
            page,
            pagesize: pager.pageSize,
            ...this.condition
        }).then(res => {
            if (res.errcode == 0) pager.total = res.total;
            this.setState({
                loading: false,
                list: res.errcode == 0 ? res.data : [],
                pager,
            });
        });
    }

    getExpress() {
        MServer.get('/logis/list', {
            is_all: 1
        }).then(res => {
            if (res.errcode == 0) {
                this.setState({
                    expressList: res.data
                });
            }
        });
    }
    
    reload({ page = this.state.pager.current, condition = {} } = {}) {
        this.condition = {
            ...this.condition,
            ...condition,
        };

        this.getList(page);
    }

    handleOpenImagePreview(image) {
        if (this.imagePreviewRef.current) {
            this.setState({
                image
            }, () => {
                this.imagePreviewRef.current.open();
            });
        }
    }

    handlePay(id) {
        MServer.post('/order/pay', {
            id
        }).then(res => {
            if (res.errcode == 0) {
                message.success('付款成功');
                this.getList();
            }
        });
    }

    handleClose(id) {
        MServer.post('/order/close', {
            id
        }).then(res => {
            if (res.errcode == 0) {
                message.success('关闭成功');
                this.getList();
            }
        });
    }

    handleDeleteTrade(id) {
        MServer.post('/order/userdelete', {
            id,
        }).then(res => {
            if (res.errcode == 0) {
                message.success('删除成功');
                this.getList();
            }
        });
    }

    handleUpdateAddress(record) {
        this.setState({
            editRecord: record
        }, () => {
            if (this.updateAddressRef.current) this.updateAddressRef.current.open();
        });
    }

    handleDeleteOrder(id) {
        MServer.post('/order/deleteorder', {
            id
        }).then(res => {
            if (res.errcode == 0) {
                message.success('删除成功');
                this.getList();
            }
        });
    }

    handleDeletePart(id) {
        MServer.post('/order/deletepart', {
            id
        }).then(res => {
            if (res.errcode == 0) {
                message.success('删除成功');
                this.getList();
            }
        });
    }

    handleApplyRefund(id) {
        MServer.post('/order/applyrefund', {
            id
        }).then(res => {
            if (res.errcode == 0) {
                message.success('申请成功');
                this.getList();
            }
        });
    }

    handleChangeExpress(id, express_id) {
        Modal.confirm({
            title: '确认要修改快递吗？',
            onOk: () => {
                MServer.post('/order/changeexpress', {
                    id,
                    express_id
                }).then(res => {
                    if (res.errcode == 0){
                        message.success('修改成功');
                        this.getList();
                    }
                });
            }
        });
    }

    render() {
        const { list, image, pager, loading, editRecord, expressList } = this.state;
        const colSpan = 9;
        const statusMap = {
            0: {
                text: '待审核',
                className: 'text-warning'
            },
            10: {
                text: '等待打印',
                className: 'text-info'
            },
            20: {
                text: '已打印',
                className: 'text-success'
            },
            30: {
                text: '待付款',
                className: 'text-warning'
            },
            40: {
                text: '已关闭',
                className: 'text-gray'
            },
            50: {
                text: '待发货',
                className: 'text-warning'
            },
            60: {
                text: '已发货',
                className: 'text-success'
            }
        };
        const refundStatusMap = {
            10: {
                text: '退款中',
                className: 'text-error'
            },
            20: {
                text: '退款成功',
                className: 'text-success'
            },
            40: {
                text: '退款失败',
                className: 'text-error'
            }
        };

        return (
            <div className={style.orderTable}>
                <DialogUpdateAddress ref={this.updateAddressRef} editRecord={editRecord} onSuccess={() => this.getList()} />
                <DialogImagePreview width={320} image={image} ref={this.imagePreviewRef} />
                <Spin spinning={loading}>
                    <table>
                        <thead>
                            <tr className={style.tableThead}>
                                <th>打印图</th>
                                <th>商品</th>
                                <th>单价</th>
                                <th>订货量</th>
                                <th>创建时间</th>
                                <th>价格</th>
                                <th>快递</th>
                                <th>订单类型</th>
                                <th>状态</th>
                            </tr>
                            <tr>
                                <td colSpan={colSpan} style={{ height: 25 }}></td>
                            </tr>
                        </thead>
                        <tbody>
                            {list.length ? list.map(item => [
                                <tr key="head" className={style.tableBodyHead}>
                                    <td colSpan={colSpan}>
                                        <span><label>订单号：</label>{item.order_sn}</span>
                                        <span><label>创建时间：</label>{item.createdAt}</span>
                                        <span><label>收件信息：</label>{item.consignee ? `${item.consignee}(${item.mobile})` : '-'} {item.address ? `${item.province} ${item.city} ${item.district} ${item.address}` : '-'}</span>
                                    </td>
                                </tr>,
                                item.orders.map((order, i) => (
                                    <tr key={`order_${order.id}`} className={style.tableBodyContent}>
                                        <td><ImageHover src={order.image} onClick={() => this.handleOpenImagePreview(order.image)} /></td>
                                        <td>
                                            {order.brand_name} {order.brand_type_name} {order.texture_name} {order.texture_attr_name || ''}
                                            {
                                                item.status == 30 || item.status == 0 ? (
                                                    <div>
                                                        <Popconfirm
                                                            title="确定要删除这个商品吗？"
                                                            onConfirm={() => this.handleDeleteOrder(order.id)}
                                                        >
                                                            <a>删除商品</a>
                                                        </Popconfirm>
                                                    </div>
                                                ) : null
                                            }
                                        </td>
                                        <td>{order.price}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.createdAt}</td>
                                        {
                                            i === 0 ? [
                                                <td key="amount" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>
                                                    <div>¥ {item.amount}</div>
                                                    {item.post_fee ? <div>含运费{item.post_fee}元</div> : null}
                                                </td>,
                                                <td key="express" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>
                                                    {
                                                        item.status == 30 ? (
                                                            <Select 
                                                                style={{ width: 120 }}
                                                                options={expressList}
                                                                value={item.express_id}
                                                                fieldName={{ label: 'name', value: 'id' }}
                                                                onChange={value => this.handleChangeExpress(item.id, value)}
                                                            />
                                                        ) : (
                                                            <div>{item.express_name || '--'}</div>
                                                        )
                                                    }
                                                </td>,
                                                <td key="type" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>{item.type == 10 ? '充值订单' : '普通订单'}</td>,
                                                <td key="status" className={style.tableBodyRowSpan} rowSpan={item.orders.length + item.parts.length}>
                                                    <span className={statusMap[item.status].className}>{statusMap[item.status].text}</span>
                                                    {item.refund_status != 0 ? <span style={{ display: 'block' }} className={refundStatusMap[item.refund_status].className}>({refundStatusMap[item.refund_status].text})</span> : null}
                                                </td>,
                                            ] : null
                                        }
                                    </tr>
                                )),
                                item.parts.map((part) => (
                                    <tr key={`part_${part.id}`} className={style.tableBodyContent}>
                                        <td>配件</td>
                                        <td>
                                            {part.name}
                                            {
                                                item.status == 30 ? (
                                                    <div>
                                                        <Popconfirm
                                                            title="确定要删除这个商品吗？"
                                                            onConfirm={() => this.handleDeletePart(part.id)}
                                                        >
                                                            <a>删除商品</a>
                                                        </Popconfirm>
                                                    </div>
                                                ) : null
                                            }
                                        </td>
                                        <td>{part.price}</td>
                                        <td>{part.quantity}</td>
                                        <td>{part.createdAt}</td>
                                    </tr>
                                )),
                                item.status == 30 ? (
                                    <tr key="operator" className={style.tableBodyHead}>
                                        <td colSpan={colSpan}>
                                            <Popconfirm 
                                                title={<div>确定要付款<span className="text-warning">{item.amount}</span>元吗？</div>} 
                                                onConfirm={() => this.handlePay(item.id)}
                                                placement="rightBottom"
                                            >
                                                <Button type="primary">付款</Button>
                                            </Popconfirm>
                                            <Popconfirm
                                                title={<div>确定要关闭这个订单吗？</div>}
                                                onConfirm={() => this.handleClose(item.id)}
                                                placement="rightBottom"
                                            >
                                                <Button>关闭订单</Button>
                                            </Popconfirm>
                                            <Link href={`/?type=10&order_sn=${item.order_sn}&express_id=${item.express_id}`}><Button>添加商品</Button></Link>
                                            <Button onClick={() => this.handleUpdateAddress(item)}>修改收货信息</Button>
                                        </td>
                                    </tr>
                                ) : null,
                                item.status == 0 ? (
                                    <tr key="operator" className={style.tableBodyHead}>
                                        <td colSpan={colSpan}>
                                            <Popconfirm
                                                title={<div>确定要删除这个订单吗？</div>}
                                                onConfirm={() => this.handleDeleteTrade(item.id)}
                                                placement="rightBottom"
                                            >
                                                <Button>删除订单</Button>
                                            </Popconfirm>
                                        </td>
                                    </tr>
                                ) : null,
                                [10, 20, 50].includes(item.status) && item.type == 10 && item.refund_status == 0 ? (
                                    <tr key="operator" className={style.tableBodyHead}>
                                        <td colSpan={colSpan}>
                                            <Popconfirm
                                                title={<div>确定申请退款吗？</div>}
                                                onConfirm={() => this.handleApplyRefund(item.id)}
                                                placement="rightBottom"
                                            >
                                                <Button>申请退款</Button>
                                            </Popconfirm>
                                        </td>
                                    </tr>
                                ) : null,
                                item.status == 60 && item.logis ? (
                                    <tr key="operator" className={style.tableBodyHead}>
                                        <td colSpan={colSpan}>
                                            <Popconfirm
                                                title={<div>确定申请退款吗？</div>}
                                                onConfirm={() => this.handleApplyRefund(item.id)}
                                                placement="rightBottom"
                                            >
                                                <Button style={{ marginRight: '15px' }}>申请退款</Button>
                                            </Popconfirm>
                                            物流信息：<span >
                                                {item.logis.express_name} {item.logis.express_sn}
                                                <a
                                                    ref={e => {
                                                        if (e) {
                                                            const clipboard = new ClipboardJS(e, {
                                                                text: () => `${item.logis.express_name} ${item.logis.express_sn}`
                                                            });
                                                            clipboard.on('success', function () {
                                                                message.success('复制成功！');
                                                            });
                                                        }
                                                    }}
                                                    style={{ marginLeft: '10px' }}
                                                >点击复制</a>
                                            </span>
                                        </td>
                                    </tr>
                                ) : null,
                                <tr key="footer" className={style.tableBodyFooter}>
                                    <td colSpan={colSpan} style={{ height: 15 }}></td>
                                </tr>
                            ]) : <tr>
                                <td colSpan={colSpan}>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </Spin>
                {
                    pager.total > pager.pageSize ? <Pagination {...pager} onChange={page => this.getList(page)} /> : null
                }
            </div>
        );
    }
}

OrderList.propTypes = {
    condition: PropTypes.object,
    action: PropTypes.string,
    list: PropTypes.array
};