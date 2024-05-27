import React from "react";
import { useSelector } from "react-redux";
const Results = () => {
  const value1 = useSelector((state) => state.currentIem);
  const value2 = useSelector((state) => state.equation);
  return (
    <>
      <div className="justify-end items-end flex my-5 mx-1 overflow-hidden text-gray-400">
        <h1 className="text-xl">{value2}</h1>
      </div>
      <div className="justify-end items-end flex my-5 mx-1 overflow-hidden">
        <h1 className="text-4xl">{value1}</h1>
      </div>
    </>
  );
};
export default Results;
