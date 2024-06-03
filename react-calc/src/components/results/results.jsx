import React from "react";
import { useSelector } from "react-redux";
const Results = () => {
  const value1 = useSelector((state) => state.currentIem);
  const value2 = useSelector((state) => state.equation);
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-75">
        <div className="justify-end items-end flex my-5 mx-1 overflow-hidden text-gray-400">
          <h1 className="text-xl">{value2 === "" ? "0" : value2}</h1>
        </div>
        <div className="justify-end items-end flex my-5 mx-1 overflow-hidden">
          <h1 className="text-4xl text-right overflow-hidden text-ellipsis w-3/4">
            {value1 === "" ? "0" : value1}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Results;
