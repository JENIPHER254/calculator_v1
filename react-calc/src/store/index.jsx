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
  currentIem: "",
};
const reducerFn = (
  state = { result: 0, equation: "", recent1: 0, recent2: 0, currentIem: "" },
  action
) => {
  if (action.type === "SOL") {
    return {
      result: state.result,
      equation: state.equation,
      recent1: state.recent1,
      recent2: state.recent2,
      currentIem: 16,
    };
  }
  if (action.type === "CLEAR") {
    return {
      result: initialState.result,
      equation: initialState.equation,
      recent1: state.recent1,
      recent2: state.recent2,
      currentIem: initialState.currentIem,
    };
  }
  if (action.type === "DEL") {
    return {
      result: state.result,
      equation: state.equation,
      recent1: state.recent1,
      recent2: state.recent2,
      currentIem: state.currentIem,
    };
  }
  if (action.type === "UPDATE") {
    return {
      result: state.result + 10,
      equation: state.equation + action.payload,
      recent1: state.recent1,
      recent2: state.recent2,
      currentIem: action.payload,
    };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
