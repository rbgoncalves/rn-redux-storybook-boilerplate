import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '@lusiaves/containers/HomeScreen';
import AboutScreen from '@lusiaves/containers/AboutScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { NAVIGATION, GREY } from '@lusiaves/constants/colors';
import StorybookUI from '../../storybook';

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    case 'About':
      iconName = 'info-outline';
      break;
    case 'Storybook':
      iconName = 'extension';
      break;
    default:
      iconName = null;
  }

  return <Icon name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Storybook: StorybookUI,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => getTabBarIcon(navigation, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: NAVIGATION,
      inactiveTintColor: GREY,
    },
  }
);

export default createAppContainer(TabNavigator);
