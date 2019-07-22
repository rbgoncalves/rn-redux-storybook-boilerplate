import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';

const AppStack = createStackNavigator(
  {
    Tabs: AppTabNavigator,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppStack);
