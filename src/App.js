import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Simple from './components/Simple';
import EvenOdd from './components/EvenOdd';
import {Reverse, MegaSena} from './components/Multi';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Simple text='Hello World!'/>
				<EvenOdd number={223}/>
				<Reverse text='React Native'/>
				<MegaSena/>
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