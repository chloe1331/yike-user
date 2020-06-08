import React, { Component, createRef } from 'react';
import { Card, Button } from 'antd';

import { DialogUploadImage } from 'component';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.uploadRef = createRef();
    }

    render() {
        return (
            <div className="page-layout-center">
                <DialogUploadImage ref={this.uploadRef} />
                <div className="form-condition">
                    <Button type="primary" onClick={() => this.uploadRef.current.open()}>上传图片</Button>
                </div>
                <Card>
                    
                </Card>
            </div>
        );
    }
}