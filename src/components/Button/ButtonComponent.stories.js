import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import CenterView from '@lusiaves/styles/CenterView';
import ButtonComponent from './ButtonComponent';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => <ButtonComponent text="Click me" action={action('button-clicked')} />);
