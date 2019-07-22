/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '@lusiaves/containers/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
