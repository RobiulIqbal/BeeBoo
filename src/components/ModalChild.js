import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Tts from 'react-native-tts';
import {back, Logo, OneGame} from '../assets/Images';
import {WARNA_CARD2, WARNA_TAB} from '../utils/warna';
import {fs, wp} from './responsive';

const ModalChild = (props) => {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.ModalContainer}>
        <Text style={styles.text}>Pilih Salah Satu! </Text>
        <View style={styles.ContentContainer}>
          {props.content &&
            props.content.map((data, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => Tts.speak(data.title)}
                  style={styles.CardModalContainer}>
                  <Image
                    source={data.image}
                    style={{width: '60%', height: '60%', flexWrap: 'wrap'}}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: fs(11),
                      textAlign: 'center',
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {data.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
      <View style={styles.ContainerButton}>
        <TouchableOpacity onPress={props.onClose} style={styles.buttonback}>
          <Image
            source={back}
            style={{width: 40, height: 40}}
            resizeMode="contain"
          />
          {/* <Text style={styles.textButton}>KEMBALI</Text> */}
        </TouchableOpacity>
      </View>
      {/* <Button title="Close Modal" onPress={props.onClose} /> */}
    </Modal>
  );
};

export default ModalChild;

const styles = StyleSheet.create({
  ModalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  ContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    padding: 10,
  },
  CardModalContainer: {
    height: wp(40),
    width: wp(40),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: WARNA_TAB,
    padding: 5,
  },
  text: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: wp(5),
    marginTop: 25,
    alignItems: 'center',
  },
  ContainerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonback: {
    backgroundColor: '#2BD9F5',
    borderRadius: 25,
    height: 75,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
//npx react-native link
