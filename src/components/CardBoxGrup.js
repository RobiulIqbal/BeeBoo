import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Tts from 'react-native-tts';
import {fs, hp, wp} from './responsive';

const CardBoxGrup = (props) => {
  const handleVoice = () => {
    Tts.setDefaultLanguage('id-ID');
    Tts.speak(props.voice);
  };

  const handlePress = () => {
    handleVoice(props.voice);
    props.onPress(props.content);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.tabCardBoxContainer, {backgroundColor: props.color}]}>
      <Image
        source={props.image}
        style={{width: '60%', height: '60%'}}
        resizeMode={'contain'}
      />
      <Text
        style={{
          marginTop: 5,
          color: 'black',
          fontSize: fs(11),
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

CardBoxGrup.defaultProps = {
  onPress: () => console.log('button pressed'),
};

export default CardBoxGrup;

const styles = StyleSheet.create({
  tabCardBoxContainer: {
    height: wp(30),
    width: wp(30),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    alignContent: 'center',
  },
});
