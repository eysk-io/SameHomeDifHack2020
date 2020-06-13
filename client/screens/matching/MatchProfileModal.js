import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MatchProfileModal = ({ prospects }) => {
    const [index, setIndex] = useState(0);
    const [matchedProspects, setMatchedProspects] = useState(prospects);

    function handleLike() {
        if (matchedProspects[index]) {
            matchedProspects[index].matched = true;
        }
        console.log(matchedProspects[index].name);
        let i = Math.abs((index + 1) % matchedProspects.length);
        setIndex(i);
    }

    return (
        <SafeAreaView>
            <Text>MatchProfileModal</Text>
            <Text>{`Index: ${index}`}</Text>
            <Text>{`Matched?: ${prospects[index] ? prospects[index].matched.toString() : undefined}`}</Text>
            <TouchableOpacity onPress={handleLike}>
                <Text>Like button</Text>
            </TouchableOpacity>
            <Text>{prospects.length.toString()}</Text>
        </SafeAreaView>
    );
};

export default MatchProfileModal;