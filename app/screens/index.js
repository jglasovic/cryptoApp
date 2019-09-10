import { createStackNavigator } from 'react-navigation-stack';

import App from './App';

const AppNavigator = createStackNavigator(
  {
    App,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const RootNavigator = AppNavigator;

export default RootNavigator;
