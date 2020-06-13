/*eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ModalStackScreen from './screens/ModalStackScreen';
import MainStackScreen from './screens/MainStackScreen';
const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='MainStackScreen'
          component={MainStackScreen}
        />
        <RootStack.Screen
          name='ModalStackScreen'
          component={ModalStackScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
