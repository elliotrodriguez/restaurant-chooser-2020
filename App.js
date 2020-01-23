import React from 'react';
import {Image, Platform, View, Text} from 'react-native';
import {ScreenTabs} from './app/components/screen-tabs';

//import {TabNavigator} from 'react-navigation';
// import {PeopleScreen} from './app/screens/PeopleScreen';
// import {DecisionScreen} from './app/screens/DecisionScreen';
// import {RestaurantScreen} from './app/screens/RestaurantScreen';

console.log(`Restaurant Chooser running on ${Platform.OS}`);

export default class App extends React.Component {
  render() {
    return <ScreenTabs />;
  }
}
