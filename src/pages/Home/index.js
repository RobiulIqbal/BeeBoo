import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {
  IconActivities,
  IconFeelings,
  IconFoods,
  IconGeneral,
  IconNumbers,
  IconPeople,
  IconSchool,
  left,
} from '../../assets/Images';
import {IconMakan} from '../../assets/Images/Makanan';
import {Iconminum} from '../../assets/Images/Minuman';
import {IconPlace} from '../../assets/Images/place';
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
  WARNA_TAB1,
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

let screenWidth = Dimensions.get('window').width;

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
          fontFamily: 'Poppins-Bold',
          fontSize: fs(18),
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default function Home() {
  const [screen, setScreen] = useState('Aktivitas');
  const ScrollRef = useRef(null);
  const [position, setPosition] = useState(0);

  const leftButtonHandler = () => {
    let newPosition = position - 200;
    ScrollRef.current.scrollTo({
      x: newPosition,
      animated: true,
    });
    setPosition(newPosition);
  };

  const rightButtonHandler = () => {
    let newPosition = position + 200;
    ScrollRef.current.scrollTo({
      x: newPosition,
      animated: true,
    });
    setPosition(newPosition);
  };

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
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={leftButtonHandler} style={{flex: 1}}>
            <Image
              source={left}
              style={{width: 25, height: 25}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text
            style={{
              flex: 10,
              fontFamily: 'Poppins-ExtraBold',
              fontSize: fs(20),
              textAlign: 'center',
            }}>
            Menu
          </Text>
          <TouchableOpacity onPress={rightButtonHandler} style={{flex: 1}}>
            <Image
              source={left}
              style={{width: 25, height: 25}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          indicatorStyle="black"
          scrollEnabled={true}
          showsHorizontalScrollIndicator={true}
          onScroll={(e) => setPosition(e.nativeEvent.contentOffset.x)}
          ref={ScrollRef}>
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
            color={WARNA_CARD7}
            image={IconMakan}
            title="Makanan"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD6}
            image={Iconminum}
            title="Minuman"
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
            image={IconPlace}
            title="Tempat"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD6}
            image={IconPeople}
            title="Orang"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD5}
            image={IconNumbers}
            title="Numbers"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD7}
            image={IconSchool}
            title="Sekolah"
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
    backgroundColor: WARNA_TAB1,
    marginTop: 5,
  },
  tabBoxContainer: {
    height: wp(32),
    width: wp(32),
    marginLeft: 3,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    // marginTop: 10,
  },
});
