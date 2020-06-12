import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

const ValidateProperties = props => 
    <Text style={{fontSize:50}}>
        {props.label}
        {props.year + 2000}
    </Text>

ValidateProperties.defaultProps = {
    label: 'Ano: '
}

ValidateProperties.propTypes = {
    year: PropTypes.number.isRequired
}

export default ValidateProperties