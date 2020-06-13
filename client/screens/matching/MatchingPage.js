import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import MatchProfileModal from './MatchProfileModal';
import PROSPECTS from './data/prospects';

const MatchingPage = () => {
    return (
        <View>
            <Text>MatchingPage</Text>
            <MatchProfileModal prospects={PROSPECTS} />
        </View>
    );
};

export default MatchingPage;