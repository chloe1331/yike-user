import React, { useState } from 'react';
import { Popover } from 'antd';
import PropTypes from 'prop-types';

import OrderList from '../order-list';

export default function PopoverOrderDetail({ order_sn, user }) {
    const [visible, setVisible] = useState(false);
    return visible ? <Popover 
        overlayStyle={{ width: 880 }} 
        placement="bottomRight" 
        title="订单详情" 
        visible={visible}
        trigger={['click']}
        onVisibleChange={_v => setVisible(_v)}
        content={visible ? <OrderList
            action='/order/userlist'
            condition={{
                order_sn,
            }}
            user={user}
            pageSize={1}
            pagination={false}
        ></OrderList> : null}>
        <a className="text-info" onClick={() => setVisible(false)}>查看订单</a>
    </Popover> : <a className="text-info" onClick={() => setVisible(true)}>查看订单</a>;
}

PopoverOrderDetail.propTypes = {
    order_sn: PropTypes.string,
    user: PropTypes.object
};