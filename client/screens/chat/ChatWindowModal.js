import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ChatWindowModal = ({ navigation }) => {
    return (
        <View>
            <Text>ChatWindowModal</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home');
                }}
            >
                <Text>To home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Chat');
                }}
            >
                <Text>To chat</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChatWindowModal;