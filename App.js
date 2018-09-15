/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  componentDidMount(){
    NativeModules.JTSImagePreview.showImage('https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=bdc08ca394410d95482816cdb957f078')
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }
  render() {
    return (
      
    //   <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
    //   <Text style={styles.buttonText}>
    //     Sign in with Facebook
    //   </Text>
    // </LinearGradient>
    <LottieView
    ref={animation => {
      this.animation = animation;
    }}
    source={require('./assets/heart.json')}
  />
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
