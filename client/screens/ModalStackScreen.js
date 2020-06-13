import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatWindowModal from './chat/ChatWindowModal';
import MatchProfileModal from './matching/MatchProfileModal';
import GroupsModal from './profile/GroupsModal';
const ModalStack = createStackNavigator();

const ModalStackScreen = () => {
    return (
        <ModalStack.Navigator mode='modal'>
            <ModalStack.Screen
                name='ChatWindowModal'
                component={ChatWindowModal}
            />
            <ModalStack.Screen
                name='MatchProfileModal'
                component={MatchProfileModal}
            />
            <ModalStack.Screen

                name='GroupsModal'
                component={GroupsModal}
            />
        </ModalStack.Navigator >
    );
};

export default ModalStackScreen;