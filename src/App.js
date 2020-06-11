import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {DrawerContent} from './content/DrawerContent';

import Simple from './components/Simple';
import EvenOdd from './components/EvenOdd';
import {Reverse, MegaSena} from './components/Multi';
import Counter from './components/Counter';

const Drawer = createDrawerNavigator();

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
      			<Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
					<Drawer.Screen name="Counter" component={Counter} />
					<Drawer.Screen name="MegaSena" component={MegaSena} initialParams={{ number: 5 }} />
					<Drawer.Screen name="Reverse" component={Reverse} initialParams={{ text: 'React Native' }} />
					<Drawer.Screen name="EvenOdd" component={EvenOdd} initialParams={{ number: 785 }} />
        			<Drawer.Screen name="Simple" component={Simple} initialParams={{ text: 'Teste' }}/>
      			</Drawer.Navigator>
			</NavigationContainer>
		)
	}
}