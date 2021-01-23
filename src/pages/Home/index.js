import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  ActivitiesScreen,
  FeelingsScreen,
  FoodScreen,
  GeneralScreen,
  NumbersScreen,
  PeopleScreen,
  SchoolScreen,
} from '../Screen';
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
  IconActivities,
  IconFeelings,
  IconFoods,
  IconGeneral,
  IconNumbers,
  IconPeople,
  IconSchool,
} from '../../assets/Images';

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
        style={{width: '50%', height: '50%'}}
        resizeMode={'cover'}
      />
      <Text style={{marginTop: 5, color: 'white'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default function Home() {
  const [screen, setScreen] = useState('General');

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* conditional rendering screennya disini */}
        {screen === 'Activities' && <ActivitiesScreen />}
        {screen === 'Feelings' && <FeelingsScreen />}
        {screen === 'Foods' && <FoodScreen />}
        {screen === 'General' && <GeneralScreen />}
        {screen === 'Numbers' && <NumbersScreen />}
        {screen === 'People' && <PeopleScreen />}
        {screen === 'School' && <SchoolScreen />}
      </View>
      <View style={styles.tabContainer}>
        <ScrollView horizontal={true}>
          <TabBox
            color={WARNA_CARD1}
            image={IconActivities}
            title="Activities"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD2}
            image={IconFeelings}
            title="Feelings"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD3}
            image={IconFoods}
            title="Foods"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD4}
            image={IconGeneral}
            title="General"
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
            title="People"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color={WARNA_CARD7}
            image={IconSchool}
            title="School"
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
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '70%',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: WARNA_TAB,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
  },
  tabBoxContainer: {
    height: 100,
    width: 100,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
