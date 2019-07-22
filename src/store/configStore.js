import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk];

// Create store from root reducer and thunk middleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
