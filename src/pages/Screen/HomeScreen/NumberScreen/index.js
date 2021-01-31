import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import CardBoxGrup from '../../../../components/CardBoxGrup';
import {WARNA_TAB} from '../../../../utils/warna';
import ModalChild from '../../../../components/ModalChild';
import datas from './data';

export default function ActivitiesScreen() {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState(null);

  const onShowModal = (data) => {
    setContent(data);
    setModal(true);
  };
  const onCloseModal = () => {
    setModal(false);
    setContent(null);
  };

  return (
    <>
      <View style={styles.CardBoxContainer}>
        <View style={styles.TabScroll}>
          {datas.map((data, i) => (
            <CardBoxGrup
              key={i}
              color={WARNA_TAB}
              {...data}
              onPress={onShowModal}
            />
          ))}
        </View>
      </View>
      {/* <ModalChild isVisible={modal} content={content} onClose={onCloseModal} /> */}
    </>
  );
}

const styles = StyleSheet.create({
  CardBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  TabScroll: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
