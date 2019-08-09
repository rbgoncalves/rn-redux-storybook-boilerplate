import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import Button from '@lusiaves/components/Button';
import Quote from '@lusiaves/components/Quote';
import { CHUCK_NORRIS } from '@lusiaves/constants/images';
import { fetchJoke } from '@lusiaves/actions/example';
import styles from './styles';

const HomeContainer = ({ joke, getJoke, t }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={CHUCK_NORRIS} />
      <Button text={t('chuck')} action={getJoke} />
      <Quote text={joke} />
    </View>
  );
};

HomeContainer.propTypes = {
  joke: PropTypes.string.isRequired,
  getJoke: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  joke: state.example.joke,
});

const mapDispatchToProps = {
  getJoke: fetchJoke,
};

export default compose(
  withTranslation(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomeContainer);
