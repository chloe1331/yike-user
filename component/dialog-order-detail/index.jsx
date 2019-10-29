import { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import Dialog from '../dialog';
import OrderList from '../order-list';

class DialogOrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        const { order_sn } = this.props;
        MServer.get('/order/userdetail', {
            order_sn
        }).then(res => {
            this.setState({
                data: res.errcode == 0 ? res.data : null
            });
        });
    }

    render() {
        const { data } = this.state;

        return (
            <Modal {...this.props} title="订单详情" width={980} footer={false} centered>
                <OrderList list={data ? [data] : []}></OrderList>
            </Modal>
        );
    }
}

DialogOrderDetail.propTypes = {
    order_sn: PropTypes.string
};

export default Dialog(DialogOrderDetail);