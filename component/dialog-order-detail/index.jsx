import { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import Dialog from '../dialog';
import OrderList from '../order-list';

class DialogOrderDetail extends Component {
    render() {
        const { order_sn } = this.props;

        return (
            <Modal {...this.props} title="订单详情" width={980} footer={false} centered>
                <OrderList
                    action='/order/userlist'
                    condition={{
                        order_sn,
                    }}
                ></OrderList>
            </Modal>
        );
    }
}

DialogOrderDetail.propTypes = {
    order_sn: PropTypes.string
};

export default Dialog(DialogOrderDetail);