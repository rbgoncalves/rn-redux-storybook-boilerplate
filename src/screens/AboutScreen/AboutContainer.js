import React from 'react';
import { View, Text } from 'react-native';
import gStyles from '@lusiaves/styles/globalStyles';
import styles from './styles';

const AboutContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={[gStyles.title, styles.title]}>React Native Boilerplate</Text>
      <View>
        <Text>React Native v0.60</Text>
        <Text>Redux + Redux-thunk</Text>
        <Text>Storybook</Text>
        <Text>NativeBase</Text>
        <Text>React Navigation</Text>
        <Text>RN vector icons (Material)</Text>
        <Text>PropTypes</Text>
        <Text>Styled-components</Text>
        <Text>Airbnb eslint + prettier</Text>
        <Text>Jest</Text>
      </View>
    </View>
  );
};

export default AboutContainer;
