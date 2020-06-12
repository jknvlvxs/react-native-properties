import React from 'react';
import {View, Button, Alert, ToastAndroid, Platform} from 'react-native';
import Template from '../style/Template';

export default props => {
    const notify = msg => {
        if(Platform.OS == 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG);
        } else {
            Alert.alert('Informação', msg)
        }
    }

    return (
        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <Button title='Plataforma' onPress={() => notify('Notificação')}/>
        </View>
    )
}