import * as types from '@lusiaves/constants/actionTypes';
import createReducer from '@lusiaves/utils/createReducer';

const initialState = {
  joke: '',
};

export default createReducer(
  {
    [types.CHUCK_JOKE_LOAD_SUCCESS]: (state, { payload }) => {
      state.joke = payload;
    },
  },
  initialState
);
