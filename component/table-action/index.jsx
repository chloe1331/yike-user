import { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';

export default class TableAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {
                current: 1,
                pageSize: 10,
                total: 0
            },
            dataSource: [],
            loading: true,
        };
        this.condition = props.condition || {};
        this.close = false;
    }

    componentDidMount() {
        this.getList();
    }

    componentWillUnmount() {
        this.close = true;
    }

    getList(page = this.state.pager.current) {
        const { pager, loading, dataSource } = this.state;
        const { action } = this.props;

        const params = {
            page,
            pagesize: pager.pageSize,
            ...this.condition
        };
        if (!loading) this.setState({ loading: true, pager: { ...pager, current: page } });

        MServer.get(action, params).then(res => {
            if (!this.close) {
                this.setState({
                    dataSource: res.errcode == 0 ? res.data : dataSource,
                    pager: {
                        ...pager,
                        current: page,
                        total: res.errcode == 0 ? res.total : pager.total
                    },
                    loading: false
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

    render() {
        const { columns } = this.props;
        const { dataSource, loading, pager } = this.state;

        return <Table
            rowKey="id"
            dataSource={dataSource}
            loading={loading}
            columns={columns}
            pagination={pager.pageSize < pager.total ? {
                ...pager,
                onChange: page => this.getList(page)
            } : false}
            {...this.props}
        />;
    }
}

TableAction.propTypes = {
    action: PropTypes.string,
    columns: PropTypes.array,
    condition: PropTypes.object
};