import React, {Component} from 'react';
import {View} from 'react-native';
import Template from '../style/Template';
import {Text, TextInput} from 'react-native-paper'

export default class Events extends Component {
    state = {
        text: ''
    }

    changeText = text => {
        this.setState({text})       
    }

    render () {
        return (
            <View>
                <TextInput style={Template.input} onChangeText={this.changeText}/>
                <Text style={{fontSize: 40, color: 'purple'}}>
                    {this.state.text}
                </Text>
            </View>
        )
    }
}