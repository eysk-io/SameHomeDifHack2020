import React, { useState, useCallback, useRef } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, PanResponder, Animated, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faTimesCircle, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import MatchProfileModal from './MatchProfileModal';
import PROSPECTS from './data/prospects';

const MatchingPage = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [matchedProspects, setMatchedProspects] = useState(PROSPECTS);

    const position = new Animated.ValueXY();
    const { height, width } = Dimensions.get('window');

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            position.setValue({
                x: gestureState.dx,
                y: gestureState.dy
            });
        },
        onPanResponderRelease: (evt, gestureState) => {
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

    const navigateHome = useCallback(() => {
        navigation.navigate('Home');
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
                <MatchProfileModal
                    name={matchedProspects[index].name}
                    img={matchedProspects[index].img}
                    bio={matchedProspects[index].bio}
                    skills={matchedProspects[index].skills}
                    matched={matchedProspects[index].matched}
                />
            </Animated.View>
            <View horizontal={true} style={styles.buttons}>
                <TouchableOpacity onPress={handleDisLike}>
                    <FontAwesomeIcon size={70} style={styles.button} icon={faTimesCircle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateHome}>
                    <FontAwesomeIcon size={70} style={styles.button} icon={faUserCircle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLike}>
                    <FontAwesomeIcon size={70} style={styles.button} icon={faCheckCircle} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        alignItems: 'center',
        width: '85%',
        height: '80%',
        borderWidth: 1,
        borderRadius: 25,
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        margin: 20
    }
})

export default MatchingPage;