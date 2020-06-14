import React, { useState, useCallback } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, PanResponder, Animated, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faTimesCircle, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import MatchProfileModal from './MatchProfileModal';
import PROSPECTS from './data/prospects';

const MatchingPage = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [matchedProspects, setMatchedProspects] = useState(PROSPECTS);
    const [isNoMatch, setIsNoMatch] = useState(false);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_evt, gestureState) => {
            position.setValue({
                x: gestureState.dx,
                y: gestureState.dy
            });
        },
        onPanResponderRelease: (_evt, _gestureState) => {
            if (position.x._value < 0) {
                handleDisLike();
                console.log(position.x._value)
            } else if (position.x._value > 0) {
                handleLike();
                console.log(position.x._value)
            }
        }
    });

    function handleLike() {
        if (index === 1) {
            navigation.navigate('ChatWindowModal');
        }
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
        let accum = 0;
        let i = index;
        i = Math.abs((i + 1) % matchedProspects.length);
        while (matchedProspects[i].matched && accum < matchedProspects.length) {
            i = Math.abs((i + 1) % matchedProspects.length);
            accum++;
        }
        if (accum === matchedProspects.length) setIsNoMatch(true);
        return i;
    }

    const navigateToChat = useCallback(() => {
        navigation.navigate('Chat');
    });

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={
                [
                    {
                        transform: [
                            { translateX: position.x },
                            { translateY: position.y }
                        ]
                    },
                    styles.profile
                ]
            }
                {...panResponder.panHandlers}
            >
                {
                    isNoMatch ?
                        (<Text style={styles.noResponse}>No one to match with in your area</Text>) :
                        (<MatchProfileModal
                            name={matchedProspects[index].name}
                            img={matchedProspects[index].img}
                            bio={matchedProspects[index].bio}
                            skills={matchedProspects[index].skills}
                            matched={matchedProspects[index].matched}
                        />)
                }
            </Animated.View>
            <View horizontal={true} style={styles.buttons}>
                <TouchableOpacity onPress={handleDisLike}>
                    <FontAwesomeIcon size={70} style={styles.button} icon={faTimesCircle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToChat}>
                    <FontAwesomeIcon size={70} style={styles.button} icon={faCommentDots} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLike}>
                    <FontAwesomeIcon size={70} style={styles.button} icon={faCheckCircle} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    noResponse: {
        color: '#142352',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 25,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    profile: {
        textAlign: 'center',
        alignItems: 'center',
        width: '90%',
        height: '80%',
        borderWidth: 15,
        borderRadius: 25,
        borderColor: '#142352',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        margin: 20,
        color: '#142352',
    }
})

export default MatchingPage;