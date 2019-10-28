import { Component } from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';

import s from './style.less';

export default class LocalBtn extends Component {
    constructor(props) {
        super(props);
        this.uploadInputRef = null;
        const handles = ['handleUpload'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    handleUpload() {
        this.uploadInputRef.click();
    }

    onUpload(file) {
        const { onUpload } = this.props;
        onUpload && onUpload(file);
    }

    render() {
        const { text, accept, style } = this.props;

        return (
            <div className={s.localBtn} style={style}>
                <Input
                    className="hide"
                    type="file"
                    ref={e => this.uploadInputRef = e && e.input}
                    accept={accept || 'image/png,image/jpg,image/jpeg'}
                    onChange={e => this.onUpload(e.target.files[0])}
                />
                <Button onClick={this.handleUpload}>{text || '上传文件'}</Button>
            </div>
        );
    }
}

LocalBtn.propTypes = {
    text: PropTypes.any,
    accept: PropTypes.string,
    onUpload: PropTypes.func,
    style: PropTypes.object
};