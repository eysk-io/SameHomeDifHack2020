import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { images } from '../../assets';

const Home = ({ navigation }) => {
    const [authResult, setAuthResult] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const handlRedirect = async event => {
        WebBrowser.dismissBrowser();
    };

    function addLinkingListener() {
        Linking.addEventListener('url', handlRedirect);
    };

    function removeLinkingListener() {
        Linking.removeEventListener('url', handlRedirect);
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

        removeLinkingListener();
    }

    async function fetchData() {
        fetch('http://192.168.0.32:5000/userdata')
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.error(err);
            });
    }


    return (
        (authResult.type && authResult.type === 'success') ?
            <Text>Success!</Text> :
            (<View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, backgroundColor: "#142352" }}>

                <View style={styles.header}>
                    <Image style={styles.logo} source={images.LOGO} />
                    <Text style={styles.headerText}>Home Page</Text>
                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>LOG IN WITH GOOGLE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>LOG IN WITH FACEBOOK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle} onPress={linkedInLogin}>
                        <Text style={styles.buttonText}>LOG IN WITH LINKEDIN</Text>
                    </TouchableOpacity>

                </View>
            </View>)
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        flex: 1,
        flexDirection: "row",
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
        marginTop: 60
    },

    buttonStyle: {
        borderRadius: 10,
        backgroundColor: '#586f7c',
        padding: 10,
        alignItems: "center",
        height: 75,
        justifyContent: "center",
    },

    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"

    }
});

export default Home;