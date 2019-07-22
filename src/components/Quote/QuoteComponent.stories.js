import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '@lusiaves/styles/CenterView';
import QuoteComponent from './QuoteComponent';

storiesOf('Quote', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic quote', () => <QuoteComponent text="I'm a quote!!" />);
