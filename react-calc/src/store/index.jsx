import { createStore } from "redux";

/**
 *
 * MY REDUCER
 *
 */
const reducerFn = (state = { test: 123, test2: 349 },action) => {
  return state;
};

const store = createStore(reducerFn);
export default store;
