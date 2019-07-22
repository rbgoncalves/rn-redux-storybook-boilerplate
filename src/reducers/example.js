import * as types from '@lusiaves/constants/actionTypes';

const initialState = {
  joke: '',
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case types.CHUCK_JOKE_LOAD_SUCCESS: {
      return {
        ...state,
        joke: action.payload,
      };
    }
    default:
      return state;
  }
};

export default example;
