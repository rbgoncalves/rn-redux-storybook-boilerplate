import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { Text, View } from 'react-native';
import Colors from '@lusiaves/constants/colors';
import styles from './styles';

const QuoteComponent = ({ text }) => {
  if (!text) return null;

  return (
    <View style={styles.quote}>
      <Icon name="format-quote-open" size={25} color={Colors.GREY} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.closeQuote}>
        <Icon name="format-quote-close" size={25} color={Colors.GREY} />
      </View>
    </View>
  );
};

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuoteComponent;
