import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  OneBaca,
  OneBasket,
  OneBicara,
  OneCatur,
  OneGame,
  OneGowes,
  OneJalan,
  OneKomik,
  OneLari,
  OneLihat,
  OneMainan,
  OnePuzzle,
  OneRapi,
  OneRenang,
  OneSepak,
  OneSkate,
  OneTennis,
} from '../../../assets/Images/Activities';
import CardBoxGrup from '../../../components/CardBoxGrup';
import {WARNA_TAB} from '../../../utils/warna';

export default function ActivitiesScreen() {
  return (
    <View style={styles.CardBoxContainer}>
      <View style={styles.TabScroll}>
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneBasket}
          title="Basket"
          voice="Basket"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneCatur}
          title="Catur"
          voice="Catur"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneKomik}
          title="Komik"
          voice="Komik"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneGowes}
          title="Sepeda"
          voice="Sepeda"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneSepak}
          title="Sepak Bola"
          voice="Sepak Bola"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OnePuzzle}
          title="Puzzle"
          voice="Puzzle"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneBaca}
          title="Membaca"
          voice="Membaca"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneLari}
          title="Berlari"
          voice="Berlari"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneLihat}
          title="Melihat"
          voice="Melihat"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneSkate}
          title="Skateboard"
          voice="Sketboard"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneRenang}
          title="Renang"
          voice="Renang"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneBicara}
          title="Bicara"
          voice="Bicara"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneTennis}
          title="Tennis"
          voice="Tenis"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneRapi}
          title="Merapikan"
          voice="Merapikan"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneMainan}
          title="Mainan"
          voice="Mainan"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneGame}
          title="Game"
          voice="Game"
        />
        <CardBoxGrup
          color={WARNA_TAB}
          image={OneJalan}
          title="Jalan"
          voice="Jalan"
        />
      </View>
    </View>
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
