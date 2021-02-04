import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import Tts from 'react-native-tts';

Tts.getInitStatus().then(
  () => {
    // const handleVoice = () => {
    //   Tts.setDefaultLanguage('id-ID');
    //   Tts.speak(props.voice);
    // };
    // const handlePress = () => {
    //   handleVoice(props.voice);
    //   props.onPress(props.content);
    // };
  },
  (err) => {
    if (err.code === 'no_engine') {
      Tts.requestInstallEngine();
    }
  },
);
const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
