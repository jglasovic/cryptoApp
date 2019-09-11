import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Home';
import Favorites from './Favorites';
import Options from './Options';
import { Icon } from 'react-native-elements';

const AppTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="list" color={tintColor} />,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="config" color={tintColor} />,
      },
    },
  },
  {}
);

export default AppTabs;
