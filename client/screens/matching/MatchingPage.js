import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import MatchProfileModal from './MatchProfileModal';
import PROSPECTS from './data/prospects';

const MatchingPage = () => {
    // function getProspect() {
    //     let numProspects = prospects.length();
    //     let i = Math.abs(index % numProspects);
    //     while (prospects[i].matched === true) i++;
    //     return prospects[i];
    // };

    return (
        <View>
            <Text>MatchingPage</Text>
            <MatchProfileModal prospects={PROSPECTS} />
        </View>
    );
};

export default MatchingPage;