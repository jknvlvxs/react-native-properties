import React from 'react';
import {View, Text} from 'react-native';
import Template from '../style/Template'

export default ({ navigation, route }) => 
    <View>
        <Text style={Template.ex}>{route.params.text}</Text>
    </View>