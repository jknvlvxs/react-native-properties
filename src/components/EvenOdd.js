import React from 'react';
import {View, Text} from 'react-native';
import Template from '../style/Template'

export default props => 
    <View>
        {props.number % 2 == 0 ? <Text style={Template.ex}>{props.number} é número par!</Text> : <Text style={Template.ex}>{props.number} é número ímpar!</Text>}
    </View>