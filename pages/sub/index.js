import React, { Component, createRef, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Divider, Popconfirm, Popover, Select, Icon } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import { roleList } from 'config/constant';
import { TableAction, DialogCreateSub, DialogResetPassword } from 'component';
import Item from 'antd/lib/list/Item';

class Sub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetId: null,
        };
        this.createRef = createRef();
        this.resetRef = createRef();
        this.tableRef = createRef();
        const handles = ['handleAdd'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    handleAdd() {
        this.createRef.current.open();
    }

    handleDelete(id) {
        MServer.post('/user/deletesub', {
            id
        }).then(res => {
            if (res.errcode == 0) {
                this.tableRef.current.reload();
            }
        });
    }

    handleEdit(id, opt) {
        MServer.post('/user/editsub', {
            sub_id: id,
            ...opt
        }).then(res => {
            if (res.errcode == 0) {
                this.tableRef.current.reload();
            }
        });
    }

    render() {
        const { resetId } = this.state;
        const { user } = this.props;

        return (
            <div className="page-layout-center">
                <DialogCreateSub ref={this.createRef} user={user} onSuccess={() => {
                    this.tableRef.current.reload();
                }} />
                <DialogResetPassword ref={this.resetRef} resetId={resetId} />
                <div className="form-condition">
                    <Button type="primary" onClick={this.handleAdd}>添加子账号</Button>
                </div>
                <TableAction 
                    action="/user/sublist"
                    ref={this.tableRef}
                    columns={[
                        {
                            key: 'username',
                            dataIndex: 'username',
                            title: '用户名',
                            render: text => `${user.username}:${text}`
                        },
                        {
                            key: 'role',
                            dataIndex: 'role',
                            title: '权限',
                            render: (text, record) => <Popover
                                title="修改权限"
                                trigger={['click']}
                                placement="bottom"
                                content={<div>
                                    <Select style={{ width: 160 }} value={text} onChange={val => this.handleEdit(record.id, { role: val })}>
                                        {
                                            roleList.map(item => <Select.Option key={item.value}>{item.label}</Select.Option>)
                                        }
                                    </Select>
                                </div>}
                            >
                                <a>
                                    {roleList.find(item => item.value == text) && roleList.find(item => item.value == text).label}
                                    <Icon type="edit" className="text-info" style={{ marginLeft: 10 }} />
                                </a>
                            </Popover>
                        },
                        {
                            key: 'createdAt',
                            dataIndex: 'createdAt',
                            title: '创建时间'
                        },
                        {
                            key: 'updatedAt',
                            dataIndex: 'updatedAt',
                            title: '最近更新时间'
                        },
                        {
                            key: 'setting',
                            dataIndex: 'id',
                            title: '操作',
                            render: (id) => (<Fragment>
                                <Link href={`/sub/stat?id=${id}`}><a>统计</a></Link>
                                <Divider type='vertical' />
                                <a onClick={() => this.setState({ resetId: id }, () => this.resetRef.current.open())}>重置密码</a>
                                <Divider type='vertical' />
                                <Popconfirm title="确认要删除这个子账号吗？" onConfirm={() => this.handleDelete(id)}><a>删除</a></Popconfirm>
                            </Fragment>)
                        }
                    ]}
                />
            </div>
        );
    }
}

Sub.propTypes = {
    user: PropTypes.object
};

export default connect(({ user }) => ({ user }))(Sub);