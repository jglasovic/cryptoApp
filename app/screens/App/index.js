import React from 'react';

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { View } from 'react-native';
import List from './List';
// const TabBarComponent = props => <BottomTabBar {...props} />;

const AppTabs = createBottomTabNavigator(
  {
    List,
    Favorites: () => <View style={{ flex: 1, backgroundColor: 'blue' }} />,
    Config: () => <View style={{ flex: 1, backgroundColor: 'red' }} />,
  },
  {}
);

export default AppTabs;
