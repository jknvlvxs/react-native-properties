import React from 'react';
import {View, Text} from 'react-native';
import Template from '../style/Template'

export default props => 
    <View>
        <Text style={Template.ex}>{props.text}</Text>
    </View>