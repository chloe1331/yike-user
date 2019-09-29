import { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import Dialog from '../dialog';

import './style.less';

class DialogImagePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false
        };
    }

    render() {
        const { image } = this.props;

        return (
            <Modal {...this.props} className="dialog-image-preview" footer={false}>
                <img src={image} />
            </Modal>
        );
    }
}

DialogImagePreview.propTypes = {
    image: PropTypes.string
};

export default Dialog(DialogImagePreview);