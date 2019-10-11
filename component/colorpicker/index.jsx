// import { useState } from 'react';

import ColorPicker from 'rc-color-picker';

import './style.less';

export default function MyColorPicker(props) {
    return (
        <ColorPicker
            placement="topLeft"
            {...props}
        />
    );
}