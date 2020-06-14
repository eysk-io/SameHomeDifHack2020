import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image } from 'react-native';

const MatchProfileModal = ({ img, name, bio, skills, matched }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.img}
                source={img}
            />
            <View style={styles.text}>
                <Text style={styles.name}>{name}</Text>
                <Text>{bio}</Text>
                <Text>{skills}</Text>
                <Text>{matched.toString()}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    text: {
        margin: 10,
    },
    name: {
        fontSize: 40,
    },
    img: {
        marginTop: 35,
        marginBottom: 35,
        width: 200,
        height: 200,
        borderRadius: 200,
        borderWidth: 8,
        borderColor: 'black'
    }
})

export default MatchProfileModal;