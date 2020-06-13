import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './profile/Home';
import ProfileModal from './profile/ProfileModal';
import MatchingPage from './matching/MatchingPage';
import Chat from './chat/Chat';
const MainStack = createStackNavigator();

const MainStackScreen = () => {
    return (
        <MainStack.Navigator>
            {/* <MainStack.Screen
                name='Home'
                component={Home}
            /> */}
            <MainStack.Screen
                name='ProfileModal'
                component={ProfileModal}
            />
            <MainStack.Screen
                name='MatchingPage'
                component={MatchingPage}
            />
            <MainStack.Screen
                name='Chat'
                component={Chat}
            />
        </MainStack.Navigator>
    );
};

export default MainStackScreen;