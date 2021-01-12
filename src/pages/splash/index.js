import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {WARNA_DASAR} from '../../utils/warna';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Slidone');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.background}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.setupone}>BeeBoo</Text>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WARNA_DASAR,
  },
  logo: {
    width: 220,
    height: 222,
    // backgroundColor: '#ecf0f1',
  },
  setupone: {
    marginTop: 15,
    fontSize: 25,
  },
});
