import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Hotels from '../screens/Hotels'
import Hotel from '../screens/Hotel'
import Shows from '../screens/Shows'

const StackNav = createNativeStackNavigator();

export default function Stack() {
    return (
        <StackNav.Navigator screenOptions={{headerShown:false}}>
            <StackNav.Screen name="Home" component={Home}  />
            <StackNav.Screen name="Hotels" component={Hotels} />
            <StackNav.Screen name="Hotel Details" component={Hotel} />
            <StackNav.Screen name="Shows" component={Shows} />
            <StackNav.Screen name="SignIn" component={SignIn} />
        </StackNav.Navigator>
    )
}
