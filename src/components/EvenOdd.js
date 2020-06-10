import React from 'react';
import {View, Text} from 'react-native';
import Template from '../style/Template'

export default props => {
    const number = 23;
    return <View>
        {number % 2 == 0 ? <Text style={Template.ex}>{number} é número par!</Text> : <Text style={Template.ex}>{number} é número ímpar!</Text>}
    </View>
}
    