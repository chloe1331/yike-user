import { Component, createRef, useState } from 'react';
import { Pagination, Spin, Empty } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import DialogImagePreview from '../dialog-image-preview';
import style from './style.less';

function ImageHover({ src, onClick }) {
    const [ show, setShow ] = useState(false);

    return <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={onClick} className={style.tableImage}>
        <img src={src} />
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
            list: [],
            pager: {
                current: 1,
                pageSize: 10,
                total: 0
            },
            loading: true,
            image: null
        };
        this.imagePreviewRef = createRef();
        this.condition = props.condition || {};
    }

    componentDidMount() {
        this.getList();
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
                pager
            });
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

    render() {
        const { list, image, pager, loading } = this.state;
        const colSpan = 7;
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
            }
        };

        return (
            <div className={style.orderTable}>
                <DialogImagePreview width={320} image={image} ref={this.imagePreviewRef} />
                <Spin spinning={loading}>
                    <table>
                        <thead>
                            <tr className={style.tableThead}>
                                <th>打印图</th>
                                <th>型号</th>
                                <th>材质</th>
                                <th>订货量</th>
                                <th>状态</th>
                                <th>价格</th>
                                <th>订单类型</th>
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
                                        <span><label>收件信息：</label>{item.consignee ? `${item.consignee}(${item.mobile})` : '-'} {item.address ? `${item.province} ${item.city} ${item.district} ${item.address}` : '-'}</span>
                                    </td>
                                </tr>,
                                item.orders.map((order, i) => (
                                    <tr key={`order_${order.id}`} className={style.tableBodyContent}>
                                        <td><ImageHover src={order.image} onClick={() => this.handleOpenImagePreview(order.image)} /></td>
                                        <td>{order.brand_name} {order.brand_type_name}</td>
                                        <td>{order.texture_name} {order.texture_attr_name || ''}</td>
                                        <td>{order.quantity}</td>
                                        {
                                            i === 0 ? [
                                                <td key="status" className={style.tableBodyRowSpan} rowSpan={item.orders.length}>
                                                    <span className={statusMap[item.status].className}>{statusMap[item.status].text}</span>
                                                </td>,
                                                <td key="amount" className={style.tableBodyRowSpan} rowSpan={item.orders.length}>¥ {item.amount}</td>,
                                                <td key="type" className={style.tableBodyRowSpan} rowSpan={item.orders.length}>{item.type == 10 ? '充值订单' : '普通订单'}</td>
                                            ] : null
                                        }
                                    </tr>
                                )),
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
    action: PropTypes.string
};