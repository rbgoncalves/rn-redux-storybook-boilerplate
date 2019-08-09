import * as types from '@lusiaves/constants/actionTypes';

import { get } from '@lusiaves/utils/request';

// Dispatchers
const loadJokeSuccess = joke => ({
  type: types.CHUCK_JOKE_LOAD_SUCCESS,
  payload: joke,
});

// Actions

export const fetchJoke = () => {
  return dispatch => {
    get('random').then(response => {
      dispatch(loadJokeSuccess(response));
    });
  };
};

export const otherAction = () => {
  return 'dispatch example action';
};
