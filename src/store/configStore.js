import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
// import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware();

const middleware = [thunk, epicMiddleware];

// Create store from root reducer and thunk middleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

// epicMiddleware.run(rootEpic);

export default store;
