import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Button from '@lusiaves/components/Button';
import Quote from '@lusiaves/components/Quote';
import { CHUCK_NORRIS } from '@lusiaves/constants/images';
import styles from './styles';

const HomeComponent = ({ joke, getJoke }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={CHUCK_NORRIS} />
      <Button text="Tell me a fact about Chuck" action={getJoke} />
      <Quote text={joke} />
    </View>
  );
};

HomeComponent.propTypes = {
  joke: PropTypes.string.isRequired,
  getJoke: PropTypes.func.isRequired,
};

export default HomeComponent;
