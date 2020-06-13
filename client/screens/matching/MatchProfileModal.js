import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MatchProfileModal = ({ prospects }) => {
    const [index, setIndex] = useState(0);
    const [matchedProspects, setMatchedProspects] = useState(prospects);

    function handleLike() {
        if (matchedProspects[index]) {
            let temp = matchedProspects;
            temp[index].matched = true;
            setMatchedProspects(temp);
        }

        console.log(matchedProspects[index].name);
        let i = Math.abs((index + 1) % matchedProspects.length);
        setIndex(i);
    }

    return (
        <SafeAreaView>
            <Text>MatchProfileModal</Text>
            <Text>{`Index: ${index}`}</Text>
            <Text>{`Matched?: ${matchedProspects[index] ? matchedProspects[index].matched.toString() : undefined}`}</Text>
            <TouchableOpacity onPress={handleLike}>
                <Text>Like button</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default MatchProfileModal;