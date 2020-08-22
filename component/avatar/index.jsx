import React from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';

import s from './style.less';

export default function CustomAvatar({ src, title }) {
    return <div className={s.avatar}>
        <Avatar src={src} shape="square" />
        <div className={s.info}>
            <div>{title}</div>
        </div>
    </div>;
}

CustomAvatar.propTypes = {
    src: PropTypes.string,
    title: PropTypes.any
};