import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchJoke } from '@lusiaves/actions/example';

import HomeComponent from './HomeComponent';

const HomeContainer = ({ joke, getJoke }) => {
  return <HomeComponent joke={joke} getJoke={getJoke} />;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
