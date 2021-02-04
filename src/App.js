import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import Tts from 'react-native-tts';

Tts.getInitStatus().then(
  () => {
    // ...
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
