import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import MatchProfileModal from './MatchProfileModal';
import PROSPECTS from './data/prospects';

const MatchingPage = () => {
    const [index, setIndex] = useState(0);
    const [matchedProspects, setMatchedProspects] = useState(PROSPECTS);

    function handleLike() {
        if (matchedProspects[index]) {
            let temp = matchedProspects;
            temp[index].matched = true;
            setMatchedProspects(temp);
        }
        setIndex(getIndex());
    }

    function handleDisLike() {
        setIndex(getIndex());
    }

    function getIndex() {
        let i = Math.abs((index + 1) % matchedProspects.length);
        return i;
    }

    function getProspect() {
        let result = ["No matches available"];
        if (matchedProspects && matchedProspects[index]) {
            result = matchedProspects;
        }
        return result;
    }

    return (
        <SafeAreaView>
            <Text>MatchingPage</Text>
            <MatchProfileModal
                name={matchedProspects[index].name}
                img={matchedProspects[index].img}
                bio={matchedProspects[index].bio}
                skills={matchedProspects[index].skills}
                matched={matchedProspects[index].matched}
            />
            <TouchableOpacity onPress={handleLike}>
                <Text>Like button</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDisLike}>
                <Text>DisLike button</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default MatchingPage;