import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Simple from './components/Simple';
import EvenOdd from './components/EvenOdd';
import {Reverse, MegaSena} from './components/Multi';

const Drawer = createDrawerNavigator();

const SimpleComponent = props => (
	<Simple text="FDSAIPOJASIOJD"/>
);

const EvenOddComponent = props => (
	<EvenOdd number={777}/>
);

const ReverseComponent = props => (
	<Reverse text="React Native"/>
);

const MegaSenaComponent = props => (
	<MegaSena/>
);


export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
      			<Drawer.Navigator initialRouteName="Simple">
					<Drawer.Screen name="MegaSena" component={MegaSenaComponent} options={{title: 'Mega Sena'}} />
					<Drawer.Screen name="Reverse" component={ReverseComponent} options={{title: 'Inverter Texto'}} />
					<Drawer.Screen name="EvenOdd" component={EvenOddComponent} options={{title: 'Par ou Ímpar'}} />
        			<Drawer.Screen name="Simple" component={SimpleComponent} options={{title: 'Texto Simples'}} />
      			</Drawer.Navigator>
			</NavigationContainer>
		)
	}
}