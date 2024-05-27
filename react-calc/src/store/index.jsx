import { createStore } from "redux";

/**
 *
 * MY REDUCER
 *
 */
const initialState = {
  result: 0,
  equation: "",
  recent1: 0,
  recent2: 0,
};
const reducerFn = (
  state = { result: 0, equation: "", recent1: 0, recent2: 0 },
  action
) => {
  if (action.type === "SOL") {
    return {
      result: state.result,
      equation: state.equation,
      recent1: state.recent1,
      recent2: state.recent2,
    };
  }
  if (action.type === "CLEAR") {
    return {
      result: initialState.result,
      equation: state.equation,
      recent1: state.recent1,
      recent2: state.recent2,
    };
  }
  if (action.type === "DEL") {
    return {
      result: state.result,
      equation: state.equation,
      recent1: state.recent1,
      recent2: state.recent2,
    };
  }
  if (action.type === "UPDATE") {
    return {
      result: state.result + 10,
      equation: state.equation,
      recent1: state.recent1,
      recent2: state.recent2,
    };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
