import { createStackNavigator } from 'react-navigation-stack';

import App from './App';
import CoinDetails from './CoinDetails';

const AppNavigator = createStackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: {
        headerVisible: false,
        header: null,
      },
    },
    CoinDetails: {
      screen: CoinDetails,
      navigationOptions: {
        headerVisible: true,
      },
    },
  },
  {
    mode: 'modal',
    initialRouteName: 'App',
  }
);

export default AppNavigator;
