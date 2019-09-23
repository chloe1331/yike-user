import { Component } from 'react';
import { Select as AntSelect } from 'antd';
import PropTypes from 'prop-types';

export default class Select extends Component {
    render() {
        const { options = [], fieldName = { label: 'label', value: 'value' } } = this.props;

        return (
            <AntSelect
                showSearch
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                {...this.props}
            >
                {
                    options.map(item => (
                        <AntSelect.Option key={item[fieldName.value]} value={item[fieldName.value]}>{item[fieldName.label]}</AntSelect.Option>
                    ))
                }
            </AntSelect>
        );
    }
}

Select.propTypes = {
    options: PropTypes.array,
    fieldName: PropTypes.object
};