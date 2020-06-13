import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Chat = ({ navigation }) => {
    return (
        <View>
            <Text>
                Chat
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Text>To Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ChatWindowModal');
                }}
            >
                <Text>To Chat Window</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Chat;