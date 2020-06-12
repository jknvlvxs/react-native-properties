import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {DrawerContent} from './content/DrawerContent';

import Simple from './components/Simple';
import EvenOdd from './components/EvenOdd';
import {Reverse, MegaSena} from './components/Multi';
import Counter from './components/Counter';
import Platforms from './components/Platforms';
import ValidateProperties from './components/ValidateProperties';

const Drawer = createDrawerNavigator();

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
      			<Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
				  	<Drawer.Screen name="ValidateProperties">
					  	{props => <ValidateProperties {...props} year={12} />}
					</Drawer.Screen>
				  	<Drawer.Screen name="Platforms" component={Platforms} />
					<Drawer.Screen name="Counter" component={Counter} />
					<Drawer.Screen name="MegaSena">
						{props => <MegaSena {...props} number={7} />}
					</Drawer.Screen>
					<Drawer.Screen name="Reverse">
						{props => <Reverse {...props} text={'React Native'} />}
					</Drawer.Screen>
					<Drawer.Screen name="EvenOdd">
						{props => <EvenOdd {...props} number={34} />}
					</Drawer.Screen>
        			<Drawer.Screen name="Simple">
						{props => <Simple {...props} text={'Texto Simples'} />}
					</Drawer.Screen>
      			</Drawer.Navigator>
			</NavigationContainer>
		)
	}
}