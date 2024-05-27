import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaDivide, FaMinus, FaPercentage, FaTimes } from "react-icons/fa";
import { BsPlusSlashMinus } from "react-icons/bs";
const Calc = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <button className="calc-btn rounded p-5 text-2xl">AC</button>
        <button className="calc-btn rounded p-5 text-2xl">
          <BsPlusSlashMinus />
        </button>
        <button className="calc-btn rounded p-5 text-2xl">
          <FaPercentage />
        </button>
        <button className="calc-btn rounded p-5 text-2xl">
          <FaDivide />
        </button>
        <button className="calc-btn rounded p-5 text-2xl">7</button>
        <button className="calc-btn rounded p-5 text-2xl">8</button>
        <button className="calc-btn rounded p-5 text-2xl">9</button>
        <button className="calc-btn rounded p-5 text-2xl">
          <FaTimes />
        </button>
        <button className="calc-btn rounded p-5 text-2xl">4</button>
        <button className="calc-btn rounded p-5 text-2xl">5</button>
        <button className="calc-btn rounded p-5 text-2xl">6</button>
        <button className="calc-btn rounded p-5 text-2xl">
          <FaMinus />
        </button>
        <button className="calc-btn rounded p-5 text-2xl">1</button>
        <button className="calc-btn rounded p-5 text-2xl">2</button>
        <button className="calc-btn rounded p-5 text-2xl">3</button>
        <button className="calc-btn rounded p-5 text-2xl">
          <IoMdAdd />
        </button>
        <button className="calc-btn rounded p-5 col-span-2 text-2xl">0</button>
        <button className="calc-btn rounded p-5 text-2xl">AC</button>
        <button className="calc-btn rounded p-5 text-2xl">AC</button>
      </div>
    </>
  );
};
export default Calc;
