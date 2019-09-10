import React from 'react';
// import { Image } from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { View } from 'react-native';
// const TabBarComponent = props => <BottomTabBar {...props} />;

const AppTabs = createBottomTabNavigator(
  {
    SelectPassengers: () => <View style={{ flex: 1, backgroundColor: 'yellow' }} />,
    SelectDates: () => <View style={{ flex: 1, backgroundColor: 'blue' }} />,
  },
  {}
);

export default AppTabs;
