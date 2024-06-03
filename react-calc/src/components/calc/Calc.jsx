import React, { useState } from "react";
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
  const [newItemName, setNewItemName] = useState("");
  const solution = () => {
    dispatch({ type: "SOL" });
  };
  const clear = () => {
    dispatch({ type: "CLEAR" });
  };
  const del = () => {
    dispatch({ type: "DEL" });
  };
  const update = (val, name) => {
    const itemName = name;

    if (itemName === newItemName && newItemName === "equ") {
      setNewItemName(itemName);
      console.log(itemName);
      return;
    } else {
      setNewItemName(itemName);
      console.log(itemName);
      dispatch({ type: "UPDATE", payload: val });
    }
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <button className="calc-btn rounded p-5 text-2xl" onClick={clear}>
          AC
        </button>

        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("%", "equ")}
        >
          <FaPercentage />
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("/", "equ")}
        >
          <FaDivide />
        </button>
        <button className="calc-btn rounded p-5 text-2xl" onClick={del}>
          <FaBackspace />
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("7", "val")}
        >
          7
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("8", "val")}
        >
          8
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("9", "val")}
        >
          9
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("*", "equ")}
        >
          <FaTimes />
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("4", "val")}
        >
          4
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("5", "val")}
        >
          5
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("6", "val")}
        >
          6
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("-", "equ")}
        >
          <FaMinus />
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("1", "val")}
        >
          1
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("2", "val")}
        >
          2
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("3", "val")}
        >
          3
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update("+", "equ")}
        >
          <IoMdAdd />
        </button>
        <button
          className="calc-btn rounded p-5 col-span-2 text-2xl"
          onClick={() => update("0", "val")}
        >
          0
        </button>
        <button
          className="calc-btn rounded p-5 text-2xl"
          onClick={() => update(".", "val")}
        >
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
