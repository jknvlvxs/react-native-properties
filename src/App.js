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
import Events from './components/Events';
import {Grandfather} from './components/DirectCommunication';
import {SyncText} from './components/Callback';
import StudentsList from './components/StudentsList';
import StudentsListPaper from './components/StudentsListPaper';

const Drawer = createDrawerNavigator();

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
      			<Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
				  	<Drawer.Screen name="StudentsList" component={StudentsList} />
					  
				  	<Drawer.Screen name="StudentsListPaper" component={StudentsListPaper} />
				  	
					<Drawer.Screen name="Callback" component={SyncText} />

				  	<Drawer.Screen name="DirectCommunication">
						{props => <Grandfather {...props} name='Josias' lastname='Silva'/>}
					</Drawer.Screen>

					<Drawer.Screen name="Events">
						{props => <Events {...props}/>}
					</Drawer.Screen>

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