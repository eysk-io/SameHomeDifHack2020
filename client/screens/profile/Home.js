import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home Page</Text>
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

export default Home;