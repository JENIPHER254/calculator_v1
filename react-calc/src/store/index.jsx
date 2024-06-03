import { createStore } from "redux";
import {evaluate} from "mathjs"

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
    const ans = evaluate(state.equation);
    const final_ans = ans.toString();
    if(state.recent1 === state.equation ){
      return {
        result: state.result,
        equation: state.equation,
        recent1: state.recent1,
        recent2: state.recent2,
        currentIem: final_ans,
      };
    }else{
      return {
        result: state.result,
        equation: state.equation,
        recent1: state.equation + " = " + final_ans,
        recent2: state.recent1,
        currentIem: final_ans,
      };
    }
   
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
    const delString = state.equation.slice(0,-1);
    const lastChar = delString[delString.length-1];
    return {
      result: state.result,
      equation: delString,
      recent1: state.recent1,
      recent2: state.recent2,
      currentIem: lastChar,
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
