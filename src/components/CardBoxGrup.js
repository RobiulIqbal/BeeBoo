import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Tts from 'react-native-tts';
import {hp, wp} from './responsive';

const CardBoxGrup = (props) => {
  const handleVoice = () => {
    Tts.setDefaultLanguage('id-ID');
    Tts.speak(props.voice);
  };
  return (
    <TouchableOpacity
      onPress={() => handleVoice(props.voice)}
      style={[styles.tabCardBoxContainer, {backgroundColor: props.color}]}>
      <Image
        source={props.image}
        style={{width: '60%', height: '60%'}}
        resizeMode={'contain'}
      />
      <Text style={{marginTop: 5, color: 'black'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CardBoxGrup;

const styles = StyleSheet.create({
  tabCardBoxContainer: {
    height: wp(28),
    width: wp(30),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
