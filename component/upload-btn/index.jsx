import React, { Component } from 'react';
import { Button, message, Icon } from 'antd';
import Upload from 'rc-upload';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { MServer } from 'public/utils';
import locale from 'config/locale';
import style from './style.less';

export default class UplaodButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upload: false,
            image: null
        };
        const handles = ['handleStart', 'handleError', 'handleSuccess', 'beforeUpload'];
        handles.forEach(item => this[item] = this[item].bind(this));
    }

    getSnapshotBeforeUpdate(prevProps) {
        if (this.props.value != prevProps.value && this.props.value != this.state.image) {
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) this.setState({
            image: this.props.value
        });
    }

    beforeUpload(file) {
        const { limitSize } = this.props;
        if (limitSize && file.size > limitSize * 1024 * 1024) {
            message.error(`图片大小不能超过${limitSize}M！`);
            return false;
        }
        return true;
    }

    handleStart() {
        this.setState({
            upload: true
        });
    }

    handleError() {
        this.setState({
            upload: false
        });
    }

    handleSuccess(res) {
        const { onChange } = this.props;

        if (res.errcode != 0) {
            message.error(res.message);
            this.setState({
                upload: false
            });
        } else {
            this.setState({
                image: res.filename,
                upload: false
            });
            typeof onChange == 'function' && onChange(res.filename);
        }
    }

    render() {
        const { upload, image} = this.state;
        const { buttonText, icon, action, accept, buttonProps, show = true } = this.props;

        return (
            <Upload
                name="files"
                withCredentials={true}
                action={MServer.getUrl(action || '/upload/image').fullUrl}
                accept={accept || 'image/png,image/jpg,image/jpeg'}
                onStart={this.handleStart}
                onError={this.handleError}
                onSuccess={this.handleSuccess}
                beforeUpload={this.beforeUpload}
                className={style.uploadBtn}
                headers={MServer.getDefaultHeaders()}
            >
                {
                    image && show ? (
                        <div 
                            className={cx({
                                [style.uploadBtnImage]: true,
                                [style.loading]: upload
                            })} 
                            // style={{ backgroundImage: `url(${locale[process.env.NODE_ENV].url.cdn}${image}` }}
                        >
                            <img alt="" src={`${locale[process.env.NODE_ENV].url.cdn}${image}`} />
                            <div className={style.iconMask}></div>
                            <div className={style.iconBtns}>
                                <Icon type={upload ? 'loading' : 'edit'}></Icon>
                            </div>
                        </div>
                    ) : (
                        <Button icon={icon || 'plus'} loading={upload} {...buttonProps}>{upload ? '上传中...' : (buttonText || '上传')}</Button>
                    )
                }
            </Upload>
        );
    }
}

UplaodButton.propTypes = {
    buttonText: PropTypes.any,
    icon: PropTypes.any,
    accept: PropTypes.string,
    action: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    buttonProps: PropTypes.object,
    limitSize: PropTypes.number,
    show: PropTypes.bool
};