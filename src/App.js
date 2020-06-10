import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Simple from './components/Simple';
import EvenOdd from './components/EvenOdd';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Simple text='Hello World!'></Simple>
				<EvenOdd number={223}></EvenOdd>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	} 
})