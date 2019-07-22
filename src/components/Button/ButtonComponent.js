import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonComponent = ({ text, action }) => {
  return (
    <TouchableOpacity style={styles.buttonShape} onPress={action}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ButtonComponent;
