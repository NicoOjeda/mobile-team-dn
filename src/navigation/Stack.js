import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Hotels from '../screens/Hotels'
import Hotel from '../screens/Hotel'

const StackNav = createNativeStackNavigator();

export default function Stack() {
    return (
        <StackNav.Navigator>
            <StackNav.Screen name="Home" component={Home} />
            <StackNav.Screen name="Hotels" component={Hotels} />
            <StackNav.Screen name="Hotel Details" component={Hotel} />
        </StackNav.Navigator>
    )
}

// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../screens/Home'
// import Hotels from '../screens/Hotels'

// const StackNav = createNativeStackNavigator();

// export default function Stack() {
//     return (
//         <StackNav.Navigator>
//             <StackNav.Screen name="Home" component={Home} />
//             <StackNav.Screen name="Hotels" component={Hotels} />
//         </StackNav.Navigator>
//     )
// }
