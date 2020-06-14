import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image } from 'react-native';

const MatchProfileModal = ({ img, name, bio }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.img}
                source={img}
            />
            <View style={styles.text}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.bio}>{bio}</Text>
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
        flex: 1,
        alignItems: 'center',
    },
    name: {
        color: '#142352',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 25
    },
    bio: {
        marginTop: 15,
        color: '#142352',
        fontSize: 15,
        fontWeight: 'bold',
    },
    img: {
        marginTop: 35,
        marginBottom: 35,
        width: 200,
        height: 200,
        borderRadius: 200,
        borderWidth: 5,
        borderColor: '#142352'
    }
})

export default MatchProfileModal;