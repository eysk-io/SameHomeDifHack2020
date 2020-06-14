import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, CheckBox, Alert } from 'react-native';
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
            location: "",
            interests: [],
            whiteboarding: false,
            mentor: false,
            project: false
        }
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleWhiteCheck = this.handleWhiteCheck.bind(this);
        this.handleProjectCheck = this.handleProjectCheck.bind(this);
        this.handleMentorCheck = this.handleMentorCheck.bind(this);
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

    handleWhiteCheck(e) {
        if (this.state.whiteboarding) {
            this.setState({
                whiteboarding: false
            });
        } else {
            this.setState({
                whiteboarding: true
            });
        }
    };

    handleMentorCheck(e) {
        if (this.state.mentor) {
            this.setState({
                mentor: false
            });
        } else {
            this.setState({
                mentor: true
            });
        }
    }

    handleProjectCheck(e) {
        if (this.state.project) {
            this.setState({
                project: false
            });
        } else {
            this.setState({
                project: true
            });
        }
    };

    handleNext() {
        if (this.state.name.trim() === "" || this.state.location.trim() == "" || this.state.email.trim() === "" || !this.state.project && !this.state.whiteboarding && !this.state.mentor) {
            Alert.alert("Please fill out the all starred fields!");
        } else {
            if (this.state.project) this.state.interests.push("project");
            if (this.state.mentor) this.state.interests.push("mentor");
            if (this.state.whiteboarding) this.state.interests.push("whiteboard");
        }
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
                    style={styles.locationInput}
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

                <View style={styles.checkboxContainer}>
                    <Text style={styles.subText}>Interests:</Text>

                    <View style={{ flexDirection: "row"}}>
                        <CheckBox title='whiteboarding' value={this.state.whiteboarding} onChange={this.handleWhiteCheck}></CheckBox>
                        <Text style={styles.check}>Whiteboarding</Text>
                    </View>

                    <View style={{ flexDirection: "row"}}>
                        <CheckBox title='project' value={this.state.project} onChange={this.handleProjectCheck}></CheckBox>
                        <Text style={styles.check}>Starting a new project</Text>
                    </View>

                    <View style={{ flexDirection: "row"}}>
                    <CheckBox title='mentor' value={this.state.mentor} onChange={this.handleMentorCheck}></CheckBox>
                        <Text style={styles.check}>Finding a mentor/peer</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={this.handleNext}>
                        <Text style={styles.nextText}>NEXT</Text>
                </TouchableOpacity>

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

    locationInput: {
        width: 216,
        backgroundColor: 'white'
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

    nextText: {
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "#586f7c", 
        textAlign: "center",
        padding: 10
    },
    
    nextButton: {
        marginTop: 30
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

    checkboxContainer: {
        marginTop: 50,
        alignItems: "flex-start"
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
    },

    check: {
        color: "white",
        paddingTop: 5
    },
});




