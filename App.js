import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'


export default function App() {
  return (
    <NavigationContainer>
        <Provider store={store}>
            <Stack/>
          </Provider>
      </NavigationContainer>
    
  );
}
