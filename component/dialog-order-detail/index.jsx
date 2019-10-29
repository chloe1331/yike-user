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
            list: []
        };
    }

    componentDidMount() {
        const { order_sn } = this.props;
        MServer.get('/order/userlist', {
            order_sn
        }).then(res => {
            this.setState({
                list: res.errcode == 0 ? res.data : []
            });
        });
    }

    render() {
        const { list } = this.state;

        return (
            <Modal {...this.props} title="订单详情" width={980} footer={false} centered>
                <OrderList list={list}></OrderList>
            </Modal>
        );
    }
}

DialogOrderDetail.propTypes = {
    order_sn: PropTypes.string
};

export default Dialog(DialogOrderDetail);