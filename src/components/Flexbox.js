import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    north: {
        flex: 1,
        backgroundColor: '#663399',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#E81807',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    south: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6AE807'
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: '#242424',
        borderRadius: 50
    }
})

const Circle = props => <View style={styles.circle}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.north}>
                <Circle/>
            </View>
            <View style={styles.center}>
                <Circle/>
                <Circle/>
                <Circle/>
            </View>
            <View style={styles.south}>
                <Circle/>
            </View>
        </View>
    )
}