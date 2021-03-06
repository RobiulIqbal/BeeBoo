import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Tts from 'react-native-tts';
import {back} from '../assets/Images';
import {WARNA_TAB} from '../utils/warna';
import {fs, wp} from './responsive';

const ModalChild = (props) => {
  return (
    <ScrollView>
      <Modal
        isVisible={props.isVisible}
        animationType="slide"
        onRequestClose={props.onClose}>
        <View style={styles.ModalContainer}>
          <Text style={styles.text}>Pilih Salah Satu! </Text>
          <ScrollView>
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
                        style={{width: wp(25), height: wp(25)}}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          marginTop: 15,
                          fontSize: fs(13),
                          textAlign: 'center',
                          fontFamily: 'Poppins-Bold',
                        }}>
                        {data.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
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
    </ScrollView>
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
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
  },
  CardModalContainer: {
    height: wp(52),
    width: wp(35),
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
    marginTop: 10,
  },
  // buttonback: {
  //   backgroundColor: '#2BD9F5',
  //   borderRadius: 25,
  //   height: 75,
  //   width: 75,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column',
  // },
  // textButton: {
  //   color: 'white',
  //   textAlign: 'center',
  //   fontSize: 13,
  //   fontWeight: 'bold',
  //   marginTop: 10,
  // },
});
//npx react-native link
