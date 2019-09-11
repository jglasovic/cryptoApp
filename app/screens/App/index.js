import React from 'react';

import {
  createBottomTabNavigator,
  //BottomTabBar
} from 'react-navigation-tabs';
import { View } from 'react-native';
import Home from './Home';
// const TabBarComponent = props => <BottomTabBar {...props} />;

const AppTabs = createBottomTabNavigator(
  {
    Home,
    Favorites: () => <View style={{ flex: 1, backgroundColor: 'blue' }} />,
    Config: () => <View style={{ flex: 1, backgroundColor: 'red' }} />,
  },
  {}
);

export default AppTabs;
