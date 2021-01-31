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
          image: <Image source={Belajar} style={styles.slide2} />,
          title: 'Belajar',
          subtitle: 'Mulai Belajar dengan Orang Tua Atau Therapist',
        },
        {
          backgroundColor: WARNA_SLIDE2,
          image: <Image source={Jalan} style={styles.slide2} />,
          title: 'PECS',
          subtitle: 'Picture Exchange Communications',
        },
        {
          backgroundColor: WARNA_SLIDE3,
          image: <Image source={Baca} style={styles.slide3} />,
          title: 'Berbasis Mobile',
          subtitle: 'Tanpa Perlu Membawa Buku Untuk Berkomunikasi',
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
