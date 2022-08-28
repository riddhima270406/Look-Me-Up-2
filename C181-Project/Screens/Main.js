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

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            faces: []
        };

        this.onFaceDetected = this.onFaceDetected.bind(this);
    }

    async componentDidMount() {
        const { status } = await Camera.requesstPermissionAsync();
        this.setState({ hasCameraPermission: status === "granted"});
    }

    onFaceDetected({ faces }) {
        this.setState({ faces: faces });
    }

    render() {
        return(
            <View style={styles.middleContainer}>
                <Camera
                    style={{ flex:1 }}
                    type={Camera.Constants.Type.front}
                    faceDetectorSettings={{
                        mode: FaceDetector.Constants.Mode.fast,
                        detectLandmarks: FaceDetector.Constants.Landmarks.all,
                        runClassifications: FaceDetector.Constants.Classifications.all
                    }}
                    onFaceDetected={this.onFaceDetected}
                    onFaceDetectionError={this.onFaceDetectionError}
                    />
                {this.staye.faces.map(face => (
                    <Filter1 key={`face-id-${face.faceID}`} face={face}/>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    middleContainer: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30
    },
    cameraStyle: {
        flex: 0.65
    },
    filterContainer: {},
    actionContainer: {}
})