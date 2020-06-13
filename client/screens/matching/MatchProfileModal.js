import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MatchProfileModal = ({ img, name, bio, skills, matched }) => {
    return (
        <SafeAreaView>
            <Text>{name}</Text>
            {/* <Text>MatchProfileModal</Text> */}
        </SafeAreaView>
    );
};

export default MatchProfileModal;