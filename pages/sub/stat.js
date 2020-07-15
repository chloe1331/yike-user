import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Table, Alert } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        this.getList();
    }

    getList() {
        const { router } = this.props;
        const { id } = router.query;

        MServer.get('/stat/usersub', {
            sub_id: id
        }).then(res => {
            this.setState({
                list: res.data
            });
        });
    }

    render() {
        const { list } = this.state;

        return <div className="page-layout-center">
            <Alert message="每日5:00-6:00自动汇总前一天数据" type='warning' style={{ marginBottom: 20 }} />
            <Table
                dataSource={list}
                columns={[
                    {
                        key: 'date',
                        dataIndex: 'date',
                        title: '日期'
                    },
                    {
                        key: 'trade_count',
                        dataIndex: 'trade_count',
                        title: '订单数'
                    },
                    {
                        key: 'trade_part_count',
                        dataIndex: 'trade_part_count',
                        title: '配件订单数'
                    },
                    {
                        key: 'order_count',
                        dataIndex: 'order_count',
                        title: '子订单数(不含配件)'
                    }
                ]}
                pagination={false}
            />
        </div>;
    }
}

Page.propTypes = {
    router: PropTypes.object
};

export default withRouter(Page);