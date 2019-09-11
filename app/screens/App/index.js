import React from 'react';

import {
  createBottomTabNavigator,
  //BottomTabBar
} from 'react-navigation-tabs';
// import { View } from 'react-native';
import Home from './Home';
import Favorites from './Favorites';
import Options from './Options';
import { Icon } from 'react-native-elements';
// const TabBarComponent = props => <BottomTabBar {...props} />;

const AppTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="fa-home" color={tintColor} />,
      },
    },
    Favorites,
    Options,
  },
  {}
);

export default AppTabs;
