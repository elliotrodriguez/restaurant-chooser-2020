import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Screen from '../screens/screen';
import {Platform} from 'react-native';
import Icon from 'react-native-ionicons';

const peopleScreen = () => <Screen title={'People'} />;

const decisionScreen = () => <Screen title={'Decision'} />;

const restaurantScreen = () => <Screen title={'Restaurants'} />;

const TabNavigator = createMaterialTopTabNavigator(
  {
    People: peopleScreen,
    Decision: decisionScreen,
    Restaurant: restaurantScreen,
  },
  {
    initialRouteName: 'Decision',
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: 'none',
    lazy: true,
    tabBarPosition: Platform.OS === 'android' ? 'top' : 'bottom',
    tabBarOptions: {
      showIcon: true,
      style: {
        paddingTop: 0,
      },
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        let iconName;
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'People':
            iconName = 'md-people';
            break;
          case 'Decision':
            iconName = 'help';
            break;
          case 'Restaurant':
            iconName = 'restaurant';
            break;
        }

        return <Icon name={iconName} color={'white'} />;
      },
    }),
  },
);

const appContainer = createAppContainer(TabNavigator);

export {appContainer as ScreenTabs};
