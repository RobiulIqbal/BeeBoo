import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActivitiesScreen from '../../components/ActivitiesScreen';
import Feelings from '../../components/FeelingsScreen';
import FoodScreen from '../../components/FoodScreen';
import GeneralScreen from '../../components/GeneralScreen';
import NumbersScreen from '../../components/NumbersScreen';
import PeopleScreen from '../../components/PeopleScreen';
import SchoolScreen from '../../components/SchoolScreen';
import {WARNA_TAB} from '../../utils/warna';
import {IconActivities} from '../../assets/Images';

const TabBox = (props) => {
  const onNavigate = () => {
    props.onPress(props.title);
  };
  return (
    <TouchableOpacity
      onPress={onNavigate}
      style={[styles.tabBoxContainer, {backgroundColor: props.color}]}>
      <Text>{props.title}</Text>
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
        {screen === 'Feelings' && <Feelings />}
        {screen === 'Foods' && <FoodScreen />}
        {screen === 'General' && <GeneralScreen />}
        {screen === 'Numbers' && <NumbersScreen />}
        {screen === 'People' && <PeopleScreen />}
        {screen === 'School' && <SchoolScreen />}
      </View>
      <View style={styles.tabContainer}>
        <ScrollView horizontal={true}>
          <TabBox
            color="purple"
            image="IconActivities"
            title="Activities"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color="green"
            title="Feelings"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color="yellow"
            title="Foods"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color="purple"
            title="General"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color="purple"
            title="Numbers"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color="purple"
            title="People"
            onPress={(title) => setScreen(title)}
          />
          <TabBox
            color="purple"
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
