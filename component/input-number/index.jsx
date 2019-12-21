import React, { Component } from 'react';
import { InputNumber as AntdInputNumber } from 'antd';
import PropTypes from 'prop-types';

export default class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue
        };
    }

    render() {
        const { value } = this.state;
        const { onChange } = this.props;

        return <AntdInputNumber value={value} {...this.props} onChange={value => {
            this.setState({ value });
            onChange && onChange(value);
        }} />; 
    }
}

InputNumber.propTypes = {
    onChange: PropTypes.func,
    defaultValue: PropTypes.number
};