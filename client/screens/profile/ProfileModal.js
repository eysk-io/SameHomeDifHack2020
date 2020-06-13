import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { images } from '../../assets';
import { Select } from '@material-ui/core/Select';
import { NativeSelect } from '@material-ui/core/NativeSelect';
import { Chip } from '@material-ui/core/Chip';

export default class ProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: images.EMPTY_PROFILE_PIC,
            name: "",
            description: "",
            email: "",
            location: '',
            interests: [],
        }
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    };

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    };

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    };

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    };

    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        })
    };

    uploadPhoto() {

    };

    handleSkillChange() {

    }

    render() {
        return (
            <ScrollView style={styles.outerContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Tell us a bit about yourself!</Text>
                </View>

                <View style={styles.profilePicContainer}>
                    <Image style={styles.profilePic} source={this.state.img}/>
                    <TouchableOpacity style={styles.uploadButton} onPress={this.uploadPhoto}>
                        <Text style={styles.uploadText}>Upload Photo</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>Name: </Text>
                    <TextInput 
                    style={styles.nameInput}
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    >
                    </TextInput>
                </View>

                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>Location: </Text>
                    <TextInput 
                    style={styles.nameInput}
                    value={this.state.name}
                    onChange={this.handleLocationChange}
                    >
                    </TextInput>
                </View>

                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>Email: </Text>
                    <TextInput 
                    style={styles.nameInput}
                    value={this.state.name}
                    onChange={this.handleEmailChange}
                    >
                    </TextInput>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.subText}>Description:</Text>
                    <TextInput placeholder='Please type your description here!' 
                    style={styles.descriptionBox} 
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    spellCheck={true}
                    multiline={true}
                    textAlignVertical='top'>
                    </TextInput>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.subText}>Interests:</Text>
                    {/* <Select 
                    multiple 
                    value={this.state.interests} 
                    onChange={this.handleSkillChange} 
                    input={<input/>}
                    >
                        </Select> */}
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: "#142352",
        flex: 1
    },

    header: {
        marginTop: 20
    },

    headerText: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },

    profilePicContainer: {
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto"
    },

    profilePic: {
        width: 200,
        height: 200
    },

    nameInput: {
        width: 240,
        backgroundColor: "white",
        
    },

    uploadText: {
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "#586f7c", 
        textAlign: "center",
        borderRadius: 20,
        padding: 10
    },

    uploadButton: {
        marginTop: 10,
        width: 200,
        alignItems: "center",
    },

    nameContainer: {
        alignItems: "center",
        marginTop: 50,
        flexDirection: "row",
        marginLeft: 25
    },

    nameText: {
        color: "white",
        fontSize: 20
    },

    Container: {
        alignItems: "center",
        marginTop: 50
    },

    subText: {
        color: "white",
        fontSize: 20,
        marginRight: 200
    },

    descriptionBox: {
        width: 300,
        height: 100,
        backgroundColor: "white"
    }
});

const listOfInterests = ["Whiteboarding", "Build a Project"];



