import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IconActivities,
  IconFeelings,
  IconFoods,
  IconGeneral,
  IconNumbers,
  IconPeople,
  IconSchool,
} from '../../assets/Images';
import {fs, wp} from '../../components/responsive';
import {
  WARNA_CARD1,
  WARNA_CARD2,
  WARNA_CARD3,
  WARNA_CARD4,
  WARNA_CARD5,
  WARNA_CARD6,
  WARNA_CARD7,
  WARNA_TAB,
} from '../../utils/warna';
import {
  ActivitiesScreen,
  BuahScreen,
  FeelingsScreen,
  GeneralScreen,
  MakananScreen,
  MinumanScreen,
  NumbersScreen,
  PeopleScreen,
  PlaceScreen,
  SchoolScreen,
} from '../Screen';

const TabBox = (props) => {
  const onNavigate = () => {
    props.onPress(props.title);
  };
  return (
    <TouchableOpacity
      onPress={onNavigate}
      style={[styles.tabBoxContainer, {backgroundColor: props.color}]}>
      <Image
        source={props.image}
        style={{width: '60%', height: '60%'}}
        resizeMode={'contain'}
      />
      <Text
        style={{
          marginTop: 5,
          color: 'white',
          fontFamily: 'Poppins-ExtraBold',
          fontSize: fs(18),
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default function Home() {
  const [screen, setScreen] = useState('Aktivitas');

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ScrollView>
          {/* conditional rendering screennya disini */}
          {screen === 'Aktivitas' && <ActivitiesScreen />}
          {screen === 'Perasaan' && <FeelingsScreen />}
          {screen === 'Buah' && <BuahScreen />}
          {screen === 'Umum' && <GeneralScreen />}
          {screen === 'Tempat' && <PlaceScreen />}
          {screen === 'Numbers' && <NumbersScreen />}
          {screen === 'Orang' && <PeopleScreen />}
          {screen === 'Sekolah' && <SchoolScreen />}
          {screen === 'Makanan' && <MakananScreen />}
          {screen === 'Minuman' && <MinumanScreen />}
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TabBox
            color={WARNA_CARD1}
            image={IconActivities}
            title="Aktivitas"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD2}
            image={IconFeelings}
            title="Perasaan"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD3}
            image={IconFoods}
            title="Buah"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD4}
            image={IconGeneral}
            title="Umum"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD1}
            image={IconSchool}
            title="Tempat"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD3}
            image={IconFoods}
            title="Makanan"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD5}
            image={IconNumbers}
            title="Numbers"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD6}
            image={IconPeople}
            title="Orang"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD7}
            image={IconSchool}
            title="Sekolah"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD3}
            image={IconFoods}
            title="Minuman"
            onPress={(title) => setScreen(title)}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 4,
    flexDirection: 'column',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: WARNA_TAB,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  tabBoxContainer: {
    height: wp(28),
    width: wp(32),
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
