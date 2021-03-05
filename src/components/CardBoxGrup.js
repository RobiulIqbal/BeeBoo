import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Tts from 'react-native-tts';
import {fs, wp} from './responsive';

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
        style={{width: '70%', height: '70%'}}
        resizeMode={'contain'}
      />
      <Text
        style={{
          marginTop: 5,
          color: 'black',
          fontSize: fs(18),
          textAlign: 'center',
          fontFamily: 'Poppins-Bold',
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
    height: wp(45),
    width: wp(47),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    alignContent: 'center',
  },
});
