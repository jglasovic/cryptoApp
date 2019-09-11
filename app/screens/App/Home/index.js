import { createStackNavigator } from 'react-navigation-stack';
import List from './List';
import CoinDetails from '../CoinDetails';

const HomeStack = createStackNavigator(
  {
    List: {
      screen: List,
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
    initialRouteName: 'List',
  }
);

export default HomeStack;
