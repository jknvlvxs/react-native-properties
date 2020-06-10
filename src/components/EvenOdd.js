import React from 'react';
import {View, Text} from 'react-native';
import Simple from '../components/Simple'

export default props => 
    <View>
        {props.number % 2 == 0 ? <Text style={Simple.ex}>{props.number} é número par!</Text> : <Text style={Simple.ex}>{props.number} é número ímpar!</Text>}
    </View>