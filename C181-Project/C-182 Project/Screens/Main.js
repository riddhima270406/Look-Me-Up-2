import { StatusBar } from "expo-status-bar";
import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Platform,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {Camera} from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { isMap } from 'lodash';

export default class MAin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            faces: []
        };
        this.onFacesDetected = this.onFacesDetected.bind(this);
    }
    async componentDidMount() {
        const { status } =  await Camera.requestPermissionAsync();
        this.setState({hasCameraPermission: status === "granted"});
    }

    //face dettecion
}