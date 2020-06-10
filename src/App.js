import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Simple from './components/Simple';
import EvenOdd from './components/EvenOdd';
import {Reverse, MegaSena} from './components/Multi';

const Drawer = createDrawerNavigator();

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
      			<Drawer.Navigator initialRouteName="Simple">
					<Drawer.Screen name="MegaSena" component={MegaSena} options={{title: 'Mega Sena'}} />
					<Drawer.Screen name="Reverse" component={Reverse} options={{title: 'Inverter Texto'}} />
					<Drawer.Screen name="EvenOdd" component={EvenOdd} options={{title: 'Par ou Ímpar'}} />
        			<Drawer.Screen name="Simple" component={Simple} options={{title: 'Texto Simples'}} />
      			</Drawer.Navigator>
			</NavigationContainer>
		)
	}
}