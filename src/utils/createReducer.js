import produce from 'immer';

function isPlainObject(o) {
  return typeof o === 'object';
}

/**
 * @param funcMap the functions map
 * @param initialState initiate state
 * @returns {Function}
 */
export default function createReducer(funcMap, initialState) {
  if (!isPlainObject(funcMap)) {
    throw new Error('funcMap need to be a plain object');
  }
  return (state = initialState, action) =>
    Object.prototype.hasOwnProperty.call(funcMap, action.type)
      ? produce(state, draft => funcMap[action.type](draft, action))
      : state;
}
