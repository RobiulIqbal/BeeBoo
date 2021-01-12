import React from 'react';
import {StyleSheet, Image, Text, View, Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {Belajar, Jalan, Baca} from '../../assets';
import {WARNA_SLIDE1, WARNA_SLIDE2, WARNA_SLIDE3} from '../../utils/warna';

const Slidone = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate('Home')}
      onSkip={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: WARNA_SLIDE1,
          image: <Image source={Belajar} style={styles.slide1} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: WARNA_SLIDE2,
          image: <Image source={Jalan} style={styles.slide2} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: WARNA_SLIDE3,
          image: <Image source={Baca} style={styles.slide3} />,
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default Slidone;

const styles = StyleSheet.create({
  slide1: {
    width: 220,
    height: 222,
  },
  slide2: {
    width: 220,
    height: 222,
  },
  slide3: {
    width: 220,
    height: 222,
  },
});
