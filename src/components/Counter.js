import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Contador extends Component {

    state = {
        number: 0
    }

    addNumber = () => {
        this.setState({number: this.state.number+1})
    }

    clean = () => {
        this.setState({number: 0})
    }

    render () {
        return (
            <View>
                <Text style={{fontSize: 50}}>{this.state.number}</Text>
                <TouchableHighlight onPress={this.addNumber} onLongPress={this.clean}>
                    <Text>Incrementar / Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}