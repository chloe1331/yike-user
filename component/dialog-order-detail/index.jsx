import { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import Dialog from '../dialog';
import OrderList from '../order-list';

import './style.less';

class DialogOrderDetail extends Component {
    render() {
        const { order_sn, user } = this.props;

        return (
            <Modal {...this.props} title="订单详情" width={880} footer={false} centered className="dialog-order-detial">
                <OrderList
                    user={user}
                    action='/order/userlist'
                    condition={{
                        order_sn,
                    }}
                    // pageSize={1}
                    // pagination={false}
                    size="small"
                ></OrderList>
            </Modal>
        );
    }
}

DialogOrderDetail.propTypes = {
    order_sn: PropTypes.string,
    user: PropTypes.object
};

export default Dialog(DialogOrderDetail);