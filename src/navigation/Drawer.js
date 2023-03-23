import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import Hotels from '../screens/Hotels'

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="Hotels" component={Hotels} />
    </DrawerNav.Navigator>
  );
}