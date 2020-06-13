/*eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatWindowModal from './screens/chat/ChatWindowModal';
import MatchProfileModal from './screens/matching/MatchProfileModal';
import GroupsModal from './screens/profile/GroupsModal';
import ProfileModal from './screens/profile/ProfileModal';
import MainStackScreen from './screens/MainStackScreen';
export const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='MainStackScreen'
          component={MainStackScreen}
        />
        <RootStack.Screen
          name='ChatWindowModal'
          component={ChatWindowModal}
        />
        <RootStack.Screen
          name='MatchProfileModal'
          component={MatchProfileModal}
        />
        <RootStack.Screen
          name='GroupsModal'
          component={GroupsModal}
        />
        <RootStack.Screen
          name='ProfileModal'
          component={ProfileModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
