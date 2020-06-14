import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { text } from '../../assets/index';

const ChatWindowModal = ({ navigation }) => {
    const [item, setItem] = useState('');
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.button} onPress={() => {
                    setIndex(index + 1);
                }}>
                    Send
                </Text>
            </TouchableOpacity>
            <TextInput
                placeholder={"Type your message here..."}
                style={styles.messageInput}
                value={item}
                onChangeText={item => setItem(item)}
            >
            </TextInput>
            <TouchableWithoutFeedback onPress={() => {
                setIndex(index + 1);
            }}>
                <Image
                    style={styles.chat}
                    source={text[index]}
                />
            </TouchableWithoutFeedback>
        </View >
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
        backgroundColor: '#586f7c',
        padding: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    chat: {
        width: '80%',
        height: '80%',
    },
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    messageInput: {
        borderWidth: 1,
        padding: 15,
        width: '100%'
    },

})

export default ChatWindowModal;