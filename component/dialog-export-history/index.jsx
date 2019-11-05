import { Component } from 'react';
import { Modal } from 'antd';

import Dialog from '../dialog';
import TableAction from '../table-action';
import locale from 'config/locale';

class DialogExportHistroy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false
        };
    }

    render() {

        return (
            <Modal {...this.props} footer={false} centered>
                <TableAction 
                    action="/order/getExportList"
                    columns={[
                        {
                            key: 'count',
                            dataIndex: 'count',
                            title: '订单数'
                        },
                        {
                            key: 'createdAt',
                            dataIndex: 'createdAt',
                            title: '导出时间'
                        },
                        {
                            key: 'filename',
                            dataIndex: 'filename',
                            title: '操作',
                            render: (text) => (
                                <div>
                                    <a 
                                        onClick={() => {
                                            console.log(`http:${locale[process.env.NODE_ENV].url.api}/static/logis/${text}`);
                                            window.open(`http:${locale[process.env.NODE_ENV].url.api}/static/logis/${text}`);
                                        }}
                                    >下载</a>
                                </div>
                            )
                        }
                    ]}
                />
            </Modal>
        );
    }
}

export default Dialog(DialogExportHistroy);