import React from 'react';
import {View, Text} from 'react-native';
import Template from '../style/Template'

export default ({ navigation, route }) => 
    <View>
        {route.params.number % 2 == 0 ? <Text style={Template.ex}>{route.params.number} é número par!</Text> : <Text style={Template.ex}>{route.params.number} é número ímpar!</Text>}
    </View>
    