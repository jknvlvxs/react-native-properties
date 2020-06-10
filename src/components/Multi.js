import React from 'react';
import {Text} from 'react-native';
import Template from '../style/Template'

export const Reverse = props => {
    const inv = props.text.split('').reverse().join('');
    return <Text style={Template.ex}>{inv}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60];
    const number = Array(props.number || 6).fill(0)

    for(let i = 0; i < number.length; i++){
        let novo = 0;
        
        while (number.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        number[i] = novo;
    }

    number.sort((a, b) => a-b);
    return <Text style={Template.ex}>{number.join(', ')}</Text>
}

export default Reverse;