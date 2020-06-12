import React, { Component } from 'react';
import {View} from 'react-native';
import Template from '../style/Template';
import { TextInput, Text } from 'react-native-paper';

export const FieldInput = props => 
    <View>
        <TextInput value={props.text} style={Template.input} onChangeText={props.callbackInput}/>
    </View>

export class SyncText extends Component {

    state = {
        text: ''
    }

    changeText = text => {
        this.setState({text});
    }

    render() {
        return (
            <View>
                <FieldInput text={this.state.text} callbackInput={this.changeText}/>
                <Text style={{fontSize: 40, color: 'red'}}>{this.state.text}</Text>
            </View>
        )
    }
}