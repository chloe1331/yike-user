import { Component, createRef } from 'react';
import { Radio } from 'antd';

import { TableAction, DialogImagePreview } from 'component';

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
        this.tableRef = createRef();
        this.imagePreviewRef = createRef();
    }

    handleChangeStatus(status) {
        if (this.tableRef.current) {
            this.tableRef.current.reload({
                page: 1,
                condition: {
                    status
                }
            });
        }
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
        const tabs = [{
            value: 'all',
            label: '全部订单'
        }, {
            value: 'audit',
            label: '待审核'
        }, {
            value: 'pending',
            label: '等待打印'
        }, {
            value: 'success',
            label: '已打印'
        }];
        const { image } = this.state;

        return (
            <div className="page-layout-center">
                <DialogImagePreview image={image} ref={this.imagePreviewRef} />
                <Radio.Group 
                    defaultValue="all" 
                    onChange={e => {
                        const value = e.target.value;
                        this.handleChangeStatus(value == 'all' ? null : value);
                    }} 
                    style={{ marginBottom: '20px' }}>
                    {
                        tabs.map(tab => (
                            <Radio.Button key={tab.value} value={tab.value}>{tab.label}</Radio.Button>
                        ))
                    }
                </Radio.Group>
                <TableAction
                    ref={this.tableRef}
                    action="/order/userlist"
                    columns={[
                        {
                            key: 'order_sn',
                            dataIndex: 'order_sn',
                            title: '订单编号'
                        },
                        {
                            key: 'brand_type_name',
                            dataIndex: 'brand_type_name',
                            title: '型号',
                            render: (text, record) => `${record.brand_name} ${text}`
                        },
                        {
                            key: 'texture_name',
                            dataIndex: 'texture_name',
                            title: '材质',
                            render: (text, record) => `${text} ${record.texture_attr_name || ''}`
                        },
                        {
                            key: 'quantity',
                            dataIndex: 'quantity',
                            title: '订货量'
                        },
                        {
                            key: 'createdAt',
                            dataIndex: 'createdAt',
                            title: '下单时间'
                        },
                        {
                            key: 'status',
                            dataIndex: 'status',
                            title: '订单状态',
                            render: text => {
                                switch(text) {
                                case 10:
                                    return <span className="text-info">等待打印</span>;
                                case 20: 
                                    return <span className="text-success">已打印</span>;
                                case 40:
                                    return <span className="text-error">已拒绝</span>;
                                default:
                                    return <span className="text-warning">待审核</span>;
                                }
                            }
                        },
                        {
                            key: 'setting',
                            dataIndex: 'id',
                            title: '操作',
                            align: 'right',
                            render: (id, record) => (
                                <div className="table-operate">
                                    <a onClick={() => this.handleOpenImagePreview(record.image)}>预览</a>
                                </div>
                            )
                        }
                    ]}
                />
            </div>
        );
    }
}