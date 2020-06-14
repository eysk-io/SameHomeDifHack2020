import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PROSPECTS from '../matching/data/prospects'

const Chat = ({ navigation }) => {
    // img: benImg,
    // name: "Ben Cheung",
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.chatBox}>
                <Image style={styles.matchPic} source={PROSPECTS[0].img} />
                <Text>{PROSPECTS[0].name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatBox}>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1,
    },
    chatBox: {
        flexDirection: 'row',
        backgroundColor: '#586f7c',
        margin: 10,
        width: '95%',
        height: '20%',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 25,
    },
    matchPic: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginBottom: 20,
    }
})

// #586f7c
// #142352
export default Chat;