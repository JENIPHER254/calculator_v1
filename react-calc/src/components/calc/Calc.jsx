import React from "react";
import { IoMdAdd } from "react-icons/io";
import {
  FaBackspace,
  FaDivide,
  FaMinus,
  FaPercentage,
  FaTimes,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaEquals } from "react-icons/fa";
import { useDispatch } from "react-redux";
const Calc = () => {
  const dispatch = useDispatch();
  const solution = () => {
    dispatch({ type: "SOL" });
  };
  const clear = () => {
    dispatch({ type: "CLEAR" });
  };
  const del = () => {
    dispatch({ type: "DEL" });
  };
  const update = () => {
    dispatch({ type: "UPDATE" });
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <button className="calc-btn rounded p-5 text-2xl" onClick={clear}>
          AC
        </button>

        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          <FaPercentage />
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          <FaDivide />
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={del}>
          <FaBackspace />
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          7
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          8
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          9
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          <FaTimes />
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          4
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          5
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          6
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          <FaMinus />
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          1
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          2
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          3
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          <IoMdAdd />
        </button>
        <button
          className="calc-btn rounded p-5 col-span-2 text-2xl"
          onClick={update}
        >
          0
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={update}>
          <GoDotFill />
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={solution}>
          <FaEquals />
        </button>
      </div>
    </>
  );
};
export default Calc;
