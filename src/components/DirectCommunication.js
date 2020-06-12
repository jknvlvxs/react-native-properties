import React from 'react';
import {View, Text} from 'react-native';

const font = {style: {fontSize: 30}}

export const Children = props => 
    <View style={{marginLeft: 20}}>
        <Text {...font}>Filho: {props.name} {props.lastname}</Text>
    </View>

export const Father = props => 
    <View style={{marginTop: 20}}>
        <Text {...font}>Pai: {props.name} {props.lastname}</Text>
        {React.Children.map(props.children, c => React.cloneElement(c, {...props, ...c.props}))}
    </View>

export const Grandfather = props => 
    <View>
        <Text {...font}>Avô: {props.name} {props.lastname}</Text>
        <Father name="André" lastname={props.lastname}>
            <Children name="Ana"/>    
            <Children name="Anderson"/>    
            <Children name="Alberto"/>    
        </Father> 
        <Father {...props} name="Pedro">
            <Children name="Paulo"/>    
            <Children name="Patrícia"/>    
        </Father>
    </View>