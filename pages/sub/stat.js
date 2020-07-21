import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Table, Alert, DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            dateRange: [moment().subtract(61, 'days'), moment().subtract(1, 'days')]
        };
    }
    componentDidMount() {
        this.getList();
    }

    getList() {
        const { dateRange } = this.state;
        const { router } = this.props;
        const { id } = router.query;

        MServer.get('/stat/usersub', {
            sub_id: id,
            start_date: dateRange[0].format('YYYY-MM-DD'),
            end_date: dateRange[1].format('YYYY-MM-DD'),
        }).then(res => {
            this.setState({
                list: res.data
            });
        });
    }

    render() {
        const { list, dateRange } = this.state;

        return <div className="page-layout-center">
            <div className="form-condition">
                <DatePicker.RangePicker
                    value={dateRange}
                    onChange={(value) => this.setState({ dateRange: value }, this.getList)}
                    disabledDate={current => current && (current > moment().subtract(1, 'days').endOf('day') || current < moment().subtract(91, 'days').endOf('day'))}
                />
            </div>
            <Alert message="每日5:00-6:00自动汇总前一天数据" type='warning' style={{ marginBottom: 20 }} />
            <Table
                dataSource={list.concat({
                    date: '累计',
                    trade_count: list.reduce((cur, next) => cur + Number(next.trade_count), 0),
                    trade_part_count: list.reduce((cur, next) => cur + Number(next.trade_part_count), 0),
                    order_count: list.reduce((cur, next) => cur + Number(next.order_count), 0),
                })}
                columns={[
                    {
                        key: 'date',
                        dataIndex: 'date',
                        title: '日期',
                        render: (text, record) => record.date == '累计' ? <span className="text-error">{text}</span> : text
                    },
                    {
                        key: 'trade_count',
                        dataIndex: 'trade_count',
                        title: '订单数',
                        render: (text, record) => record.date == '累计' ? <span className="text-error">{text}</span> : text
                    },
                    {
                        key: 'trade_part_count',
                        dataIndex: 'trade_part_count',
                        title: '配件订单数',
                        render: (text, record) => record.date == '累计' ? <span className="text-error">{text}</span> : text
                    },
                    {
                        key: 'order_count',
                        dataIndex: 'order_count',
                        title: '子订单数(不含配件)',
                        render: (text, record) => record.date == '累计' ? <span className="text-error">{text}</span> : text
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