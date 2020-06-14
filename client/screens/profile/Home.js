import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

const Home = ({ navigation }) => {
    const [authResult, setAuthResult] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handlRedirect = async event => {
        WebBrowser.dismissBrowser();
    };

    function addLinkingListener() {
        Linking.addEventListener('url', handlRedirect);
    };

    function removeLinkingListener() {
        Linking.removeEventListener('url', handlRedirect);
    }

    const fetchData = useCallback(async () => {
        const res = await fetch('http://192.168.0.32:5000/userdata', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json()
        console.log(data);
    }, [])

    async function handleRegistration() {
        fetchData();
        navigation.navigate('ProfileModal');
    }

    const linkedInLogin = async () => {
        let redirectUrl = await Linking.getInitialURL();
        let authUrl = 'http://192.168.0.32:5000/auth/linkedin'

        addLinkingListener();

        try {
            let authResult = await WebBrowser.openAuthSessionAsync(
                authUrl,
                redirectUrl
            )
            await setAuthResult({ authResult: authResult });
        } catch (err) {
            console.log('ERROR:', err);
        }

        setIsLoggedIn(true);

        removeLinkingListener();
    }

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, backgroundColor: "#142352" }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>SPARK</Text>
            </View>
            {
                isLoggedIn ?
                    (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => handleRegistration()}>
                                <Text style={styles.buttonText}>CLICK TO CONTINUE!</Text>
                            </TouchableOpacity>
                        </View>
                    ) :
                    (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>LOG IN WITH FACEBOOK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonStyle} onPress={linkedInLogin}>
                                <Text style={styles.buttonText}>LOG IN WITH LINKEDIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                                navigation.navigate('MatchingPage');
                            }}>
                                <Text style={styles.buttonText}>LOG IN WITH GOOGLE</Text>
                            </TouchableOpacity>
                        </View>
                    )
            }
        </View >
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        flex: 1,
        justifyContent: "center"
    },

    headerText: {
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    logo: {
        width: 45,
        height: 45,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 258
    },

    buttonContainer: {
        justifyContent: 'space-between',
        borderRadius: 20,
        width: 300,
        flex: 2,
        marginBottom: 70,
        marginTop: 60,

    },

    buttonStyle: {
        borderRadius: 10,
        backgroundColor: '#586f7c',
        padding: 10,
        alignItems: "center",
        height: 75,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"

    }
});

export default Home;